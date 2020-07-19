function test(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }
  $(document).ready(function(){
    setTimeout(function(){ test(); });
  });
  $(window).on('resize', function(){
    setTimeout(function(){ test(); }, 500);
  });
  $(".navbar-toggler").click(function(){
    setTimeout(function(){ test(); });
  });

  document.addEventListener(
    "scroll",
    function() {
      var scrollTop =
        document.documentElement["scrollTop"] || document.body["scrollTop"];
      var scrollBottom =
        (document.documentElement["scrollHeight"] ||
          document.body["scrollHeight"]) - document.documentElement.clientHeight;
      scrollPercent = scrollTop / scrollBottom * 100 + "%";
      document
        .getElementById("_progress")
        .style.setProperty("--scroll", scrollPercent);
    },
    { passive: true }
  );

AOS.init({
    duration:1200
   


})

 


$(document).ready(function(){

  $('#searchbar').focus();

  $('#donate-buttons').on('click', '.btn-blue', function(e) {
    e.preventDefault();
    $('.active').removeClass('active');
    $('#other-input').hide().siblings('#other').show();
    $(this).filter('.btn-blue').addClass("active");
    var value = $(this).data('impact');
    $(this).closest('div').find('p').text("" + value);
    $('#other-input').find('input').val('');  
  });
    
  $('.btn-green').on('click', function() {
    var dollar;
    var input = $('#other-input').find('input').val();
    if ( !input ) {
      dollar = $('.active').data('dollars');
     } else if ( $.trim(input) === '' || isNaN(input)) {
      // empty space leaves value = 'undefined'. 
      // Have to fix $.trim(input) == '' above so that it works.
      console.log('Yes');
      dollar = "يرجى ادخال رقم"; 
    } else {
      dollar = input;
    }
    $('#price').text(""+dollar);
  });

  $('#other').on('click', function(e) {
    e.preventDefault(); 
    var buttons = $(this).parent('#donate-buttons');
    buttons.find('.active').removeClass('active');
    var other = $(this).hide().siblings('#other-input');
    other.show();
    other.find('input').focus();
    var pText = buttons.siblings('p');
    pText.text("شكرا لك");
    var oValue = other.find('input');
    oValue.keyup(function() {
      if ( oValue.val() > 50 ) {
        pText.text("شكرا لك" + " يغطي خدمات الإسكان أو المشورة " + oValue.val()/25 + " اشخاص.");
      } else {
        pText.text("شكرا لك");
      }
    });
  }); 

});

