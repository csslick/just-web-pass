// main.js
$(function(){
    // 2단계 메뉴 액션 + fade 효과
    $('#gnb > .depth1 > li').hover(
        function(){
            $(this)
                .find('.depth2')
                .stop().fadeIn(400);
        },
        function(){
            $(this)
                .find('.depth2')
                .stop().fadeOut(400);
        }
    );
});