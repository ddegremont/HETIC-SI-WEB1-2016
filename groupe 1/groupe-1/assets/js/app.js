var menuProduits = document.querySelector("#menu-produits");
var boutonProduits = document.querySelector("#bouton-produits");
var upBoutonProduits = document.querySelector("#bouton-produits img");
var freinage = document.querySelector("#drop1 ul");
var deg;


boutonProduits.addEventListener('click', function(){
    if(menuProduits.style.transform == '' ||  menuProduits.style.transform == 'translateY(0px)'){
        menuProduits.style.transform = 'translateY(-'+ menuProduits.clientHeight+'px)';
        freinage.style.display = "block";
        deg = 180;
    }else{
        menuProduits.style.transform = 'translateY(0px)';
        deg = 0;
    }
    upBoutonProduits.style.webkitTransform = 'rotate('+deg+'deg)';
    upBoutonProduits.style.mozTransform    = 'rotate('+deg+'deg)';
    upBoutonProduits.style.msTransform     = 'rotate('+deg+'deg)';
    upBoutonProduits.style.oTransform      = 'rotate('+deg+'deg)';
    upBoutonProduits.style.transform       = 'rotate('+deg+'deg)';
});

$(window).resize(function(){
    if ($(window).width() < 1200 && menuProduits.style.transform == 'translateY(-'+ menuProduits.clientHeight+'px)'){
        menuProduits.style.transform = 'translateY(0px)';
    }
});

/*MOBILE*/

var modele = document.querySelector("#modele");
var immatriculation = document.querySelector("#immatriculation");
var carte = document.querySelector("#carte");
var garages = document.querySelector("#garages");
var boutonModele = document.querySelector("#modele .title");
var boutonImmatriculation = document.querySelector("#immatriculation .title");
var boutonCarte = document.querySelector("#carte .title");
var boutonGarages = document.querySelector("#garages .title");
var Pneus = document.querySelector("#wrapper-pneus");
var boutonPneus = document.querySelector("#pneusMobile");


boutonModele.addEventListener('click', function(){
    if($(window).width() < 780){
        if(modele.style.height == '45px' || modele.style.height == ''){
            modele.style.height = '200px';
        }else{
            modele.style.height = '45px';
        }
    } else{
        return
    }
});
boutonImmatriculation.addEventListener('click', function(){
    if($(window).width() < 780){
        if(immatriculation.style.height == '45px' || immatriculation.style.height == ''){
            immatriculation.style.height = '200px';
        }else{
            immatriculation.style.height = '45px';
        }
    } else{
        return
    }
});
boutonCarte.addEventListener('click', function(){
    if($(window).width() < 780){
        if(carte.style.height == '45px' || carte.style.height == ''){
            carte.style.height = '200px';
        }else{
            carte.style.height = '45px';
        }
    } else{
        return
    }
});
boutonGarages.addEventListener('click', function(){
    if($(window).width() < 780){
        if(garages.style.height == '45px' || garages.style.height == ''){
            garages.style.height = '200px';
        }else{
            garages.style.height = '45px';
        }
    } else{
        return
    }
});
boutonPneus.addEventListener('click', function(){
    if($(window).width() < 780){
        if(Pneus.style.height == '45px' || Pneus.style.height == ''){
            Pneus.style.height = '550px';
        }else{
            Pneus.style.height = '45px';
        }
    } else{
        return
    }
});
console.log(Pneus.style.height);

var titreFooter = document.querySelectorAll(".fleche");

$(window).load(function() {
    if($(window).innerWidth() < 780){
        for(i=0;i<titreFooter.length;i++){
            $(titreFooter[i]).addClass('glyphicon glyphicon-menu-down');
        }
    }else{
        for(i=0;i<titreFooter.length;i++){
            $(titreFooter[i]).removeClass('glyphicon glyphicon-menu-down');
        }

    }
});

$(window).resize(function() {
    if($(window).innerWidth() < 780){
        for(i=0;i<titreFooter.length;i++){
            $(titreFooter[i]).addClass('glyphicon glyphicon-menu-down');
        }
    }else{
        for(i=0;i<titreFooter.length;i++){
            $(titreFooter[i]).removeClass('glyphicon glyphicon-menu-down');
        }

    }
});

var listeFooter1 = document.querySelector("#listeFooter1");
var listeFooter2 = document.querySelector("#listeFooter2");
var listeFooter3 = document.querySelector("#listeFooter3");
var boutonListeFooter1 = document.querySelector("#boutonListeFooter1");
var boutonListeFooter2 = document.querySelector("#boutonListeFooter2");
var boutonListeFooter3 = document.querySelector("#boutonListeFooter3");

boutonListeFooter1.addEventListener('click', function(){
    if($(window).width() < 780){
        if(listeFooter1.style.maxHeight == '40px' || listeFooter1.style.maxHeight == ''){
            listeFooter1.style.maxHeight = '500px';
        }else{
            listeFooter1.style.maxHeight = '40px';
        }
    }
    else{
        return
    }
});
boutonListeFooter2.addEventListener('click', function(){
    if($(window).width() < 780){
        if(listeFooter2.style.maxHeight == '40px' || listeFooter2.style.maxHeight == ''){
            listeFooter2.style.maxHeight = '500px';
        }else{
            listeFooter2.style.maxHeight = '40px';
        }
    }
    else{
        return
    }
});

boutonListeFooter3.addEventListener('click', function(){
    if($(window).width() < 780){
        if(listeFooter3.style.maxHeight == '40px' || listeFooter3.style.maxHeight == ''){
            listeFooter3.style.maxHeight = '500px';
        }else{
            listeFooter3.style.maxHeight = '40px';
        }
    }
    else{
        return
    }
});

/*MENU BURGER*/

var burger = document.querySelector("#burger");
var barre1 = document.querySelector("#barre1");
var barre2 = document.querySelector("#barre2");
var barre3 = document.querySelector("#barre3");
var menuBurger = document.querySelector("#menuBurger");
var menuOpen = false;

burger.addEventListener('click', function(){
    if(menuOpen == false){
        barre1.style.webkitTransformOrigin = "0% 100%";
        barre1.style.MozTransformOrigin = "0% 100%";
        barre1.style.msTransformOrigin = "0% 100%";
        barre1.style.OTransformOrigin = "0% 100%";
        barre1.style.transformOrigin = "0% 100%";
        barre1.style.webkitTransform = "rotate(45deg)";
        barre1.style.MozTransform = "rotate(45deg)";
        barre1.style.msTransform = "rotate(45deg)";
        barre1.style.OTransform = "rotate(45deg)";
        barre1.style.transform = "rotate(45deg)";
        barre3.style.webkitTransformOrigin = "0% 0%";
        barre3.style.MozTransformOrigin = "0% 0%";
        barre3.style.msTransformOrigin = "0% 0%";
        barre3.style.OTransformOrigin = "0% 0%";
        barre3.style.transformOrigin = "0% 0%";
        barre3.style.webkitTransform = "rotate(-45deg)";
        barre3.style.MozTransform = "rotate(-45deg)";
        barre3.style.msTransform = "rotate(-45deg)";
        barre3.style.OTransform = "rotate(-45deg)";
        barre3.style.transform = "rotate(-45deg)";
        $(barre2).fadeOut();
        menuBurger.style.left = "0";
        menuOpen = true;
        return
    }else{
        barre1.style.webkitTransformOrigin = "0% 100%";
        barre1.style.MozTransformOrigin = "0% 100%";
        barre1.style.msTransformOrigin = "0% 100%";
        barre1.style.OTransformOrigin = "0% 100%";
        barre1.style.transformOrigin = "0% 100%";
        barre1.style.webkitTransform = "rotate(0deg)";
        barre1.style.MozTransform = "rotate(0deg)";
        barre1.style.msTransform = "rotate(0deg)";
        barre1.style.OTransform = "rotate(0deg)";
        barre1.style.transform = "rotate(0deg)";
        barre3.style.webkitTransformOrigin = "0% 0%";
        barre3.style.MozTransformOrigin = "0% 0%";
        barre3.style.msTransformOrigin = "0% 0%";
        barre3.style.OTransformOrigin = "0% 0%";
        barre3.style.transformOrigin = "0% 0%";
        barre3.style.webkitTransform = "rotate(0deg)";
        barre3.style.MozTransform = "rotate(0deg)";
        barre3.style.msTransform = "rotate(0deg)";
        barre3.style.OTransform = "rotate(0deg)";
        barre3.style.transform = "rotate(0deg)";
        $(barre2).fadeIn();
        menuBurger.style.left = "-100%";
        menuOpen = false;
    }
});
