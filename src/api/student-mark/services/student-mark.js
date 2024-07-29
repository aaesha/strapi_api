'use strict';

/**
 * student-mark service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-mark.student-mark');
