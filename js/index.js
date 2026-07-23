$(function () {
    // 1. Menu mobile
    $('.mobile-toggle').on('click', function () {
        $('.menu').toggleClass('open')
    });

    // 2. Bộ lọc game
    $('.filter').on('click', function () {
        $('.filter').removeClass('is-active');
        $(this).addClass('is-active')
    })
});

$(document).ready(function () {
    var currentIndex = 0;
    var realTotal = 5;
    var slideInterval;

    // Dữ liệu nội dung chi tiết cho từng game/banner tương ứng (từ index 0 đến 4)
    var gameData = [
        {
            logo: "images/hktq.png",
            desc: "HÀO KHÍ TAM QUỐC – Tựa game chiến thuật đỉnh cao, thỏa chí vẫy vùng trận mạc.<br>Tham gia ngay để nhận quà tân thủ cực khủng!",
            link: "chi-tiet-game1.html"
        },
        {
            logo: "images/hkch.png",
            desc: "HÀO KHÍ CHIẾN HỒN – Siêu phẩm kiếm hiệp mobile PK rực lửa nay đã chính thức ra mắt.<br>Tải game miễn phí và chinh chiến ngay hôm nay!",
            link: "chi-tiet-game2.html"
        },
        {
            logo: "images/logogame3.png",
            desc: "BOOM TANK – Trận chiến xe tăng gay cấn, đồ họa cực đỉnh.<br>Hợp sức cùng đồng đội đánh bay mọi đối thủ!",
            link: "chi-tiet-game3.html"
        },
        {
            logo: "images/hkdh.png",
            desc: "HÀO KHÍ DU HIỆP – Thế giới võ lâm cổ điển chân thực và sống động nhất.<br>Hành tẩu giang hồ, kết bái huynh đệ.",
            link: "chi-tiet-game4.html"
        },
        {
            logo: "images/boom.png",
            desc: "GAME MỚI CẬP NHẬP – Khám phá ngay những tính năng độc quyền và phần quà hấp dẫn.<br>Chơi ngay kẻo lỡ!",
            link: "chi-tiet-game5.html"
        }
    ];

    function goToSlide(index, withTransition = true) {
        currentIndex = index;

        // 1. Chuyển banner lớn
        $('.banner-slide').removeClass('active');
        $('.banner-slide').eq(currentIndex).addClass('active');

        // 2. Cập nhật Logo, mô tả và nút Xem thêm tương ứng
        if (gameData[currentIndex]) {
            $('#heroLogo').attr('src', gameData[currentIndex].logo);
            $('#heroDesc').html(gameData[currentIndex].desc);
            $('#heroBtn').attr('href', gameData[currentIndex].link);
        }

        // 3. Gán class active cho ảnh nhỏ tương ứng (kể cả bản clone)
        $('.thumb-game').removeClass('active');
        $('.thumb-game').each(function () {
            if (parseInt($(this).attr('data-index')) === currentIndex) {
                $(this).addClass('active');
            }
        });

        // 4. TÍNH TOÁN DỊCH CHUYỂN CHUẨN XÁC THEO INDEX (Đảm bảo luôn nằm chính giữa tuyệt đối)
        var $container = $('.slider-dots-container');
        var containerWidth = $container.width();

        var $activeImg = $('.slider-dots .thumb-game:not(.clone)').filter(function () {
            return parseInt($(this).attr('data-index')) === currentIndex;
        });

        if ($activeImg.length) {
            // Lấy trực tiếp vị trí left và outerWidth thực tế (dùng offsetLeft/offsetWidth để tránh bị ảnh hưởng bởi CSS Translate và transition animation)
            var imgLeft = $activeImg[0].offsetLeft;
            var imgWidth = $activeImg[0].offsetWidth;

            // Tính toán vị trí dịch chuyển để tâm ảnh active trùng với tâm container
            var newTransformX = (containerWidth / 2) - (imgLeft + imgWidth / 2);

            if (!withTransition) {
                $('.slider-dots').css('transition', 'none');
            } else {
                $('.slider-dots').css('transition', 'transform 0.5s ease-in-out');
            }
            $('.slider-dots').css('transform', 'translateX(' + newTransformX + 'px)');
        }
    }

    // Xử lý khi click vào ảnh nhỏ bất kỳ
    $('.thumb-game').on('click', function () {
        var index = parseInt($(this).attr('data-index'));
        goToSlide(index);
        resetTimer();
    });

    // Tự động chuyển slide từ phải sang trái
    function startSlider() {
        slideInterval = setInterval(function () {
            currentIndex = (currentIndex + 1) % realTotal;
            goToSlide(currentIndex);
        }, 4000);
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    function resetTimer() {
        stopSlider();
        startSlider();
    }

    $('.hero').hover(
        function () { stopSlider(); },
        function () { startSlider(); }
    );

    // Khởi chạy lần đầu tiên
    goToSlide(0, false);
    startSlider();
});