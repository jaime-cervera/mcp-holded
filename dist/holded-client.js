import fetch from 'node-fetch';
import FormData from 'form-data';
const BASE_URL = 'https://api.holded.com/api/invoicing/v1';
export class HoldedClient {
    apiKey;
    maxRetries = 3;
    backoffDelays = [1000, 2000, 4000]; // milliseconds
    retryableStatusCodes = new Set([429, 502, 503, 504]);
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    async sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async request(method, endpoint, body, queryParams) {
        let url = `${BASE_URL}${endpoint}`;
        if (queryParams) {
            const params = new URLSearchParams();
            for (const [key, value] of Object.entries(queryParams)) {
                if (value !== undefined && value !== null) {
                    params.append(key, String(value));
                }
            }
            const queryString = params.toString();
            if (queryString) {
                url += `?${queryString}`;
            }
        }
        const headers = {
            key: this.apiKey,
            'Content-Type': 'application/json',
        };
        const options = {
            method,
            headers,
        };
        if (body && (method === 'POST' || method === 'PUT')) {
            options.body = JSON.stringify(body);
        }
        let lastError = null;
        // Retry loop with exponential backoff
        for (let attempt = 0; attempt < this.maxRetries; attempt++) {
            try {
                const response = await fetch(url, options);
                // Check if response should be retried
                if (!response.ok && this.retryableStatusCodes.has(response.status)) {
                    const errorText = await response.text();
                    lastError = new Error(`Holded API error (${response.status}): ${errorText}`);
                    // If not last attempt, wait and retry
                    if (attempt < this.maxRetries - 1) {
                        const delay = this.backoffDelays[attempt];
                        await this.sleep(delay);
                        continue;
                    }
                    // Last attempt, throw error
                    throw lastError;
                }
                // Non-retryable error
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Holded API error (${response.status}): ${errorText}`);
                }
                // Success - parse and return response
                const text = await response.text();
                if (!text) {
                    return {};
                }
                return JSON.parse(text);
            }
            catch (error) {
                // Network errors or other exceptions
                if (error instanceof Error) {
                    lastError = error;
                    // Only retry if it's a retryable HTTP error
                    if (error.message.includes('Holded API error')) {
                        const statusMatch = error.message.match(/\((\d+)\)/);
                        if (statusMatch) {
                            const status = parseInt(statusMatch[1], 10);
                            if (this.retryableStatusCodes.has(status) && attempt < this.maxRetries - 1) {
                                const delay = this.backoffDelays[attempt];
                                await this.sleep(delay);
                                continue;
                            }
                        }
                    }
                }
                // Non-retryable error or last attempt
                throw error;
            }
        }
        // Should not reach here, but throw last error just in case
        throw lastError || new Error('Request failed after retries');
    }
    async get(endpoint, queryParams) {
        return this.request('GET', endpoint, undefined, queryParams);
    }
    async post(endpoint, body) {
        return this.request('POST', endpoint, body);
    }
    async put(endpoint, body) {
        return this.request('PUT', endpoint, body);
    }
    async delete(endpoint) {
        return this.request('DELETE', endpoint);
    }
    // File upload for attachments with retry logic
    async uploadFile(endpoint, file, filename) {
        const url = `${BASE_URL}${endpoint}`;
        let lastError = null;
        // Retry loop with exponential backoff
        for (let attempt = 0; attempt < this.maxRetries; attempt++) {
            try {
                const formData = new FormData();
                formData.append('file', file, filename);
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        key: this.apiKey,
                        ...formData.getHeaders(),
                    },
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    body: formData, // FormData from form-data package is not compatible with native BodyInit type
                });
                // Check if response should be retried
                if (!response.ok && this.retryableStatusCodes.has(response.status)) {
                    const errorText = await response.text();
                    lastError = new Error(`Holded API error (${response.status}): ${errorText}`);
                    // If not last attempt, wait and retry
                    if (attempt < this.maxRetries - 1) {
                        const delay = this.backoffDelays[attempt];
                        await this.sleep(delay);
                        continue;
                    }
                    // Last attempt, throw error
                    throw lastError;
                }
                // Non-retryable error
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Holded API error (${response.status}): ${errorText}`);
                }
                // Success - parse and return response
                const text = await response.text();
                if (!text) {
                    return {};
                }
                return JSON.parse(text);
            }
            catch (error) {
                // Network errors or other exceptions
                if (error instanceof Error) {
                    lastError = error;
                    // Only retry if it's a retryable HTTP error
                    if (error.message.includes('Holded API error')) {
                        const statusMatch = error.message.match(/\((\d+)\)/);
                        if (statusMatch) {
                            const status = parseInt(statusMatch[1], 10);
                            if (this.retryableStatusCodes.has(status) && attempt < this.maxRetries - 1) {
                                const delay = this.backoffDelays[attempt];
                                await this.sleep(delay);
                                continue;
                            }
                        }
                    }
                }
                // Non-retryable error or last attempt
                throw error;
            }
        }
        // Should not reach here, but throw last error just in case
        throw lastError || new Error('File upload failed after retries');
    }
}
//# sourceMappingURL=holded-client.js.map