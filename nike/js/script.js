$(function(){
  $('.gnb_btn').click(function(){
    $('.gnb').slideToggle();
  }); //모바일 메뉴 보이기/감추기

  $(window).resize(
    function(){
        if($(this).width() > 767){
             $('.gnb').show(); //display:block
        }else{
             $('.gnb').hide(); //display:none
        }
    }); //모바일인경우 가로메뉴를 감추기/태블릿에서 가로메뉴를 보이기
});