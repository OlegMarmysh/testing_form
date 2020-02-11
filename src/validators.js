import React from 'react';

export const required = value => (value ? undefined : 'Field is required');
const regular = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
export const validateIp = value => value && !regular.test(value)
    ? 'You have entered an invalid IP address!'
    : undefined;
export const validateSubnetMask = value => value && !regular.test(value)
    ? 'You have entered an invalid Subnet Mask!'
    : undefined;
export const validateDNS = value => value && !regular.test(value)
    ? 'You have entered an invalid DNS!'
    : undefined;