# <i class="logo"></i> Praktykody Codex
Wtaj w projekcie Tworzenia Aplikacji Internetowych 😎

<!-- będziemy kodzić appki jak te [te](https://praktykody.github.io/1001apps/) -->

<button onclick="loadRoadMap()" id="refreshRoadMap">rozwiń rozkład jazdy</button>
 
<h2 id="stage1" class="roadmap-header">Basic</h2>
<ul class="roadmap" id="roadmap-stage1"></ul>

<h2 id="stage2" class="roadmap-header">Intermediate</h2>
<ul class="roadmap" id="roadmap-stage2"></ul>

<!-- <h2 id="stage3" class="roadmap-header">Advanced</h2>
<ul class="roadmap" id="roadmap-stage3"></ul> -->

[roadmap source](https://codepen.io/NomadRazor/details/RXWeVz)


[Edytory kodu - zaczynamy!](/code_editors)

<style>
h1 .anchor span{
  display:flex;
  align-items:center;
}

ul.roadmap{
  display:grid;
  flex-direction:column;
  list-style:none;
  padding:0;
  margin:0;
  transition:.4s;
}
ul.roadmap > li{
  display:grid;
  grid-template-columns:45% 10% 45%;
  width:100%;
  grid-template-rows:100%;
  grid-template-areas: "left center right";
  height:auto;
  position:relative;
  transition:.4s;
  padding-bottom:5px;
} 

ul.roadmap > li:last-child{
  padding-bottom:30px;  
}

ul.roadmap > li:first-child{
  padding-top:30px; 
}

ul.roadmap > li:before{
  content:'';
  display:block;
  position:absolute;
  left:50%;
  top:60px;
  height:40px;
  width:40px;
  background:#252525;
  border-radius:50%;
  transform:translate(-50%,-100%);
  box-sizing:border-box;
  border:5px #25C3F2 solid;
  transition: .8s;
}

ul.roadmap > li:after{
  content:'';
  display:block;
  position:absolute;
  left:50%;
  top:0;
  height:100%;
  width:4px;
  background:#25C3F2;
  box-sizing:border-box;
  transform:translateX(-50%);
  z-index:-1;
}

ul.roadmap > li:nth-child(odd) .roadmap-item{
   grid-area:left;
  text-align:right;
}

ul.roadmap > li:nth-child(odd) .date-placeholder{
  grid-area:right;
  text-align:left;
}

ul.roadmap > li:nth-child(odd) .roadmap-item .roadmap-footer,
ul.roadmap > li:nth-child(odd) .roadmap-item .roadmap-header,
ul.roadmap > li:nth-child(odd) .roadmap-item .roadmap-body,
ul.roadmap > li:nth-child(odd) .roadmap-item .roadmap-detail
{
  justify-content:flex-end;
}

ul.roadmap > li:nth-child(even) .roadmap-item{
   grid-area:right;
  text-align:left;
}

ul.roadmap > li:nth-child(even) .date-placeholder{
  grid-area:left;
  text-align:right;
}
.roadmap-item{  
  display:grid;
  grid-template-columns:100%;
  grid-template-rows: repeat(4,max-content);
  padding:0;
  margin:0px 20px;
  overflow:hidden;
  /* color:#fff; */
  transition: .4s;
}

.roadmap-item  div:not(.roadmap-header){
   height:max-content;
}

.roadmap-item.hidden > div:not(.roadmap-header){
   visibility:hidden;
   height:0;
}

.roadmap-item .roadmap-header{
  display:flex;
  flex-direction:column;
  padding:10px 10px;
  font-size:22px;
  margin-bottom:10px;
  font-weight:800;
}

.roadmap-item .roadmap-sub-header{
  display:flex;
  padding:5px 5px;
  font-size:18px;
  font-weight:600;
  justify-content:inherit;
}

.roadmap-item .roadmap-body{
  display:flex;
  font-size:16px;
  padding: 0 10px;
  margin-bottom:10px;
}

.roadmap-item .roadmap-footer{
  display:flex;
  flex-wrap:wrap;
  padding:10px 10px;
}

.roadmap-item .roadmap-detail{
  display:flex;
  height:auto;
}

.roadmap-item .roadmap-attribute{
  display:block;
  padding:5px 10px;
  margin:5px 5px;
  background:#3994F5;
  /* color:#f1f2f3; */
  border-radius:1em;
}

.date-placeholder{
  display:block;
  align-self:center;
  /* color:#888; */
  letter-spacing:3px;
  font-size:22px;
  font-weight:700;
  
}


/* h1#stage1{ */
.roadmap-header{
  padding:1rem;
  margin:0 !important;
}

.roadmap-header#stage1{
  background: #DB5151;
}

/* h1#stage2{ */
.roadmap-header#stage2{
  background: #51B7DB;
}

/* h1#stage1 ~ ul.roadmap > li:before{ */
.roadmap-header#stage1 ~ ul.roadmap > li:before{
  border:5px #DB5151 solid;
}

/* h1#stage1 ~ ul.roadmap > li:after{ */
.roadmap-header#stage1 ~ ul.roadmap > li:after{
  background: #DB5151;
}

/* h1#stage2 ~ ul.roadmap > li:before{ */
.roadmap-header#stage2 ~ ul.roadmap > li:before{
  border:5px #51B7DB solid;
}

/* h1#stage2 ~ ul.roadmap > li:after{ */
.roadmap-header#stage2 ~ ul.roadmap > li:after{
  background: #51B7DB;
}

/*timeline*/


ul.timeline{
  display:flex;
  list-style:none;
  font-family:"Segoe UI";
  padding:0 10px;
  margin-bottom:40px;
  text-align:center;
}

ul.timeline > li{
  display:flex;
  position:relative;
  /* color:#f1f2f3; */
  padding:5px 10px;
}

ul.timeline > li:before{
  content:'';
  display:block;
  position:absolute;
  left:50%;
  top:calc(100% + 20px);
  height:20px;
  width:20px;
  background:#252525;
  border-radius:50%;
  transform:translate(-50%,-100%);
  box-sizing:border-box;
  border:3px #ddd solid;
  box-shadow:inset 0 0 4px 1px #333;
  transition: .8s;
}
ul.timeline > li[checked]:after{
  /*background:#328128;*/
  
}
ul.timeline > li[checked]:before{
  background:#29C00B;
  border:3px #ddd solid;
  
}

ul.timeline > li[active]:before{
  background:#EEA835 ;
  border:3px #ddd solid;
  
}

ul.timeline > li:after{
  content:'';
  display:block;
  position:absolute;
  left:calc(50% + 10px);
  top:calc(100% + 8px);
  height:4px;
  width:100%;
  background:#ddd;
  box-sizing:border-box;
  
  z-index:-1;
}

ul.timeline > li:last-child:after{
  display:none;
}
</style>
