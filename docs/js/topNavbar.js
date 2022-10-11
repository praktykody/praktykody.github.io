// make top navbar
const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

const precissionScroll = top => {
  window.scrollTo({
    top,
    behavior: 'smooth'
  });
}

window.$docsify.plugins = [].concat((e, o) => {
  e.afterEach((e, o) => { 
    o((e = e))
    // click on document
    document.querySelectorAll('a').forEach(e => {
      e.onclick = e => {
        e.preventDefault()
        const loc = location.hash.split('?')[0]+'?id='+e.path.find(e => { return e.id }).id
        window.history.pushState({}, '', loc);
        console.log("CLICKED")
        // const rem = 5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        precissionScroll(e.pageY - 5 * rem)
      }
    })
  })
  e.doneEach((ex) => {
    // and here async
        // click on sidebar
    window.addEventListener('hashchange', async e => {
      const id = e.newURL.split("id=")[1]
      const dom = document.getElementById(id)
      // console.log('changed', e)
      // console.log('id', id)
      // console.log('dom:', dom)
      // console.log(!dom?.pageY ? 'dom:' : dom.pageY)
      console.log(ex)
      
    });
  })
}, window.$docsify.plugins)

window.addEventListener('load', () => {
  const nav = document.createElement("nav")
  nav.style.cssText = `
    position:fixed;
    top:0;
    width:100%;
    height:3rem;
    z-index:1;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:var(--codeBackgroundColor);
  `
  const logoWithToggler = document.createElement("div")
  logoWithToggler.style.cssText = `
    display:flex;
    align-item:center;
  ` 
  const logo = document.createElement('a')
  logo.innerHTML = '<div>👨‍🏫 TAI Coders</div>'
  logo.href = '/#'
  logo.style.cssText = `
    cursor:pointer;
    display:inline-block;
    font-size:1rem;
    font-weight:bolder;
    text-decoration:none;
    color:inherit;
  `
  const sidebarToggler = document.querySelector(".sidebar-toggle")
  sidebarToggler.style.cssText = `
    position:relative;
    width:unset;
    padding:0 1rem;
  `
  const searchBar = document.querySelector(".search")
  searchBar.style.cssText = `
    flex:1;
  `


  logoWithToggler.append(sidebarToggler)
  logoWithToggler.append(logo)
  nav.append(logoWithToggler)
  nav.append(searchBar)


  const lightDarkButton = document.querySelector("#docsify-darklight-theme")
  if(lightDarkButton){

    lightDarkButton.style.cssText = `
      position:relative;
      top:unset;
      display:flex;
    `
    lightDarkButton.addEventListener("click", () => {
      "light" === t.defaultTheme ? d("dark") : d("light");
    });
  
    nav.append(lightDarkButton)
  }
  
  document.body.prepend(nav)
  const aside = document.querySelector('.sidebar');
  aside.style.cssText = `padding-top:3rem;`

})

