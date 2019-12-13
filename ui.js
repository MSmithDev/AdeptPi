


//Tabs
openTab('mainTab');
const mainTab = document.getElementById('mainTabButton');
mainTab.className +=" active";
const moveTab = document.getElementById('moveTabButton');
const gcodeTab = document.getElementById('monitorTabButton');
const optionTab = document.getElementById('remoteTabButton');


mainTab.addEventListener('click', function(event){
    openTab('mainTab');
    mainTab.className +=" active";
});
moveTab.addEventListener('click', function(event){
    openTab('moveTab');
    moveTab.className +=" active";
});
gcodeTab.addEventListener('click', function(event){
    openTab('monitorTab');
    gcodeTab.className +=" active";
});
optionTab.addEventListener('click', function(event){
    openTab('remoteTab');
    optionTab.className +=" active";
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
    document.getElementById(tabName).style.display = "block";
    
  }