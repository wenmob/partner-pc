'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')


module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://10.0.6.170:9220"'
  // BASE_API: '"http://10.0.6.242:9220"'


  // BASE_API: '"http://10.0.7.10:9220"'
  // BASE_API: '"http://10.0.7.243:9220"'
  // BASE_API: '"http://10.0.7.233:9220"'
  // BASE_API: '"http://10.0.7.115:9220"'
  // BASE_API: '"https://apix.evcoming.com/partner-admin-api"'
  // BASE_API: '"http://pre.api.evcoming.com:9001/partner-admin-api"' // 10.0.7.108::9220 | 127.0.0.1:19220 
  BASE_API: '"http://test.evcoming.com:9001/partner-admin-api"' // 10.0.7.108::9220 | 127.0.0.1:19220 
})
