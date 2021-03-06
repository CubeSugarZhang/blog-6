const posts = require('../frontend-engineering/meta')
const nodePosts = require('../node/meta')
const tourPosts = require('../tour/meta')
const chinaPosts = require('../note/china/meta')
const noVpsPosts = require('../no-vps/meta')

function getHeader (posts) {
  return posts.map(x => {
    return [x.path, x.sideTitle || x.title]
  })
}

module.exports = {
  fe: getHeader(posts),
  node: getHeader(nodePosts),
  tour: getHeader(tourPosts),
  china: getHeader(chinaPosts),
  noVps: getHeader(noVpsPosts)
}
