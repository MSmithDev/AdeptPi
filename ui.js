const { ipcRenderer } = require("electron");
//Tabs
openTab("mainTab");
const mainTab = document.getElementById("mainTabButton");
mainTab.className += " active";
const moveTab = document.getElementById("moveTabButton");
const monitorTab = document.getElementById("monitorTabButton");
const remoteTab = document.getElementById("remoteTabButton");
const gcodeTab = document.getElementById("gcodeTabButton");
const optionsTab = document.getElementById("optionsTabButton");
const exitTab = document.getElementById("exitTabButton");

mainTab.addEventListener("click", function(event) {
  openTab("mainTab");
  mainTab.className += " active";
});
moveTab.addEventListener("click", function(event) {
  openTab("moveTab");
  moveTab.className += " active";
});
monitorTab.addEventListener("click", function(event) {
  openTab("monitorTab");
  monitorTab.className += " active";
});
remoteTab.addEventListener("click", function(event) {
  openTab("remoteTab");
  remoteTab.className += " active";
});
gcodeTab.addEventListener("click", function(event) {
  openTab("gcodeTab");
  gcodeTab.className += " active";
});
optionsTab.addEventListener("click", function(event) {
  openTab("optionsTab");
  optionsTab.className += " active";
});
exitTab.addEventListener("click", function(event) {
  openTab("exitTab");
  exitTab.className += " active";
});

function openTab(tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "flex";
}

//Exit Tab

const exitApp = document.getElementById("exitApp");
exitApp.addEventListener("click", function(event) {
  console.log("Quit");
  console.log(ipcRenderer.send("exit-app", "ping"));
});

const topBarIco1svg = document.getElementById("topBarIco1svg");
const topBarIco2svg = document.getElementById("topBarIco2svg");
const topBarIco1svgCss = document.getElementsByClassName("icon-power");

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

console.log("CLASSNAME SVG 1 : " + topBarIco1svg.className);
const highPowerStatusWatch = async () => {
  while (true) {
    await sleep(900);
    console.log("hi hi");

    if (topBarIco1svg.classList.contains("icon-power-red")){
    topBarIco1svg.classList.remove("icon-power-red");
    topBarIco1svg.classList.add("icon-power-yellow");
  }else {
    topBarIco1svg.classList.add("icon-power-red");
    topBarIco1svg.classList.remove("icon-power-yellow");
  }
  }
}

highPowerStatusWatch();

const monitorStatusWatch = async () => {
  while (true) {
    await sleep(1000);
    topBarIco2svg.style.display == "none"
      ? (topBarIco2svg.style.display = "block")
      : (topBarIco2svg.style.display = "none");
  }
};

monitorStatusWatch();

const dataConnectionStatusWatch = async () => {
  while (true) {
    await sleep(1100);
    topBarIco2svg.style.color == "red"
      ? (topBarIco3svg.style.display = "yellow")
      : (topBarIco3svg.style.display = "red");
    
  }
};

dataConnectionStatusWatch();





////////////////////////


function calibrateOverlayOn() {
  document.getElementById("overlay-calibration").style.display = "block";
}

function calibrateOverlayOff() {
  document.getElementById("overlay-calibration").style.display = "none";
}
//calibrateOverlayOn();



mds = document.getElementById('mdss')

cats = 1
const calibrateOverlay = async () => {
  while (true) {
    await sleep(0);
    
    //mds.setAttribute('style','transform:rotate(180deg)');
    cats > 360 ? cats = 0 : cats = cats + 1
   
    mds.style.transform = "rotate("+cats+"deg)"


  }
};

calibrateOverlay();