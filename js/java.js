
var brød = document.getElementById('rugbrødKnækbrød-div');
var boller = document.getElementById('fuldkornsBoller-div');
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

function sortBrød() {
    // ændre farven på knappen

    if (brød.style.display === "none" || boller.style.display === "none") {
        brød.style.display = "block";
        boller.style.display = "block";
    } else {
        brød.style.display = "none";
        boller.style.display = "none";
    }
    //brød.style.display = "none";
    //boller.style.display = "none";
    kød.style.display = "none";
    pålæg.style.display = "none";
    fisk.style.display = "none";
    mælk.style.display = "none";
    syrnede.style.display = "none";
    kakaodrikke.style.display = "none";
    mærkerne.style.display = "none";
    frugtsaft.style.display = "none";
    sodavand.style.display = "none";
    færdigeretter.style.display = "none";
    sovs.style.display = "none";
    påfarten.style.display = "none";
    grønt.style.display = "none";
    kartofler.style.display = "none";
    ost.style.display = "none";
    morgenmad.style.display = "none";
};

function sortDrikke() {
    if (mælk.style.display === "none" || syrnede.style.display === "none" || kakaodrikke.style.display === "none" || frugtsaft.style.display === "none" || sodavand.style.display === "none") {
        mælk.style.display = "block";
        syrnede.style.display = "block";
        kakaodrikke.style.display = "block";
        frugtsaft.style.display = "block";
        sodavand.style.display = "block";
    } else {
        mælk.style.display = "none";
        syrnede.style.display = "none";
        kakaodrikke.style.display = "none";
        frugtsaft.style.display = "none";
        sodavand.style.display = "none";
    }
    brød.style.display = "none";
    boller.style.display = "none";
    kød.style.display = "none";
    pålæg.style.display = "none";
    fisk.style.display = "none";
    // mælk.style.display = "none";
    //syrnede.style.display = "none";
    //kakaodrikke.style.display = "none";
    mærkerne.style.display = "none";
    //frugtsaft.style.display = "none";
    //sodavand.style.display = "none";
    færdigeretter.style.display = "none";
    sovs.style.display = "none";
    påfarten.style.display = "none";
    grønt.style.display = "none";
    kartofler.style.display = "none";
    ost.style.display = "none";
    morgenmad.style.display = "none";
};

function sortMælk() {
    if (morgenmad.style.display === "none" || syrnede.style.display === "none" || kakaodrikke.style.display === "none" || ost.style.display === "none" || mælk.style.display === "none") {
        morgenmad.style.display = "block";
        syrnede.style.display = "block";
        kakaodrikke.style.display = "block";
        ost.style.display = "block";
        mælk.style.display = "block";
    } else {
        morgenmad.style.display = "none";
        syrnede.style.display = "none";
        kakaodrikke.style.display = "none";
        ost.style.display = "none";
        mælk.style.display = "none";
    }
    brød.style.display = "none";
    boller.style.display = "none";
    kød.style.display = "none";
    pålæg.style.display = "none";
    fisk.style.display = "none";
    //mælk.style.display = "none";
    //syrnede.style.display = "none";
    //kakaodrikke.style.display = "none";
    mærkerne.style.display = "none";
    frugtsaft.style.display = "none";
    sodavand.style.display = "none";
    færdigeretter.style.display = "none";
    sovs.style.display = "none";
    påfarten.style.display = "none";
    grønt.style.display = "none";
    kartofler.style.display = "none";
    //ost.style.display = "none";
    //morgenmad.style.display = "none";
};

function sortKød() {
    if (kød.style.display === "none" || pålæg.style.display === "none" || fisk.style.display === "none") {
        kød.style.display = "block";
        pålæg.style.display = "block";
        fisk.style.display = "block";
    } else {
        kød.style.display = "none";
        pålæg.style.display = "none";
        fisk.style.display = "none";
    }

    brød.style.display = "none";
    boller.style.display = "none";
    //kød.style.display = "none";
    //pålæg.style.display = "none";
    //fisk.style.display = "none";
    mælk.style.display = "none";
    syrnede.style.display = "none";
    kakaodrikke.style.display = "none";
    mærkerne.style.display = "none";
    frugtsaft.style.display = "none";
    sodavand.style.display = "none";
    færdigeretter.style.display = "none";
    sovs.style.display = "none";
    påfarten.style.display = "none";
    grønt.style.display = "none";
    kartofler.style.display = "none";
    ost.style.display = "none";
    morgenmad.style.display = "none";
};

function sortFisk() {
    if (fisk.style.display === "none") {
        fisk.style.display = "block";

    } else {
        fisk.style.display = "none";

    }

    brød.style.display = "none";
    boller.style.display = "none";
    kød.style.display = "none";
    pålæg.style.display = "none";
    //fisk.style.display = "none";
    mælk.style.display = "none";
    syrnede.style.display = "none";
    kakaodrikke.style.display = "none";
    mærkerne.style.display = "none";
    frugtsaft.style.display = "none";
    sodavand.style.display = "none";
    færdigeretter.style.display = "none";
    sovs.style.display = "none";
    påfarten.style.display = "none";
    grønt.style.display = "none";
    kartofler.style.display = "none";
    ost.style.display = "none";
    morgenmad.style.display = "none";
};

function sortPålæg() {

    if (pålæg.style.display === "none") {
        pålæg.style.display = "block";

    } else {
        pålæg.style.display = "none";

    }

    brød.style.display = "none";
    boller.style.display = "none";
    kød.style.display = "none";
    //pålæg.style.display = "none";
    fisk.style.display = "none";
    mælk.style.display = "none";
    syrnede.style.display = "none";
    kakaodrikke.style.display = "none";
    mærkerne.style.display = "none";
    frugtsaft.style.display = "none";
    sodavand.style.display = "none";
    færdigeretter.style.display = "none";
    sovs.style.display = "none";
    påfarten.style.display = "none";
    grønt.style.display = "none";
    kartofler.style.display = "none";
    ost.style.display = "none";
    morgenmad.style.display = "none";
};

function sortDesserter() {
    alert("empty")
}

function sortGrønt() {

    if (grønt.style.display === "none" || kartofler.style.display === "none") {
        grønt.style.display = "block";
        kartofler.style.display = "block";
    } else {
        grønt.style.display = "none";
        kartofler.style.display = "none";
    }


    brød.style.display = "none";
    boller.style.display = "none";
    kød.style.display = "none";
    pålæg.style.display = "none";
    fisk.style.display = "none";
    mælk.style.display = "none";
    syrnede.style.display = "none";
    kakaodrikke.style.display = "none";
    mærkerne.style.display = "none";
    frugtsaft.style.display = "none";
    sodavand.style.display = "none";
    færdigeretter.style.display = "none";
    sovs.style.display = "none";
    påfarten.style.display = "none";
    //grønt.style.display = "none";
    //kartofler.style.display = "none";
    ost.style.display = "none";
    morgenmad.style.display = "none";
};

function sortDiverse() {

    if (færdigeretter.style.display === "none" || sovs.style.display === "none" || påfarten.style.display === "none") {
        færdigeretter.style.display = "block";
        sovs.style.display = "block";
        påfarten.style.display = "block";
    } else {
        færdigeretter.style.display = "none";
        sovs.style.display = "none";
        påfarten.style.display = "none";
    }


    brød.style.display = "none";
    boller.style.display = "none";
    kød.style.display = "none";
    pålæg.style.display = "none";
    fisk.style.display = "none";
    mælk.style.display = "none";
    syrnede.style.display = "none";
    kakaodrikke.style.display = "none";
    mærkerne.style.display = "none";
    frugtsaft.style.display = "none";
    sodavand.style.display = "none";
    //færdigeretter.style.display = "none";
    //sovs.style.display = "none";
    //påfarten.style.display = "none";
    grønt.style.display = "none";
    kartofler.style.display = "none";
    ost.style.display = "none";
    morgenmad.style.display = "none";
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