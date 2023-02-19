const discordServer = "CFyCDZ3V8T"

const discordCount = document.querySelector(".discord-mem-count")
const tab = document.querySelector(".main-content-image")
const tabTitle = document.getElementById("main-content-title")
const tabDesc =document.getElementById("main-content-title-desc")



fetch( `https://discord.com/api/v9/invites/${discordServer}?with_counts=true&with_expiration=true`)
  .then((response) => response.json())
  .then((data) => discordCount.textContent = data.approximate_member_count);
  

setInterval(()=>{
    fetch( `https://discord.com/api/v9/invites/${discordServer}?with_counts=true&with_expiration=true`)
    .then((response) => response.json())
    .then((data) => discordCount.textContent = data.approximate_member_count);
},20000)

function tabSlection(id){
    switch(id){
      case "1":
        console.log("one")
        // document.getElementById("div1").classList.add("classToBeAdded");
        tab.style.backgroundImage="url(./images/tab-1-content.jpg)"
        tabTitle.innerHTML="Title 1"
        tabDesc.innerHTML="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        removeSelected()
        document.getElementById(id).classList.add("tab-selected")
        
        break;
      case "2":
        console.log("two")
        tab.style.backgroundImage="url(./images/tab-2-content.jpg)"
        tabTitle.innerHTML="Title 2"
        tabDesc.innerHTML="ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit"
        removeSelected()
        document.getElementById(id).classList.add("tab-selected")
        break;
      case "3":
        console.log("three")
        tab.style.backgroundImage="url(./images/tab-3-content.jpg)"
        tabTitle.innerHTML="Title 3"
        tabDesc.innerHTML=" consectetuer adipiscing elit Lorem ipsum dolor sit"
        removeSelected()
        document.getElementById(id).classList.add("tab-selected")
        break;
      case "4":
        console.log("four")
        tab.style.backgroundImage="url(./images/tab-4-content.jpg)"
        tabTitle.innerHTML="Title 4"
        tabDesc.innerHTML="dipiscing elit dolor sit amet, consectetuer adipiscing"
        removeSelected()
        document.getElementById(id).classList.add("tab-selected")
        break;
      default:
        break;
    }
}


function removeSelected(){
  const allElements = document.querySelectorAll('*');
    allElements.forEach((element) => {
      element.classList.remove('tab-selected');
    });
}