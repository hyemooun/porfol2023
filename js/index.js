   //헤더에 마우스를 올렸을 때
   //클래스 on을 추가해라 ( height:730px)
   $(".gnb").hover ( 
       function(){ 
           $("header").addClass("on");
           
       },
       function(){
           $("header").removeClass("on");
           
       }
   );

    $(".menu-trigger").click(function(){
        $("header").toggleClass('on');
        $(".gnb_bar").stop().toggleClass('on');
        $(".bg").stop().toggleClass('on');
        
    });
       
   var burger = $('.menu-trigger');


   burger.each(function(index){
       var $this = $(this);
       
       $this.on('click', function(e){
           e.preventDefault();
           $(this).toggleClass('active-2');
           
       })
   });
       
   $(window).on("scroll", function (){
       if($(window).scrollTop()){
           $("header").addClass("active");
       } else {
           $("header").removeClass("active");
       }
   });
       

    $(".slide li").eq(0).addClass("on");
    //slide li의 첫번째(eq(0))를 지정하고 있습니다

    //첫페이지에 효과가 나오게 하려는 일회성(반복 안됨)


    //자동으로 페이지가 넘어간다   
    var n = 0; //횟수를 제한하기 위한 변수를 만듦
    function auto() {
        n++; //자기 자신한테 1을 더해준다
        if (n >= 4 ) {
            n = 0;
        };
        
        //슬라이드에게 animate를 주고난 후에(function)
        //슬라이드 li들에게 .on을 준다
        //나머지 li형제들에게는 .on을 지운다
        $(".slide").animate({"left":-n*100+"%"},700, function(){ 
            $(".slide li").eq(n).addClass("on").siblings().removeClass("on");

        });
        // slide나 div에게 .on을 주면 적용이 안 된다 -> 
        // siblings()-> 나머지 형제들에게 .on remove를 준다. 이거 안 주면 슬라이드가 다시 넘어갈 때 .on클래스 준 채로 끝났기 때문에 효과 반복이 될 수가 없다
        
        $(".page li").eq(n).addClass("select").siblings().removeClass();
        
    };
       
    var timer = setInterval("auto()",4000); 
    //setInterval = 외부함수를 특정시간동안 반복 시킴
    //auto를 4초마다 반복한다(초가 길어질수록 느리게 넘어간다)

       
       
    //페이지 버튼 누를 때마다 페이지가 넘어간다 (좌표값을 가져간다) 
    $(".page li").click(function(){
       n = $(this).index(); // 0,1,2,3을 반환하는 것이 필요하다 .INDEX 전역 변수를 만듦
       $(".slide").animate({"left":-n*100+"%"},700);

       $(this).addClass("select").siblings().removeClass();
        // 내가 클릭한 애한테 select를 주고 다른 형제들에겐 removeClass를 줄게
    });

    var chk = 0;
    $(".button").click(function(){ //버튼을 클릭하면
        if ( chk==0){ // 만약 chk가 0일 때
            //timer를 멈추고
            clearInterval(timer);
            //button의 a를 찾아
            //class를 play-circle로 교체해라
            $(this).find("a").attr("class","xi-play-circle-o");
            chk=1;
        } else {
            timer = setInterval("auto()",4000);
            auto();
            $(this).find("a").attr("class","xi-pause-circle-o");
            chk=0; 
        }
    });
       
    /*AOS*/
    AOS.init( {
        duration:2000
    });
       
       
    /*loop slide*/   
    new Swiper(".sld1", {
      slidesPerView: 6, //한 슬라이드에 보여줄 갯수
      spaceBetween: 20, //슬라이드 사이 여백
      slidesPerGroup : 6, //그룹으로 묶을 수, slidesPerView와 같은 값을 지정하는게 좋음
      speed:2000, //슬라이드 속도       
      loop: true, //슬라이드 무한 반복
      autoplay: { //자동 슬라이드 설정
        delay: 4000,
        disableOnInteraction: false, //false로 해놓으면 스와이프 후 자동 재생이 비활성화 되지 않는다
      },
      navigation: { //버튼 사용자 지정 
        nextEl: ".next", 
        prevEl: ".prev",
      },
    });

    new Swiper(".sld2", {
      slidesPerView: 6, //한 슬라이드에 보여줄 갯수
      spaceBetween: 20, //슬라이드 사이 여백
      slidesPerGroup : 6, //그룹으로 묶을 수, slidesPerView와 같은 값을 지정하는게 좋음
      speed:2000, //슬라이드 속도       
      loop: true, //슬라이드 무한 반복
      autoplay: { //자동 슬라이드 설정
        delay: 4000,
        disableOnInteraction: false, //false로 해놓으면 스와이프 후 자동 재생이 비활성화 되지 않는다
      },
      navigation: { //버튼 사용자 지정 
        nextEl: ".next", 
        prevEl: ".prev",
      },
    });

    var $target = $('.quick');
    var $footer = $('footer');
    $(window).on('scroll', function(){
        var $window = $(window), anchor = $window.scrollTop() + $window.height();
        var fot = $footer.offset().top;
        if (anchor > fot) $target.removeClass('fixed');
        else $target.addClass('fixed');
    });


 
