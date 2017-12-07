'use strict';

document.addEventListener('DOMContentLoaded', function(){

    var navLinks = document.querySelectorAll('.gallery .nav a');
    var viewerImg = document.querySelector('.gallery .viewer>img');

    /*
    ok
    navLinks.forEach(function(elt, i){

    })

    moins bon car 

    var tab = ['a', 'b', , 'd']
    tab.maPropriete = 'bonjour';

    for (var index in navLinks)
    for (var i=0; i < navLinks.length; i++)
    */

    for (var link of navLinks) {
        link.addEventListener('click', function(e){
            viewerImg.src = 'img/' + this.dataset.src
        })
    }

});
