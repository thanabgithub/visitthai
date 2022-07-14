const withPreact = require('next-plugin-preact');
const withPrefresh = require('@prefresh/next');
module.exports = withPrefresh(withPreact({
    /* regular next.js config options here */
}));