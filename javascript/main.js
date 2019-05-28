//Kode om send knap


setTimeout(function show() {
    document.getElementById("submitSendt").style.display = 'block';   
}, 5);

setTimeout(function show() {
    document.getElementById('submitSendt').style.display='none';
    }, 3000);




//kode for at fjerne mere info

function hideOverlay() {
    document.getElementById("infoOverlay").style.display = "none"; 
}



//Kode til at få mere info frem

let medarbejderInfo = [
    ['E. Frandsen', 'MJ', '30. mar. 1983', 1],
    ['S.AA Mathiesen', 'KTBTJ', '30. mar. 1983', 2],
    ['E. Knudsen', 'MJ', '30. jun. 1983', 3]
];

function profil1() {    
    document.getElementById("infoOverlay").style.display = "block";
    document.getElementById("navn").innerHTML = "Navn:" + " " + medarbejderInfo[0][0];
    document.getElementById("rang").innerHTML = "Rang:" + " " + medarbejderInfo[0][1];
    document.getElementById("year").innerHTML = "Pensioneret:" + " " + medarbejderInfo[0][2];
    document.getElementById("treeNum").innerHTML = "Træ nr.:" + " " + medarbejderInfo[0][3];
    document.getElementById("smallBox").innerHTML = "Her skal der f.eks. stå en kort historie om" + " " + medarbejderInfo[0][0] + ", " + "eller et citat fra ham.";
    document.getElementById("largeBox").innerHTML = "Her skal der stå mere information om" + " " + medarbejderInfo[0][0] + ", " + "og deres tid og bedrifter i regimentet.";
}


function profil2() {    
    document.getElementById("infoOverlay").style.display = "block";
    document.getElementById("navn").innerHTML = "Navn:" + " " + medarbejderInfo[1][0];
    document.getElementById("rang").innerHTML = "Rang:" + " " + medarbejderInfo[1][1];
    document.getElementById("year").innerHTML = "Pensioneret:" + " " + medarbejderInfo[1][2];
    document.getElementById("treeNum").innerHTML = "Træ nr.:" + " " + medarbejderInfo[1][3];
    document.getElementById("smallBox").innerHTML = "Her skal der f.eks. stå en kort historie om" + " " + medarbejderInfo[1][0] + ", " + "eller et citat fra ham.";
    document.getElementById("largeBox").innerHTML = "Her skal der stå mere information om" + " " + medarbejderInfo[1][0] + ", " + "og deres tid og bedrifter i regimentet.";
}


function profil3() {    
    document.getElementById("infoOverlay").style.display = "block";
    document.getElementById("navn").innerHTML = "Navn:" + " " + medarbejderInfo[2][0];
    document.getElementById("rang").innerHTML = "Rang:" + " " + medarbejderInfo[2][1];
    document.getElementById("year").innerHTML = "Pensioneret:" + " " + medarbejderInfo[2][2];
    document.getElementById("treeNum").innerHTML = "Træ nr.:" + " " + medarbejderInfo[2][3];
    document.getElementById("smallBox").innerHTML = "Her skal der f.eks. stå en kort historie om" + " " + medarbejderInfo[2][0] + ", " + "eller et citat fra ham.";
    document.getElementById("largeBox").innerHTML = "Her skal der stå mere information om" + " " + medarbejderInfo[2][0] + ", " + "og deres tid og bedrifter i regimentet.";
}



//Kode til soteringsknappen

function sortOverlay() {
  let x = document.getElementById("sorterOverlay");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


//Kode til burgermenu til ipad og mobil


function respNav() {
    let respLinks = document.getElementById("respLinks");
    if (respLinks.style.display === "none") {
        respLinks.style.display = "block";
    } else {
        respLinks.style.display = "none";
    }
}