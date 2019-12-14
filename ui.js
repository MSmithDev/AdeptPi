


//Tabs
openTab('mainTab');
const mainTab = document.getElementById('mainTabButton');
mainTab.className +=" active";
const moveTab = document.getElementById('moveTabButton');
const monitorTab = document.getElementById('monitorTabButton');
const remoteTab = document.getElementById('remoteTabButton');
const gcodeTab = document.getElementById('gcodeTabButton');
const optionsTab = document.getElementById('optionsTabButton');

mainTab.addEventListener('click', function(event){
    openTab('mainTab');
    mainTab.className +=" active";
});
moveTab.addEventListener('click', function(event){
    openTab('moveTab');
    moveTab.className +=" active";
});
monitorTab.addEventListener('click', function(event){
    openTab('monitorTab');
    monitorTab.className +=" active";
});
remoteTab.addEventListener('click', function(event){
    openTab('remoteTab');
    remoteTab.className +=" active";
});
gcodeTab.addEventListener('click', function(event){
  openTab('gcodeTab');
  gcodeTab.className +=" active";
});
optionsTab.addEventListener('click', function(event){
  openTab('optionsTab');
  optionsTab.className +=" active";
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



