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



//Kode til sorteringsknappen

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


//Kode til SVG


function hideOverlayForside() {
    document.getElementById("forsideOverlay").style.display = "none"; 
}

function profil1Forside() {    
    document.getElementById("forsideOverlay").style.display = "block";
    document.getElementById("navn").innerHTML = "Navn:" + " " + medarbejderInfo[0][0];
    document.getElementById("rang").innerHTML = "Rang:" + " " + medarbejderInfo[0][1];
    document.getElementById("year").innerHTML = "Pensioneret:" + " " + medarbejderInfo[0][2];
    document.getElementById("treeNum").innerHTML = "Træ nr.:" + " " + medarbejderInfo[0][3];
    document.getElementById("smallBox").innerHTML = "Her skal der f.eks. stå en kort historie om" + " " + medarbejderInfo[0][0] + ", " + "eller et citat fra ham.";
    document.getElementById("largeBox").innerHTML = "Her skal der stå mere information om" + " " + medarbejderInfo[0][0] + ", " + "og deres tid og bedrifter i regimentet.";
}


function profil2Forside() {    
    document.getElementById("forsideOverlay").style.display = "block";
    document.getElementById("navn").innerHTML = "Navn:" + " " + medarbejderInfo[1][0];
    document.getElementById("rang").innerHTML = "Rang:" + " " + medarbejderInfo[1][1];
    document.getElementById("year").innerHTML = "Pensioneret:" + " " + medarbejderInfo[1][2];
    document.getElementById("treeNum").innerHTML = "Træ nr.:" + " " + medarbejderInfo[1][3];
    document.getElementById("smallBox").innerHTML = "Her skal der f.eks. stå en kort historie om" + " " + medarbejderInfo[1][0] + ", " + "eller et citat fra ham.";
    document.getElementById("largeBox").innerHTML = "Her skal der stå mere information om" + " " + medarbejderInfo[1][0] + ", " + "og deres tid og bedrifter i regimentet.";
}


function profil3Forside() {    
    document.getElementById("forsideOverlay").style.display = "block";
    document.getElementById("navn").innerHTML = "Navn:" + " " + medarbejderInfo[2][0];
    document.getElementById("rang").innerHTML = "Rang:" + " " + medarbejderInfo[2][1];
    document.getElementById("year").innerHTML = "Pensioneret:" + " " + medarbejderInfo[2][2];
    document.getElementById("treeNum").innerHTML = "Træ nr.:" + " " + medarbejderInfo[2][3];
    document.getElementById("smallBox").innerHTML = "Her skal der f.eks. stå en kort historie om" + " " + medarbejderInfo[2][0] + ", " + "eller et citat fra ham.";
    document.getElementById("largeBox").innerHTML = "Her skal der stå mere information om" + " " + medarbejderInfo[2][0] + ", " + "og deres tid og bedrifter i regimentet.";
}



//Kode for search bar


let first_click = true;

function searchName() {
    if (first_click) {
    document.getElementById("infoOverlay").style.display = "block";
    document.getElementById("navn").innerHTML = "Navn:" + " " + medarbejderInfo[0][0];
    document.getElementById("rang").innerHTML = "Rang:" + " " + medarbejderInfo[0][1];
    document.getElementById("year").innerHTML = "Pensioneret:" + " " + medarbejderInfo[0][2];
    document.getElementById("treeNum").innerHTML = "Træ nr.:" + " " + medarbejderInfo[0][3];
    document.getElementById("smallBox").innerHTML = "Her skal der f.eks. stå en kort historie om" + " " + medarbejderInfo[0][0] + ", " + "eller et citat fra ham.";
    document.getElementById("largeBox").innerHTML = "Her skal der stå mere information om" + " " + medarbejderInfo[0][0] + ", " + "og deres tid og bedrifter i regimentet.";
        
        first_click = false;
    }
    else {
    document.getElementById("infoOverlay").style.display = "block";
    document.getElementById("navn").innerHTML = "Navn:" + " " + medarbejderInfo[1][0];
    document.getElementById("rang").innerHTML = "Rang:" + " " + medarbejderInfo[1][1];
    document.getElementById("year").innerHTML = "Pensioneret:" + " " + medarbejderInfo[1][2];
    document.getElementById("treeNum").innerHTML = "Træ nr.:" + " " + medarbejderInfo[1][3];
    document.getElementById("smallBox").innerHTML = "Her skal der f.eks. stå en kort historie om" + " " + medarbejderInfo[1][0] + ", " + "eller et citat fra ham.";
    document.getElementById("largeBox").innerHTML = "Her skal der stå mere information om" + " " + medarbejderInfo[1][0] + ", " + "og deres tid og bedrifter i regimentet.";
    }
}


//Kode til highlight af træer i search bar


let first_click_forside = true;

function treeHighlight() {
    if (first_click_forside) {
    document.getElementById("tree1").style.fill = "#c8102e";
        
    first_click_forside = false;
    }
    else {
    document.getElementById("tree2").style.fill = "#c8102e";
    document.getElementById("tree1").style.fill = "5F984C";
    }
}


//Kode til sortéring

let sortMove = [
    ['Navn: E. Frandsen', 'Rang: MJ', 'Pensioneret: 30. mar. 1983'],
    
    ['Navn: S.AA Mathiesen', 'Rang: KTBTJ', 'Pensioneret: 30. mar. 1983'],
    
    ['Navn: E. Knudsen', 'Rang: MJ', 'Pensioneret: 30. jun. 1983'],
    
    ['Navn: S.AA. Kristensen', 'Rang: KN', 'Pensioneret: 30. okt. 1983'],
    
    ['Navn: E. Mogensen', 'Rang: OL', 'Pensioneret: 31. aug. 1984'],
    
    ['Navn: E.F. Nielsen', 'Rang: MJ', 'Pensioneret: 31. aug. 1984'],
    
    ['Navn: K.AA. Christiansen', 'Rang: KN', 'Pensioneret: 31. dec. 1984'],
    
    ['Navn: E.V. Tomsen', 'Rang: DEPARB', 'Pensioneret: 28. feb. 1985'],
    
    ['Navn: S.A.M. Nielsen', 'Rang: MJ', 'Pensioneret: 30. sep. 1985'],
    
    ['Navn: O.E. Jacobsen', 'Rang: KN', 'Pensioneret: 31. maj. 1986'],
    
    ['Navn: H.L.N. Olesen', 'Rang: MJ', 'Pensioneret: 30. apr. 1987'],
    
    ['Navn: R. Kappel-Hansen', 'Rang: KN', 'Pensioneret: 31. aug. 1987'],
];


let sortBtn = ['Årstal', 'Navn', 'Rang', 'Træ nr.']


document.getElementById("sorterBtn").innerHTML = "Sortér efter: " + sortBtn[0];

document.getElementById("sorterNavn").innerHTML = sortBtn[1]

document.getElementById("sorterRang").innerHTML = sortBtn[2]

document.getElementById("sorterAarstal").innerHTML = sortBtn[0]


document.getElementById("boks1").innerHTML = sortMove[0][0] + "<br>" + sortMove[0][1] + "<br>" + sortMove[0][2];

document.getElementById("boks2").innerHTML = sortMove[1][0] + "<br>" + sortMove[1][1] + "<br>" + sortMove[1][2];

document.getElementById("boks3").innerHTML = sortMove[2][0] + "<br>" + sortMove[2][1] + "<br>" + sortMove[2][2];

document.getElementById("boks4").innerHTML = sortMove[3][0] + "<br>" + sortMove[3][1] + "<br>" + sortMove[3][2];

document.getElementById("boks5").innerHTML = sortMove[4][0] + "<br>" + sortMove[4][1] + "<br>" + sortMove[4][2];

document.getElementById("boks6").innerHTML = sortMove[5][0] + "<br>" + sortMove[5][1] + "<br>" + sortMove[5][2];

document.getElementById("boks7").innerHTML = sortMove[6][0] + "<br>" + sortMove[6][1] + "<br>" + sortMove[6][2];

document.getElementById("boks8").innerHTML = sortMove[7][0] + "<br>" + sortMove[7][1] + "<br>" + sortMove[7][2];

document.getElementById("boks9").innerHTML = sortMove[8][0] + "<br>" + sortMove[8][1] + "<br>" + sortMove[8][2];

document.getElementById("boks10").innerHTML = sortMove[9][0] + "<br>" + sortMove[9][1] + "<br>" + sortMove[9][2];

document.getElementById("boks11").innerHTML = sortMove[10][0] + "<br>" + sortMove[10][1] + "<br>" + sortMove[10][2];

document.getElementById("boks12").innerHTML = sortMove[11][0] + "<br>" + sortMove[11][1] + "<br>" + sortMove[11][2];




function sortNavn() {
    document.getElementById("sorterBtn").innerHTML = "Sortér efter: " + sortBtn[1];
    
    
    document.getElementById("boks1").innerHTML = sortMove[6][0] + "<br>" + sortMove[6][1] + "<br>" + sortMove[6][2];
    
    document.getElementById("boks2").innerHTML = sortMove[0][0] + "<br>" + sortMove[0][1] + "<br>" + sortMove[0][2];
    
    document.getElementById("boks3").innerHTML = sortMove[9][0] + "<br>" + sortMove[9][1] + "<br>" + sortMove[9][2];
    
    document.getElementById("boks4").innerHTML = sortMove[11][0] + "<br>" + sortMove[11][1] + "<br>" + sortMove[11][2];
    
    document.getElementById("boks5").innerHTML = sortMove[2][0] + "<br>" + sortMove[2][1] + "<br>" + sortMove[2][2];
    
    document.getElementById("boks6").innerHTML = sortMove[3][0] + "<br>" + sortMove[3][1] + "<br>" + sortMove[3][2];
    
    document.getElementById("boks7").innerHTML = sortMove[1][0] + "<br>" + sortMove[1][1] + "<br>" + sortMove[1][2];
    
    document.getElementById("boks8").innerHTML = sortMove[4][0] + "<br>" + sortMove[4][1] + "<br>" + sortMove[4][2];
    
    document.getElementById("boks9").innerHTML = sortMove[5][0] + "<br>" + sortMove[5][1] + "<br>" + sortMove[5][2];
    
    document.getElementById("boks10").innerHTML = sortMove[8][0] + "<br>" + sortMove[8][1] + "<br>" + sortMove[8][2];
    
    document.getElementById("boks11").innerHTML = sortMove[10][0] + "<br>" + sortMove[10][1] + "<br>" + sortMove[10][2];
    
    document.getElementById("boks12").innerHTML = sortMove[7][0] + "<br>" + sortMove[7][1] + "<br>" + sortMove[7][2];
}


function sortRang() {
    document.getElementById("sorterBtn").innerHTML = "Sortér efter: " + sortBtn[2];
    
    document.getElementById("boks1").innerHTML = sortMove[7][0] + "<br>" + sortMove[7][1] + "<br>" + sortMove[7][2];
    
    document.getElementById("boks2").innerHTML = sortMove[6][0] + "<br>" + sortMove[6][1] + "<br>" + sortMove[6][2];
    
    document.getElementById("boks3").innerHTML = sortMove[9][0] + "<br>" + sortMove[9][1] + "<br>" + sortMove[9][2];
    
    document.getElementById("boks4").innerHTML = sortMove[11][0] + "<br>" + sortMove[11][1] + "<br>" + sortMove[11][2];
    
    document.getElementById("boks5").innerHTML = sortMove[3][0] + "<br>" + sortMove[3][1] + "<br>" + sortMove[3][2];
    
    document.getElementById("boks6").innerHTML = sortMove[1][0] + "<br>" + sortMove[1][1] + "<br>" + sortMove[1][2];
    
    document.getElementById("boks7").innerHTML = sortMove[0][0] + "<br>" + sortMove[0][1] + "<br>" + sortMove[0][2];
    
    document.getElementById("boks8").innerHTML = sortMove[2][0] + "<br>" + sortMove[2][1] + "<br>" + sortMove[2][2];
    
    document.getElementById("boks9").innerHTML = sortMove[5][0] + "<br>" + sortMove[5][1] + "<br>" + sortMove[5][2];
    
    document.getElementById("boks10").innerHTML = sortMove[8][0] + "<br>" + sortMove[8][1] + "<br>" + sortMove[8][2];
    
    document.getElementById("boks11").innerHTML = sortMove[10][0] + "<br>" + sortMove[10][1] + "<br>" + sortMove[10][2];
    
    document.getElementById("boks12").innerHTML = sortMove[4][0] + "<br>" + sortMove[4][1] + "<br>" + sortMove[4][2];
}


function sortAarstal() {

document.getElementById("sorterBtn").innerHTML = "Sortér efter: " + sortBtn[0];
    
    

document.getElementById("sorterNavn").innerHTML = sortBtn[1]

document.getElementById("sorterRang").innerHTML = sortBtn[2]

document.getElementById("sorterAarstal").innerHTML = sortBtn[0]

document.getElementById("boks1").innerHTML = sortMove[0][0] + "<br>" + sortMove[0][1] + "<br>" + sortMove[0][2];

document.getElementById("boks2").innerHTML = sortMove[1][0] + "<br>" + sortMove[1][1] + "<br>" + sortMove[1][2];

document.getElementById("boks3").innerHTML = sortMove[2][0] + "<br>" + sortMove[2][1] + "<br>" + sortMove[2][2];

document.getElementById("boks4").innerHTML = sortMove[3][0] + "<br>" + sortMove[3][1] + "<br>" + sortMove[3][2];

document.getElementById("boks5").innerHTML = sortMove[4][0] + "<br>" + sortMove[4][1] + "<br>" + sortMove[4][2];

document.getElementById("boks6").innerHTML = sortMove[5][0] + "<br>" + sortMove[5][1] + "<br>" + sortMove[5][2];

document.getElementById("boks7").innerHTML = sortMove[6][0] + "<br>" + sortMove[6][1] + "<br>" + sortMove[6][2];

document.getElementById("boks8").innerHTML = sortMove[7][0] + "<br>" + sortMove[7][1] + "<br>" + sortMove[7][2];

document.getElementById("boks9").innerHTML = sortMove[8][0] + "<br>" + sortMove[8][1] + "<br>" + sortMove[8][2];

document.getElementById("boks10").innerHTML = sortMove[9][0] + "<br>" + sortMove[9][1] + "<br>" + sortMove[9][2];

document.getElementById("boks11").innerHTML = sortMove[10][0] + "<br>" + sortMove[10][1] + "<br>" + sortMove[10][2];

document.getElementById("boks12").innerHTML = sortMove[11][0] + "<br>" + sortMove[11][1] + "<br>" + sortMove[11][2];
}