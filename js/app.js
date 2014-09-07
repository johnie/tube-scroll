$(document).ready(function () {

  //======================================================================
  //CLICK OPEN AND CLOSE EVENTS - BUTTONS & STUFF
  //======================================================================
  
  //twitter button
  !function (d, s, id) {
    var js;
    var insertAt = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
      /** @type {Element} */
      js = d.createElement(s);
      /** @type {string} */
      js.id = id;
      /** @type {string} */
      js.src = "https://platform.twitter.com/widgets.js";
      insertAt.parentNode.insertBefore(js, insertAt);
    }
  }(document, "script", "twitter-wjs");
  
  
  
  //======================================================================
  //CLICK OPEN AND CLOSE EVENTS - BUTTONS & STUFF
  //======================================================================
  
  
  //open and close the key menu
  $(".key, .close-key").on('click', function () {
    $(".key-overlay").fadeToggle();
  });
  
  
  //open and close the key menu
  $(".info, .close-info").on('click', function () {
    $(".info-overlay").fadeToggle();
  });
  
  //open the about overlay
  $(".info-btn").on('click', function () {
    if ($(this).text() === "i") {
      $(".info-slider").slideDown();
      $(this).text("X");
    } else {
      $(".info-slider").slideUp();
      $(this).text("i");
    }
  });
  
  
  //NOTE: This is heavily reliant on a naming convention
  //the button id must be the svg path id + -btn (or four charatcers long)
  //otherwise this will not work
  $(".key-overlay button").on('click', function () {
    //grey out selected button
    $(this).toggleClass("opacity");
    //get the the id of the button clicked
    var id = this.id;//js
    //remove the last four characters from button's id
    var idName = id.slice(0, -4);
    //add # to idName and then toggle the resulting id
    $("#" + idName).toggle();
  });
  
  
});