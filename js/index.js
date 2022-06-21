$(function(){
    var wd = $(window).width();
    var flag = true;
    var cur = $('.mainWrap>main>.curPoint');
    var round = $('.mainWrap>main>.round');
    var bnr01 = $('.bnrWrap>.banner.bnr01');
    var bar = $('.bnrWrap>.bnr01>.bnrTop>.title>.bar');
    var svg = $('.bnrWrap>.bnr02>.bnrTop>.perRnd');
    var perbar = $('.bnrWrap>.bnr02>.bnrBtm>.perBar>.bar>.per');
    var scrTop = $('.scrBtn');
    var loc = $('.bnrWrap>.bnr01').offset().top;
    var loc2 = $('.bnrWrap>.bnr02').offset().top;
    var loc3 = $('.cntWrap').offset().top;
    var bnr01Btn = $('.bnr01 .downBtn');
    var bnr02Btn = $('.bnr02 .downBtn');
    
    // 반응형
    if(wd > 1024){
        // 마우스 이벤트
        $(window).mousemove(function(eve){
            var posX = 0, posY = 0;
            posX=eve.clientX;
            posY=eve.clientY; 
            cur.css({
                top: posY,
                left: posX,
            });
    
            round.click(rndClick);
            round.mouseleave(rndLeave)
            round.mouseenter(rndEnter)
            $(window).scroll(screve);
            bnr01Btn.click(scrbnr01);
            bnr02Btn.click(scrbnr02);
        }); 
    }else{
        perbar.each(function(a){
            var num = $(this).attr('data-num');
            $({percent:0}).animate({percent : num},{
                duration : 2000,
                progress : function(){
                    perbar.eq(a).css({
                        width : parseInt(this.percent)+'%'
                    });
                }
            });
        });
    }

    // 메인 풀페이지 스크롤
    function rndClick(){
        cur.animate({
            width : '40px',
            height : '40px',
        },500)
        $('html,body').stop().animate({scrollTop : loc},500);
        bar.animate({width : '100%'},3000);
        bnr01.css({opacity : 1});
    }

    // 메인페이지 커서효과
    function rndEnter(){
        cur.css({
            width: '40px',
            height: '40px',
            mixBlendMode : 'darken'
            
        });
    }
    function rndLeave(){
        cur.css({
            width: '120px',
            height: '120px',
            mixBlendMode : 'exclusion'
        });
    }

    // 풀페이지 스크롤
    function scrbnr01(){
        $('html,body').stop().animate({scrollTop : loc2},500);
    }
    function scrbnr02(){
        $('html,body').stop().animate({scrollTop : loc3},500);
    }
    
    function screve(){
        var now = $(this).scrollTop();
        // 자기소개
        if(now >= loc){
            bnr01.css('opacity',1);
            bar.animate({width : '100%'},2000);
        }
        // 보유스킬
        if(flag == true){
            if(now > loc && now >= loc2){
                // 원형그래프
                var percent = 0;
                $({per:0}).animate({per:95},{
                    duration : 1500,
                    progress : function(){
                        percent = 439 - ((439 * this.per) / 100);
                        svg.eq(0).find('circle').css('stroke-dashoffset', percent);
                    }
                })
                $({per:0}).animate({per:90},{
                    duration : 1500,
                    progress : function(){
                        percent = 439 - ((439 * this.per) / 100);
                        svg.eq(1).find('circle').css('stroke-dashoffset', percent);
                    }
                })
                $({per:0}).animate({per:82},{
                    duration : 1500,
                    progress : function(){
                        percent = 439 - ((439 * this.per) / 100);
                        svg.eq(2).find('circle').css('stroke-dashoffset', percent);
                    }
                })
                // 가로그래프
                perbar.each(function(a){
                    var num = $(this).attr('data-num');
                    $({percent:0}).animate({percent : num},{
                        duration : 2000,
                        progress : function(){
                            perbar.eq(a).css({
                                width : parseInt(this.percent)+'%'
                            });
                        }
                    });
                });
                flag = false;
            }
        }
    }

    // 탑버튼
    scrTop.click(function(){
        $('html,body').stop().animate({scrollTop : 0},500);
    });

});