'use strict';

/**
 * pastorate service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pastorate.pastorate');
