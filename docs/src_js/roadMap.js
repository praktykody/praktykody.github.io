document.querySelector("#refreshRoadMap").style.display = "none"

var data1 = [
  {
    Name: "HTML",
    SubTitle: "Hipertekstowy język znaczników",
    Description: "Tu nauczysz się kodować HTML'a, poznasz historię i strukturę",
    WorkType: "łatwe",
    Time: " ~ 60 min",
    Link: "/#/html/overview"
  },
  {
    Name: "CSS",
    SubTitle: "Kaskadowe arkusze stylów",
    Description: "Również historia i struktura cssa",
    WorkType: "łatwe",
    Time: " ~ 60 min",
    Link: "/#/html/overview"
  },
];

var data2 = [
  {
    Name: "Vanilla JS",
    SubTitle: "Czysty Javascript i jego możliwości",
    Description: "Informacje nt DOM",
    WorkType: "łatwe",
    Time: " ~ 60 min",
    Link: "/#/html/overview"
  },
  {
    Name: "Vue",
    SubTitle: "Vue Framework",
    Description: "Przegląd oraz przykłady użycia",
    WorkType: "łatwe",
    Time: " ~ 60 min",
    Link: "/#/html/overview"
  },
];

renderStage(data1,"#roadmap-stage1");
renderStage(data2,"#roadmap-stage2");

function renderStage(data,containerSelector){
  data.forEach( item => {
    document.querySelectorAll(containerSelector).forEach( container => {
      const li = document.createElement('li')
      li.innerHTML = `
        <div class="roadmap-item">
          <div class="roadmap-header">
            ${ item.Name } 
            <div class="roadmap-sub-header"> ${ item.WorkType } | ${ item.Time } </div>
            <div class="roadmap-sub-header"> ${ item.SubTitle } </div>
          </div>
          <div class="roadmap-body"> ${ item.Description } </div>
          <div class="roadmap-footer"> </div>
        </div>
        <div class="date-placeholder"> 
          <a href=${ item.Link }>PRZEJDŹ</a>
        </div>
      `
      container.append(li)
    })
  })
}