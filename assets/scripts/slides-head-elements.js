$(document).ready(function() {
    // Using jQuery's .append() method
    var meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1";
    meta.name = "description";
    meta.content = "Documentation for the department";
    meta.name = "keywords";
    meta.content = "IT,HELP,SUPPORT";
    meta.name = "author";
    meta.content = "M Baggett; michael.baggett@unt.edu";
    meta.httpEquiv = "Content-Type";
    meta.content = "text/html; charset=UTF-8";
    $("head").append("<script src='https://kit.fontawesome.com/a085645410.js' crossorigin='anonymous'></script>");
    $("head").append("<script data-search-pseudo-elements src='https://kit.fontawesome.com/a085645410.js' crossorigin='anonymous'></script>");
    $("head").append("<link rel='preconnect' href='https://fonts.googleapis.com'>");
    $("head").append("<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>");
    $("head").append("<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Raleway|Roboto|Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap|Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'>");
    $("head").append("<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>");
    $("head").append("<link href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' rel='stylesheet'>");  
/*    $("head").append("<link rel='stylesheet' href='/assets/css/prism.css?v=1.1'>"); */
});