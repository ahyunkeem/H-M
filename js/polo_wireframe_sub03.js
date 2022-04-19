$(function(){
    var width = $(window).width();
    var i = 0;
    var mn = $('.menuWrap');
    var acoli = $('.mnTop li');
    var gr = $('.artGroup');
    var btn = $('.btns>.btn');

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
        gr.animate({
            marginLeft : '-54.66%'
        },400,function(){
            gr.find('.article:first').appendTo(gr);
            gr.css('margin-left','-27.33%');
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
        gr.css('margin-left','-27.33%');
        btn.click(slide01)      
    }else if(width>1024){
        // 컨텐츠01 슬라이드
        gr.find('.article:last').prependTo(gr);
        gr.css('margin-left','-27.33%');
        btn.click(slide01)
    }
});