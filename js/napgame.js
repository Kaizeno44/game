$(document).ready(function () { 

    // 1. Menu Mobile Toggle
    $('.mobile-toggle').on('click', function () { 
        $('.menu').toggleClass('open');
    }); 
    
    // 2. Logic cho nút Bộ lọc (Tất Cả, Action, RPG...)
    $('.filter').on('click', function () { 
        $('.filter').removeClass('is-active'); 
        $(this).addClass('is-active');
    });

    // 3. Logic chuyển đổi dấu chấm phân trang (Pagination Dots)
    $('.pagination-dots .dot').on('click', function() {
        // Xóa class active ở tất cả các chấm
        $('.pagination-dots .dot').removeClass('active');
        // Thêm class active cho chấm vừa click
        $(this).addClass('active');
        
        // (Lưu ý: Sau này bạn có thể kết nối phần này với Ajax để load thêm game)
    });

});