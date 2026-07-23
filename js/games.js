$(document).ready(function () { 

    // 1. Logic Menu Mobile
    $('.mobile-toggle').on('click', function () { 
        $('.menu').toggleClass('open');
    }); 
    
    // 2. Logic cho nút Bộ lọc game (Filter)
    $('.filter').on('click', function () { 
        $('.filter').removeClass('is-active'); 
        $(this).addClass('is-active');
        // (Sau này bạn có thể thêm code Ajax lọc game ở đây)
    });

    // 3. Logic Slider cho khu vực "Game mới phát hành"
    var scrollAmount = 0;
    
    $('.next-btn').on('click', function() {
        var $track = $('.slider-track');
        var cardWidth = $('.slider-track .game-card').outerWidth(true); // Lấy độ rộng card + margin/gap
        var maxScroll = $track[0].scrollWidth - $track.parent().width(); // Tính giới hạn cuộn tối đa

        if (scrollAmount < maxScroll) {
            scrollAmount += cardWidth;
            if(scrollAmount > maxScroll) scrollAmount = maxScroll; // Chặn không cho cuộn lố
            $track.css('transform', 'translateX(-' + scrollAmount + 'px)');
        }
    });

    $('.prev-btn').on('click', function() {
        var $track = $('.slider-track');
        var cardWidth = $('.slider-track .game-card').outerWidth(true);

        if (scrollAmount > 0) {
            scrollAmount -= cardWidth;
            if(scrollAmount < 0) scrollAmount = 0; // Về lại đầu
            $track.css('transform', 'translateX(-' + scrollAmount + 'px)');
        }
    });

});