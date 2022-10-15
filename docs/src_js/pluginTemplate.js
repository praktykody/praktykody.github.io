// make top navbar
window.$docsify.plugins = [].concat((e, o) => {
  e.afterEach((e, o) => { o((e = e))
    // code here
  })
  e.doneEach(() => {
    // and here async
  })
}, window.$docsify.plugins)
