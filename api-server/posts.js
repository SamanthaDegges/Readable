const clone = require('clone')

let db = {}

const defaultData = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872,
    title: 'Ut Latin',
    body: 'Ut tempus sagittis nisl vel viverra. Vivamus rutrum, lacus at viverra dapibus, eros tortor ullamcorper quam, at aliquam nulla nisi sed lacus. Duis at ipsum a leo aliquet blandit. Duis accumsan, massa quis congue sagittis, metus sapien posuere diam, nec lobortis nisi tellus at augue. Sed hendrerit facilisis mauris sit amet suscipit. Fusce elementum volutpat mi ut fermentum. Vestibulum sit amet dapibus orci. Sed ut arcu lobortis, iaculis risus quis, viverra urna. Nam at fringilla massa.',
    author: 'MrMeowington90',
    category: 'react',
    voteScore: 6,
    deleted: false
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1481058996,
    title: 'Learn Redux in 10 minutes!',
    body: 'Integer sollicitudin pharetra venenatis. Pellentesque vitae nisi viverra, posuere velit in, varius arcu. Proin porta, libero ut efficitur auctor, massa tellus feugiat dui, at imperdiet libero metus et libero. Donec vulputate arcu purus, eu finibus nunc lacinia non. Aenean at augue aliquet, tempus erat eget, pulvinar ligula. Ut lacinia ipsum eget erat sodales sollicitudin a eget lorem. Fusce convallis dui vitae arcu rutrum, eget blandit sapien egestas. Suspendisse sed purus a orci placerat interdum. Phasellus sagittis felis dolor, quis maximus libero pulvinar et. In at egestas ipsum.',
    author: 'reDeux',
    category: 'redux',
    voteScore: 15,
    deleted: false
  },
  "1ze2u4ziyjabvozdd253nd": {
    id: '1ze2u4ziyjabvozdd253nd',
    timestamp: 1406956596,
    title: 'Udacity is the best place to learn React',
    body: "Pellentesque id ornare odio. Sed sed quam sed eros interdum semper. Fusce mollis massa urna, ac varius leo volutpat id. Aliquam tincidunt nec urna sed pellentesque. Curabitur in scelerisque augue, ac iaculis elit. Proin blandit egestas ante, sed dignissim ante sodales a. Donec porta eros ac diam ultricies pulvinar et sed sapien. Curabitur sit amet dui non eros malesuada luctus non sit amet eros. In mattis, turpis pulvinar mattis dignissim, nibh massa vehicula massa, vel facilisis dui lacus vitae lacus. Nulla id erat id nibh condimentum semper ut sit amet turpis. Nam vel lacus libero. Nulla mollis consequat venenatis. Nunc elementum eget nunc id porttitor. Fusce molestie sapien nec turpis ultricies, nec dignissim sem pharetra. Ut tempus sagittis nisl vel viverra. Vivamus rutrum, lacus at viverra dapibus, eros tortor ullamcorper quam, at aliquam nulla nisi sed lacus. Duis at ipsum a leo aliquet blandit. Duis accumsan, massa quis congue sagittis, metus sapien posuere diam, nec lobortis nisi tellus at augue. Sed hendrerit facilisis mauris sit amet suscipit. Fusce elementum volutpat mi ut fermentum. Vestibulum sit amet dapibus orci. Sed ut arcu lobortis, iaculis risus quis, viverra urna. Nam at fringilla massa.",
    author: 'squid',
    category: 'react',
    voteScore: 2,
    deleted: false
  },
  "1ai1ok1yasdfglnez": {
    id: '1ai1ok1yasdfglnez',
    timestamp: 1499638260,
    title: "I don't feel like typing",
    body: 'Just kidding. It takes more than 10 minutes to learn technology. It can take years and you never stop learning.',
    author: 'Racoco',
    category: 'udacity',
    voteScore: 0,
    deleted: false
  },
  "9i91y5zyyunovozdd321lk": {
      id: '9i91y5zyyunovozdd321lk',
      timestamp: 1467166872,
      title: 'Udacity is the best place to learn React',
      body: 'Nam vel lacus libero. Nulla mollis consequat venenatis. Nunc elementum eget nunc id porttitor. Fusce molestie sapien nec turpis ultricies, nec dignissim sem pharetra. Ut tempus sagittis nisl vel viverra. Vivamus rutrum, lacus at viverra dapibus, eros tortor ullamcorper quam, at aliquam nulla nisi sed lacus. Duis at ipsum a leo aliquet blandit. Duis accumsan, massa quis congue sagittis, metus sapien posuere diam, nec lobortis nisi tellus at augue. Sed hendrerit facilisis mauris sit amet suscipit. Fusce elementum volutpat mi ut fermentum. Vestibulum sit amet dapibus orci. Sed ut arcu lobortis, iaculis risus quis, viverra urna. Nam at fringilla massa.',
      author: 'Clara',
      category: 'react',
      voteScore: 3,
      deleted: false
    },
    "9p0p1l23ym7mf1p33lqw": {
      id: '9p0p1l23ym7mf1p33lqw',
      timestamp: 1283379060,
      title: 'SquishBanana or SquashBanana',
      body: 'Vivamus rutrum, lacus at viverra dapibus, eros tortor ullamcorper quam, at aliquam nulla nisi sed lacus. Duis at ipsum a leo aliquet blandit. Duis accumsan, massa quis congue sagittis, metus sapien posuere diam, nec lobortis nisi tellus at augue. Sed hendrerit facilisis mauris sit amet suscipit. Fusce elementum volutpat mi ut fermentum.',
      author: 'Oedipus',
      category: 'udacity',
      voteScore: -4,
      deleted: false
    },
    "4j5k67l832f1p33lqw": {
      id: '4j5k67l832f1p33lqw',
      timestamp: 1491084660,
      title: 'To be deleted',
      body: 'Duis at ipsum a leo aliquet blandit. Duis accumsan, massa quis congue sagittis, metus sapien posuere diam, nec lobortis nisi tellus at augue. Sed hendrerit facilisis mauris sit amet suscipit. Fusce elementum volutpat mi ut fermentum.',
      author: 'Snuffles',
      category: 'redux',
      voteScore: 4,
      deleted: false
    }
}

function getData (token) {
  let data = db[token]
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getByCategory (token, category) {
  return new Promise((res) => {
    let posts = getData(token)
    let keys = Object.keys(posts)
    let filtered_keys = keys.filter(key => posts[key].category === category && !posts[key].deleted)
    res(filtered_keys.map(key => posts[key]))
  })
}

function get (token, id) {
  return new Promise((res) => {
    const posts = getData(token)
    res(
      posts[id].deleted
        ? {}
        : posts[id]
    )
  })
}

function getAll (token) {
  return new Promise((res) => {
    const posts = getData(token)
    let keys = Object.keys(posts)
    let filtered_keys = keys.filter(key => !posts[key].deleted)
    res(filtered_keys.map(key => posts[key]))
  })
}

function add (token, post) {
  return new Promise((res) => {
    let posts = getData(token)

    posts[post.id] = {
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
      voteScore: 1,
      deleted: false
    }

    res(posts[post.id])
  })
}

function vote (token, id, option) {
  return new Promise((res) => {
    let posts = getData(token)
    post = posts[id]
    switch(option) {
        case "upVote":
            post.voteScore = post.voteScore + 1
            break
        case "downVote":
            post.voteScore = post.voteScore - 1
            break
        default:
            console.log(`posts.vote received incorrect parameter: ${option}`)
    }
    res(post)
  })
}

function disable (token, id) {
    return new Promise((res) => {
      let posts = getData(token)
      posts[id].deleted = true
      res(posts[id])
    })
}

function edit (token, id, post) {
    return new Promise((res) => {
        let posts = getData(token)
        for (prop in post) {
            posts[id][prop] = post[prop]
        }
        res(posts[id])
    })
}

module.exports = {
  get,
  getAll,
  getByCategory,
  add,
  vote,
  disable,
  edit,
  getAll
}
