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

document.addEventListener("DOMContentLoaded", function() {
            // Xử lý Khung Dropdown Chọn nhân vật
            const charTrigger = document.getElementById('charTrigger');
            const charMenu = document.getElementById('charMenu');
            const charText = document.getElementById('selectedCharText');
            
            charTrigger.addEventListener('click', function(e) {
                e.stopPropagation();
                // Bật tắt menu
                charMenu.style.display = (charMenu.style.display === 'block') ? 'none' : 'block';
            });

            // Khi chọn 1 dòng nhân vật
            document.querySelectorAll('.char-option').forEach(option => {
                option.addEventListener('click', function() {
                    // Cập nhật lại HTML của vùng hiển thị bằng nội dung của option vừa chọn
                    charText.innerHTML = this.innerHTML;
                    charText.style.display = 'flex';
                    charText.style.alignItems = 'center';
                    charText.style.gap = '8px';
                    
                    // Ẩn menu
                    charMenu.style.display = 'none';
                });
            });

            // Click ra ngoài thì đóng Dropdown
            document.addEventListener('click', function(e) {
                if (!document.getElementById('characterDropdown').contains(e.target)) {
                    charMenu.style.display = 'none';
                }
            });
        });

        // Hàm mở Popup Chi tiết bằng Bootstrap Modal
        function openItemDetail(name, price) {
            // Gán dữ liệu vào Modal
            document.getElementById('modalItemName').textContent = name;
            document.getElementById('modalItemPrice').textContent = price.toLocaleString('vi-VN');
            
            // Kích hoạt Modal chuẩn của Bootstrap
            var detailModal = new bootstrap.Modal(document.getElementById('itemDetailModal'));
            detailModal.show();
        }