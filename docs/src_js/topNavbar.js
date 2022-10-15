console.log("topNavbar")

// make top navbar
const addSpacers = () => { 
  document.querySelectorAll('h1').forEach( l => { l.style.cssText = "padding-top:5rem; margin-top:0;" })
  document.querySelectorAll('h2, h3, h4').forEach( l => { l.style.cssText = "padding-top:3.5rem; margin-top:0;" })
  document.querySelector('.content').style.cssText = "top:-7rem;";
}
window.addEventListener('load', () => { addSpacers() })
window.$docsify.plugins = [].concat(e => { e.afterEach((e, o) => { o((e = e)); addSpacers() })}, window.$docsify.plugins)
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
  searchBar.style.cssText = ` flex:1; `

  logoWithToggler.append(sidebarToggler)
  logoWithToggler.append(logo)
  nav.append(logoWithToggler)
  nav.append(searchBar)

  let intervaled = 0;
  const catchLightDarkButt = setInterval( () => {
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
      clearInterval(catchLightDarkButt)
    }
    intervaled++;
    if(intervaled > 10){clearInterval(catchLightDarkButt)}
  },50)
  
  document.body.prepend(nav)
  const aside = document.querySelector('.sidebar');
  aside.style.cssText = `padding-top:3rem;`

})