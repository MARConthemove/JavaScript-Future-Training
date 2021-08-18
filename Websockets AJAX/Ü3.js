'use strict'

const dns = require("dns")

const IP_V = 4 // we use IP protocol version 4
const util = require('util')

const lookup = util.promisify(dns.lookup)

lookup("www.1006.org", IP_V)
    .then(result => console.log('IP address = ' + result.address))
    .catch(error => console.log('could not lookup host'))

