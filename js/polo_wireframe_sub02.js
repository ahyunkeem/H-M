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
        gr.eq(0).stop().animate({
            marginLeft : '-50%'
        },400,function(){
            gr.eq(0).find('.article:first').appendTo('.artGroup:eq(0)');
            gr.eq(0).css('margin-left','-25%')
        });
    }
    function slide02(){
        gr.eq(1).stop().animate({
            marginRight : '-54.66%'
        },400,function(){
            gr.eq(1).find('.article:first').appendTo('.artGroup:eq(1)');
            gr.eq(1).css('margin-right','-27.33%')
        });
    }
    function slide03(){
        gr.eq(2).stop().animate({
            marginLeft : '-54.66%'
        },400,function(){
            gr.eq(2).find('.article:first').appendTo('.artGroup:eq(2)');
            gr.eq(2).css('margin-left','-27.33%')
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
        gr.eq(0).find('.article:last').prependTo('.artGroup:eq(0)');
        gr.eq(0).css('margin-left','-25%')
        btn.eq(0).click(slide01);
        // 컨텐츠02 슬라이드
        gr.eq(1).find('.article:last').prependTo('.artGroup:eq(1)');
        gr.eq(1).css('margin-right','-27.33%')
        btn.eq(1).click(slide02);
        // 컨텐츠03 슬라이드
        gr.eq(2).find('.article:last').prependTo('.artGroup:eq(2)');
        gr.eq(2).css('margin-left','-27.33%')
        btn.eq(2).click(slide03);                  

    }else if(width>1024){
        // 컨텐츠01 슬라이드
        gr.eq(0).find('.article:last').prependTo('.artGroup:eq(0)');
        gr.eq(0).css('margin-left','-25%')
        btn.eq(0).click(slide01);
        // 컨텐츠02 슬라이드
        gr.eq(1).find('.article:last').prependTo('.artGroup:eq(1)');
        gr.eq(1).css('margin-right','-27.33%')
        btn.eq(1).click(slide02);
        // 컨텐츠03 슬라이드
        gr.eq(2).find('.article:last').prependTo('.artGroup:eq(2)');
        gr.eq(2).css('margin-left','-27.33%')
        btn.eq(2).click(slide03);        
    }
});