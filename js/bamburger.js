let menu_btn = document.getElementById('hambugerIcon');
//ハンバーガーアイコンをクリックした時の動作
menu_btn.addEventListener('click' , function () {
    
    //ハンバーガーアイコンに「open」クラスがついているか判定
    if($(this).hasClass('c-hambugerIcon--open')) {
        $(this).toggleClass('c-hambugerIcon--open');
        $(".c-hambugerIcon__line").removeClass('c-hambugerIcon__line--open');
        $(".mv__cover").removeClass('mv__cover--open');
        $(".mv__navSp").css("display", "none");
        
    } else {
        $(this).toggleClass('c-hambugerIcon--open');
        $(".c-hambugerIcon__line").addClass('c-hambugerIcon__line--open');
        $(".mv__cover").addClass('mv__cover--open');
        $(".mv__navSp").slideDown();
    }
    
} );
$(".mv__link").on('click' , (e) => {
    $(".mv__cover").removeClass('mv__cover--open');
    $(".c-hambugerIcon").removeClass('c-hambugerIcon--open');
    $(".c-hambugerIcon__line").removeClass('c-hambugerIcon__line--open');
    $(".mv__navSp").css("display", "none");
});