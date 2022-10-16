const loadMenuItems = route => {
  // const domArr = document.querySelectorAll('.sidebar-nav > ul > li > ul > li > a');
  // const domArr = document.querySelectorAll('.sidebar-nav > ul > li > ul > li  a');
  // console.log(location)
  // const domArr = document.querySelectorAll('.sidebar-nav > ul  > li > p > a');
  const domArr = document.querySelectorAll('.sidebar-nav > ul > li > ul > li > a, .sidebar-nav > ul  > li > p > a');

  const allLinks = Array.from(domArr);

  // allLinks.forEach( e => { console.log( e.innerHTML ) } )
  console.log(allLinks)

  let linksList = []
  let key = 'prev'
  for(const [index, link] of allLinks.entries()){
    if( linksList.length > 2 ){ break }
    if( link.href?.includes(route.path) || linksList.length > 1 ){ 
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
}

const convertRemToPixels = rem => {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

const scrollToID = () => {
  const id = decodeURI( location.hash.split( "id=" )[1] )
  const scrollDOM = document.querySelector( '#' + id )
  if( scrollDOM ){
    return scrollTo({ top:scrollDOM.offsetTop - convertRemToPixels(3) })
  }
  return scrollTo({ top:0 })
}

const renderButtons = (e, o, arr) => {
  // let buttonField = `<div class="prevNextButtons">`;
  // buttonField += arr.prev?.href ? `<a href="${ arr.prev.href }"> <button class="prev">${ arr.prev.title }</button></a>` : `<a></a>`;
  // buttonField += arr.next?.href ? `<a href="${ arr.next.href }"> <button class="next">${ arr.next.title }</button></a>` : `<a></a>`;
  // buttonField += `</div>`;
  let buttonField = document.createElement('div');
  buttonField.className = "prevNextButtons"
  // let buttonField.innerHTML = `<div class="prevNextButtons">`;
  buttonField.innerHTML = arr.prev?.href ? `<a href="${ arr.prev.href }"> <button class="prev">${ arr.prev.title }</button></a>` : `<a></a>`;
  buttonField.innerHTML += arr.next?.href ? `<a href="${ arr.next.href }"> <button class="next">${ arr.next.title }</button></a>` : `<a></a>`;
  // buttonField += `</div>`;
  document.querySelector("#main").append(buttonField)
  // o((e = e + "noelo" ))
  scrollToID();
}

window.$docsify.plugins = [].concat((e, ox) => {
  // e.afterEach( async (e, o) => { 
  // e.doneEach( async (e, o) => { 
  e.doneEach( async (e, o) => { 
    const arr = loadMenuItems(ox.route)
    o((e = e))
    // o((e = e + buttonField ))
    // console.log("ARR: ", arr)
    // if(!arr){
    //   let fuse = 0;
    //   const interval = setInterval(() => { 
    //     fuse++
    //     const arr = loadMenuItems(ox.route)
    //     if(arr || fuse > 10){ clearInterval(interval); renderButtons(e,o,arr) }
    //   },100)
    // }else{
      renderButtons(e,o,arr)
    // }
  })
}, window.$docsify.plugins)
