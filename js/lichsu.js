document.addEventListener("DOMContentLoaded", function() {
    // 1. Xử lý menu toggle mobile
    $('.mobile-toggle').on('click', function(e) {
        e.preventDefault();
        $('.menu').toggleClass('open');
    });

    // 2. Xử lý custom dropdown chọn game (Hiển thị cả ảnh và chữ)
    const dropdownWrap = document.querySelector('.custom-game-dropdown');
    if (dropdownWrap) {
        const toggleBox = dropdownWrap.querySelector('.dropdown-toggle-box');
        const menu = dropdownWrap.querySelector('.dropdown-menu-custom');
        const selectedText = dropdownWrap.querySelector('.selected-game-text');
        const options = dropdownWrap.querySelectorAll('.game-option');

        toggleBox.addEventListener('click', function(e) {
            e.stopPropagation();
            if (menu.style.display === 'none' || menu.style.display === '') {
                menu.style.display = 'block';
            } else {
                menu.style.display = 'none';
            }
        });

        options.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Lấy toàn bộ HTML bên trong mục được chọn (bao gồm ảnh/icon và thẻ span chứa chữ)
                const contentHTML = this.innerHTML;
                
                // Gán cả ảnh và chữ vào ô hiển thị
                selectedText.innerHTML = contentHTML;
                
                // Thêm class flex để ảnh và chữ xếp hàng ngang, cách nhau ra một chút cho đẹp
                selectedText.classList.add('d-flex', 'align-items-center', 'gap-2');
                selectedText.style.color = '#212529';
                
                // Đóng menu sau khi chọn
                menu.style.display = 'none';
            });
        });

        // Bấm ra ngoài vùng dropdown thì tự đóng menu
        document.addEventListener('click', function(e) {
            if (!dropdownWrap.contains(e.target)) {
                menu.style.display = 'none';
            }
        });
    }

    // 3. Kích hoạt Flatpickr và xử lý click vào icon lịch
    const fpStart = flatpickr("input[placeholder='Ngày bắt đầu']", {
        dateFormat: "d/m/Y",
        allowInput: true
    });

    const fpEnd = flatpickr("input[placeholder='Ngày kết thúc']", {
        dateFormat: "d/m/Y",
        allowInput: true
    });

    // Cho phép nhấn vào icon lịch bên phải để mở popup chọn ngày
    document.querySelectorAll('.input-group').forEach(group => {
        const input = group.querySelector('input');
        const icon = group.querySelector('.input-group-text');
        
        // Kiểm tra nếu có icon, có input và input đó đã được gắn flatpickr
        if (icon && input && input._flatpickr) {
            icon.style.cursor = 'pointer'; // Đổi con trỏ thành hình bàn tay để báo hiệu có thể click
            icon.addEventListener('click', function() {
                input._flatpickr.open(); // Mở bảng lịch tương ứng với input đó
            });
        }
    });
});