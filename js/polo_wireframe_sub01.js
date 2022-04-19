$(function(){
    var width = $(window).width();
    var i = 0;
    var mn = $('.menuWrap');
    var acoli = $('.mnTop li');
    var gr = $('.artGroup');
    var btn = $('.btns>.btn');
    var artView = $('.artView');

    function accordion(){
        acoli.removeClass('show');
        $(this).addClass('show');
        acoli.find('span').text(' +')
        $(this).find('span').text(' -')
    }
    function open(){
        mn.css({
            width :'100%',
            opacity : 1
        });
    }
    function close(){
        mn.css({
            width :'0%',
            opacity : 0
        });
    }
    function slide01(){
        gr.stop().animate({
            marginLeft : '-58%'
        },400,function(){
            gr.find('.article:first').appendTo(gr);
            gr.css('margin-left','-29%');
        });
    }
    function slide02(){
        artView.eq(1).stop().animate({
            marginRight : '-58%'
        },400,function(){
            artView.eq(1).find('.article:first').appendTo('.artView:eq(1)');
            artView.eq(1).css('margin-right','-29%');
        });
    }
    function slide03(){
        artView.eq(2).animate({
            marginLeft : '-58%'
        },400,function(){
            artView.eq(2).find('.article:first').appendTo('.artView:eq(2)');
            artView.eq(2).css('margin-left','-29%');
        });
    }
    function slide04(){
        artView.eq(3).stop().animate({
            marginRight : '-58%'
        },400,function(){
            artView.eq(3).find('.article:first').appendTo('.artView:eq(3)');
            artView.eq(3).css('margin-right','-29%');
        });
    }

    if (width<420){
        // 메뉴 tab
        $('.header li').last().click(open);
        $('.btn').eq(0).click(close);
        acoli.even().click(accordion);

    }else if(width<=1024){
        // 메뉴 tab
        $('.header li').last().click(open);
        $('.btn').eq(0).click(close);
        acoli.even().click(accordion);
        // 컨텐츠01 슬라이드
        gr.find('.article:last').prependTo(gr);
        gr.css('margin-left','-29%');
        btn.eq(0).click(slide01);
        // 컨텐츠02 슬라이드
        artView.eq(01).find('.article:last').prependTo('.artView:eq(1)');
        artView.eq(01).css('margin-right','-29%');
        btn.eq(1).click(slide02);        
        // 컨텐츠03 슬라이드
        artView.eq(02).find('.article:last').prependTo('.artView:eq(2)');
        artView.eq(02).css('margin-left','-29%');
        btn.eq(2).click(slide03);
        // 컨텐츠04 슬라이드
        artView.eq(03).find('.article:last').prependTo('.artView:eq(3)');
        artView.eq(03).css('margin-right','-29%');
        btn.eq(3).click(slide04);        

    }else if(width>1024){
        // 컨텐츠01 슬라이드
        gr.find('.article:last').prependTo(gr);
        gr.css('margin-left','-29%');
        btn.eq(0).click(slide01);
        // 컨텐츠02 슬라이드
        artView.eq(01).find('.article:last').prependTo('.artView:eq(1)');
        artView.eq(01).css('margin-right','-29%');
        btn.eq(1).click(slide02);
        // 컨텐츠03 슬라이드
        artView.eq(02).find('.article:last').prependTo('.artView:eq(2)');
        artView.eq(02).css('margin-left','-29%');
        btn.eq(2).click(slide03);
        // 컨텐츠04 슬라이드
        artView.eq(03).find('.article:last').prependTo('.artView:eq(3)');
        artView.eq(03).css('margin-right','-29%');
        btn.eq(3).click(slide04);
    }
});