/**
 * Utility functions for Majestic Buyer Theme
 */

/**
 * Deep merge content with defaults
 * Only uses defaults for missing/undefined values, preserving all provided content.
 *
 * @param {Object} content - The content from database/props
 * @param {Object} defaults - The default values
 * @returns {Object} - Merged content with defaults
 */
export function mergeContent(content = {}, defaults = {}) {
    const result = { ...defaults };

    for (const key in content) {
        if (content[key] !== undefined && content[key] !== null) {
            if (
                typeof content[key] === 'object' &&
                !Array.isArray(content[key]) &&
                typeof defaults[key] === 'object' &&
                !Array.isArray(defaults[key])
            ) {
                // Recursively merge nested objects
                result[key] = mergeContent(content[key], defaults[key]);
            } else {
                // Use content value (including arrays)
                result[key] = content[key];
            }
        }
    }

    return result;
}

/**
 * Get value from content with fallback to default
 *
 * @param {Object} content - The content object
 * @param {string} key - The key to retrieve
 * @param {*} defaultValue - The default value
 * @returns {*} - The value or default
 */
export function getContentValue(content, key, defaultValue) {
    const value = content?.[key];
    return value !== undefined && value !== null ? value : defaultValue;
}

/**
 * Generate a unique ID for accessibility purposes
 *
 * @param {string} prefix - Prefix for the ID
 * @returns {string} - Unique ID
 */
export function generateId(prefix = 'id') {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Format phone number for display
 *
 * @param {string} phone - Raw phone number
 * @returns {string} - Formatted phone number
 */
export function formatPhone(phone) {
    if (!phone) return '';
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phone;
}

/**
 * Validate email format
 *
 * @param {string} email - Email address
 * @returns {boolean} - Whether email is valid
 */
export function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Validate phone format
 *
 * @param {string} phone - Phone number
 * @returns {boolean} - Whether phone is valid
 */
export function isValidPhone(phone) {
    const cleaned = phone?.replace(/\D/g, '') || '';
    return cleaned.length >= 10;
}
