function displayTab(id, propName,objProp ){
    document.getElementById(id).innerHTML = propName + objProp;
}

function tabOnetxt() {
    var name = document.getElementById("name").value;
    var fname = document.getElementById("firstName").value;
    var adress = document.getElementById("adress").value;
    var person = {
        name: null,
        fname: null,
        adress: null
    }
    
    if(name)
        var txt = name;
   if(fname)
       var txtfname = fname;
    if(adress)
        var txtadress = adress;
    
    person.name = name;
    person.fname = fname;
    person.adress = adress;
 
    
    displayTab("nameA", "Name:", person.name);
    displayTab("fnameB", "First Name:", person.fname);
    displayTab("adressC", "Adress:", person.adress);
    
}

function activeTab(tabIndex) {
    
    var txt = document.getElementsByClassName("content");
    for (var i = 0; i < txt.length; i++){
        txt[i].style.display = "none";
    }
    
    document.getElementById('tab' + tabIndex).style.display = "block";
    
}


