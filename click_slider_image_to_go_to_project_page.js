//when uploading background image to section, add the prefix "wl_" to enable this function. For example, img name as "wl_BISW" will link to "/bisw". Therefore remember to make the name of the img with page url.

$(document).ready(function(){

  $(".page-section").each(function() {

    var str = $(this).find("img").attr("data-src");
   var strsplit = str.split("/"); 
    var jpgname =  strsplit[strsplit.length-1];
    if(jpgname.substring(0,3)=="wl_"){var linkname = jpgname.substring(3,(jpgname.length-4));$(this).hover(function() {$(this).css("cursor","pointer")});$(this).click(function(){window.location = "/" +linkname.toLowerCase()})
 }
  
  })
  
  
  
})