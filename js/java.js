
//var brød = document.getElementById('rugbrødKnækbrød-div');
//var boller = document.getElementById('fuldkornsBoller-div');
var morgenmad = document.getElementById('morgenmadsprodukter-div');
var mælk = document.getElementById('mælk-div');
var syrnede = document.getElementById('syrnedeMælkeprodukter-div');
var ost = document.getElementById('ost-div');
var kød = document.getElementById('kødFjerkræPlantebaseret-div');
var pålæg = document.getElementById('pålæg-div');
var fisk = document.getElementById('fiskSkaldyr-div');
var mærkerne = document.getElementById('gåEfterMærkerne-div');
var grønt = document.getElementById('grøntsagerFrugt-div');
var kartofler = document.getElementById('kartofler-div');
var påfarten = document.getElementById('madPåFarten');
var færdigeretter = document.getElementById('færdigRetter-div');
var sovs = document.getElementById('drissingSovs-div');
var kakaodrikke = document.getElementById('kakaoMælkedrikke-div');
var frugtsaft = document.getElementById('frugtsaft-div');
var sodavand = document.getElementById('sodavand-div');


mærkerne.style.display = "block"; //starter med at være tændt.

//var class = document.getElementsByClassName('brød');
         
   
  

function sortBrød() {
    // ændre farven på knappen
    //document.getElementsByClassName('brød')[0].style.display = "block";

    var brødArray = document.getElementsByClassName('brød');
    document.getElementById('brødCheck');
    var i;
    for (i = 0; i < brødArray.length; i++) {
      brødArray[i].style.display = brødCheck.checked ? "block" : "none";;
    }
    
    //if (brød.style.display === "none" || boller.style.display === "none") {
      //  brød.style.display = "block";
        //boller.style.display = "block";
    //} else {
      //  brød.style.display = "none";
        //boller.style.display = "none";
    //}
    //brød.style.display = "none";
    //boller.style.display = "none";
   //kød.style.display = "none";
    //pålæg.style.display = "none";
    //fisk.style.display = "none";
    //mælk.style.display = "none";
    //syrnede.style.display = "none";
    //kakaodrikke.style.display = "none";
    //mærkerne.style.display = "none";
    //frugtsaft.style.display = "none";
    //sodavand.style.display = "none";
    //færdigeretter.style.display = "none";
    //sovs.style.display = "none";
    //påfarten.style.display = "none";
    //grønt.style.display = "none";
    //kartofler.style.display = "none";
    //ost.style.display = "none";
    //morgenmad.style.display = "none";
};

function sortDrikke() {

    var drikkeArray = document.getElementsByClassName('drikke');
    document.getElementById('drikkeCheck');
    var i;
    for (i = 0; i < drikkeArray.length; i++) {
      drikkeArray[i].style.display = drikkeCheck.checked ? "block" : "none";;
    }

};

function sortMælk() {

    var mælkArray = document.getElementsByClassName('mælk');
    document.getElementById('mælkCheck');
    var i;
    for (i = 0; i < mælkArray.length; i++) {
        mælkArray[i].style.display = mælkCheck.checked ? "block" : "none";;
    }

};

function sortKød() {
    var kødArray = document.getElementsByClassName('kød');
    document.getElementById('kødCheck');
    var i;
    for (i = 0; i < kødArray.length; i++) {
        kødArray[i].style.display = kødCheck.checked ? "block" : "none";;
    }
};

function sortFisk() {
    var drikkeArray = document.getElementsByClassName('drikke');
    document.getElementById('drikkeCheck');
    var i;
    for (i = 0; i < drikkeArray.length; i++) {
      drikkeArray[i].style.display = drikkeCheck.checked ? "block" : "none";;
    }
};

function sortPålæg() {

    var drikkeArray = document.getElementsByClassName('drikke');
    document.getElementById('drikkeCheck');
    var i;
    for (i = 0; i < drikkeArray.length; i++) {
      drikkeArray[i].style.display = drikkeCheck.checked ? "block" : "none";;
    }
};

function sortDesserter() {
    alert("empty")
}

function sortGrønt() {

    var drikkeArray = document.getElementsByClassName('drikke');
    document.getElementById('drikkeCheck');
    var i;
    for (i = 0; i < drikkeArray.length; i++) {
      drikkeArray[i].style.display = drikkeCheck.checked ? "block" : "none";;
    }
};

function sortDiverse() {

    var drikkeArray = document.getElementsByClassName('drikke');
    document.getElementById('drikkeCheck');
    var i;
    for (i = 0; i < drikkeArray.length; i++) {
      drikkeArray[i].style.display = drikkeCheck.checked ? "block" : "none";;
    }
};

// påfarten.style["display"] = "block"; 
// påfarten.innerHTML = "";

// rugbrødKnækbrød-div
// fuldkornsBoller-div
// morgenmadsprodukter-div
// mælk-div
// syrnedeMælkeprodukter-div
// ost-div
// kødFjerkræPlantebaseret-div
// pålæg-div
// fiskSkaldyr-div
// gåEfterMærkerne-div
// grøntsagerFrugt-div
// kartofler-div
// madPåFarten
// færdigRetter-div
// drissingSovs-div
// kakaoMælkedrikke-div
// frugtsaft-div
// sodavand-div

// document.getElementById('testimg'); style.display = 'block';