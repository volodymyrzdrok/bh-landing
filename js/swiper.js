$(function () {
    const swiper = new Swiper(".swiper", {
        parallax: true,
        speed: 300,
        spaceBetween: 80,
        direction: "vertical",
  
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                var paginationHtml = '';
                for (var i = 0; i < total; i++) {
                    var index = i;
                    if (index === current - 1) {
                        paginationHtml += '<img src="./images/bullet.svg" class="bullet-icon"  data-index="' + index + '">';
                    } else {
                        paginationHtml += '<img src="./images/bullet.svg" class="bullet-icon" style="opacity:0.5" data-index="' + index + '">';
                    }
                }
                return paginationHtml;
            }
        },
        on: {
            init: function () {
                $('.swiper-pagination').on('click', '.bullet-icon', function () {
                    var index = parseInt($(this).data('index'));
                    swiper.slideTo(index);
                });
            }
        },
    
    });
});
