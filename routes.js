const routes = require('next-routes')
// name     // route          // pages(.js)
module.exports = routes()                             //--------- ----------------- ---------
  .add('about')                                       // about    // ./about        // about
  .add('stories', '/stories/:id', 'story')            // stories  // ./stories/:id  // story