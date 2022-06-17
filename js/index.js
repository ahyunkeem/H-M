$(function(){
    var wd = $(window).width();
    var flag = true;
    var cur = $('.mainWrap>main>.curPoint');
    var round = $('.mainWrap>main>.round');
    var bnr01 = $('.bnrWrap>.banner.bnr01');
    var loc = $('.bnrWrap>.bnr01').offset().top;
    var bar = $('.bnrWrap>.bnr01>.bnrTop>.title>.bar');
    var loc2 = $('.bnrWrap>.bnr02').offset().top;
    var svg = $('.bnrWrap>.bnr02>.bnrTop>.perRnd');
    var bnr02 = $('.bnrWrap:nth-child(3)');
    // var svg = $('.bnrWrap>.bnr02>.bnrTop>.perRnd>svg>circle');
    console.log(loc2);

    if(wd > 1024){
        // 메인 1페이지 풀페이지 & 마우스 이벤트
        $(window).mousemove(function(eve){
            var posX = 0, posY = 0;
            posX=eve.clientX;
            posY=eve.clientY; 
            cur.css({
                top: posY,
                left: posX,
            });
    
            round.click(function(){
                cur.animate({
                    width : '40px',
                    height : '40px',
                },500)
                $('html,body').stop().animate({scrollTop : loc},500,);
                bar.animate({width : '100%'},3000);
                bnr01.css({opacity : 1});
            });
            round.mouseenter(function(){
                cur.css({
                    width: '40px',
                    height: '40px',
                    mixBlendMode : 'darken'
                    
                });
            });
            round.mouseleave(function(){
                cur.css({
                    width: '120px',
                    height: '120px',
                    mixBlendMode : 'exclusion'
                });
            })
        });
    
    }else if(wd >= 420 && wd <= 1024 ){

    }else{

    }

    // 스크롤 이벤트
    $(window).scroll(function(){
        var now = $(this).scrollTop();
        // 자기소개
        if(now >= loc){
            bnr01.css('opacity',1);
            bar.animate({width : '100%'},2000);
        }
        
        // 보유스킬
        if(flag == true){
            if(now > loc && now >= loc2){
                var percent = 0;
                // 원형 1
                $({per:0}).animate({per:95},{
                    duration : 1500,
                    progress : function(){
                        percent = 439 - ((439 * this.per) / 100);
                        svg.eq(0).find('circle').css('stroke-dashoffset', percent);
                    }
                })
                // 원형 2
                $({per:0}).animate({per:90},{
                    duration : 1500,
                    progress : function(){
                        percent = 439 - ((439 * this.per) / 100);
                        svg.eq(1).find('circle').css('stroke-dashoffset', percent);
                    }
                })
                // 원형 3
                $({per:0}).animate({per:82},{
                    duration : 1500,
                    progress : function(){
                        percent = 439 - ((439 * this.per) / 100);
                        svg.eq(2).find('circle').css('stroke-dashoffset', percent);
                    }
                })
                flag = false;
            }
        }
        
    });




});