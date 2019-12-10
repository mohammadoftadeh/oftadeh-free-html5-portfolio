import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import "./popper.min.js";
import "bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

import 'jquery.nicescroll/dist/jquery.nicescroll';

import 'fslightbox/index';

import '@fortawesome/fontawesome-free/css/all.css';

import "../css/oftadeh.css";


$(document).ready(function(){
    
    // nice scroll
    $(".right-side").niceScroll({
        cursorcolor:"#B8A2FF",
        cursorborder: "1px solid #B8A2FF",
        cursorwidth:"6px",
        cursoropacitymin: 1,
		cursordragontouch: true,
    });

    // toggle responsive menu
    $('.o-toggle-menu, .res-backdrop').click(function(){
        $('body').toggleClass('overflow-hidden');
        $(this).removeClass('o-toggle-menu-close');
        $('.o-toggle-menu i').toggleClass('fa-times');
        
        $('.res-backdrop').toggle();
        $('.responsive-menu').toggleClass('o-left-zero');
    });


});