$(document).ready(function() {
    $('.link-btn-close').click(function() {
        $('#offcanvasRight').offcanvas('hide');
    });

    $('.link-redirection').click(function() {
       
        if(window.location.href.includes('form') || window.location.href.includes('privacy')) {
            
            window.location.href = './index.html' + $(this).attr('href');
        } 
    });
});
