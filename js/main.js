$(document).ready(function () {
    // Xử lý sự kiện click nút menu 3 gạch (Mobile Toggle) cho tất cả các trang
    $(document).on('click', '.mobile-toggle', function (e) {
        e.preventDefault();
        $('.menu').toggleClass('open');
    });
});
