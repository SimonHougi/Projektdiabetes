
mærkerne.style.display = "block"; //starter med at være tændt.
  

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
    var fiskArray = document.getElementsByClassName('fisk');
    document.getElementById('fiskCheck');
    var i;
    for (i = 0; i < fiskArray.length; i++) {
        fiskArray[i].style.display = fiskCheck.checked ? "block" : "none";;
    }
};

function sortPålæg() {

    var pålægArray = document.getElementsByClassName('pålæg');
    document.getElementById('pålægCheck');
    var i;
    for (i = 0; i < pålægArray.length; i++) {
        pålægArray[i].style.display = pålægCheck.checked ? "block" : "none";;
    }
};

function sortDesserter() {
    alert("empty")
}

function sortGrønt() {

    var grøntArray = document.getElementsByClassName('grønt');
    document.getElementById('grøntCheck');
    var i;
    for (i = 0; i < grøntArray.length; i++) {
        grøntArray[i].style.display = grøntCheck.checked ? "block" : "none";;
    }
};

function sortDiverse() {

    var diverseArray = document.getElementsByClassName('diverse');
    document.getElementById('diverseCheck');
    var i;
    for (i = 0; i < diverseArray.length; i++) {
        diverseArray[i].style.display = diverseCheck.checked ? "block" : "none";;
    }
};

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
