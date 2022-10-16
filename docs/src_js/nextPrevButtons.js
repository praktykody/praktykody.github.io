window.$docsify.plugins = [].concat((e, ox) => {
  e.doneEach( async (e, o) => { 
    // loadMenuItems from sidebar
    const arr = (() => {
      const domArr = document.querySelectorAll('.sidebar-nav > ul > li > ul > li > a, .sidebar-nav > ul  > li > p > a');
      const allLinks = Array.from(domArr);
      let linksList = []
      let key = 'prev'
      for(const [index, link] of allLinks.entries()){
        if( linksList.length > 2 ){ break }
        if( link.href?.includes(ox.route.path) || linksList.length > 1 ){ 
          if(linksList.length == 0){ linksList = [ allLinks[index+1] ]; key='next'; break }
          linksList.push( link )
        } else {
          linksList = [ link ] 
        }
      }
      if(linksList.length == 0){ return 0 }
      if(linksList.length == 1 || linksList.length == 2) { 
        return {
          [key]: {
            href : linksList[0]?.href,
            title : linksList[0]?.title,
          }
        }
      }
      return {
        prev: { href : linksList[0].href, title : linksList[0].title },
        next: { href : linksList[2].href, title : linksList[2].title }
      }
    })()
    o((e = e))
    if(location.hash == "#/"){ return }
    // renderButtons on page
    let buttonField = document.createElement('div');
    buttonField.className = "prevNextButtons"
    buttonField.innerHTML = arr.prev?.href ? `<a href="${ arr.prev.href }"> <button class="prev">${ arr.prev.title }</button></a>` : `<a></a>`;
    buttonField.innerHTML += arr.next?.href ? `<a href="${ arr.next.href }"> <button class="next">${ arr.next.title }</button></a>` : `<a></a>`;
    document.querySelector("#main").append(buttonField)
    // scroll to id
    const id = decodeURI( location.hash.split( "id=" )[1] )
    const scrollDOM = document.querySelector( '#' + id )
    scrollTo({ top: !scrollDOM ? 0 : scrollDOM.offsetTop - ( 3 * parseFloat(getComputedStyle(document.documentElement).fontSize) )}) // 3rem
  })
}, window.$docsify.plugins)