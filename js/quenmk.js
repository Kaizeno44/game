document.addEventListener("DOMContentLoaded", function() {
            const radioEmail = document.getElementById('methodEmail');
            const radioPhone = document.getElementById('methodPhone');
            
            const inputEmail = document.getElementById('inputEmail');
            const selectPhoneCode = document.getElementById('selectPhoneCode');
            const inputPhone = document.getElementById('inputPhone');

            const emailRow = document.getElementById('emailRow');
            const phoneRow = document.getElementById('phoneRow');

            function updateInputs() {
                if (radioEmail.checked) {
                    // Mở khóa ô Email
                    inputEmail.disabled = false;
                    inputEmail.style.backgroundColor = '#fff';
                    inputEmail.style.color = '#333';

                    // Khóa ô Số điện thoại
                    selectPhoneCode.disabled = true;
                    selectPhoneCode.style.backgroundColor = '#f1f3f5';
                    selectPhoneCode.style.color = '#888';
                    inputPhone.disabled = true;
                    inputPhone.style.backgroundColor = '#f1f3f5';
                    inputPhone.style.color = '#888';
                } else {
                    // Khóa ô Email
                    inputEmail.disabled = true;
                    inputEmail.style.backgroundColor = '#f1f3f5';
                    inputEmail.style.color = '#888';

                    // Mở khóa ô Số điện thoại
                    selectPhoneCode.disabled = false;
                    selectPhoneCode.style.backgroundColor = '#fff';
                    selectPhoneCode.style.color = '#333';
                    inputPhone.disabled = false;
                    inputPhone.style.backgroundColor = '#fff';
                    inputPhone.style.color = '#333';
                }
            }

            // Gọi hàm ngay khi tải trang
            updateInputs();

            // Bắt sự kiện khi click trực tiếp vào nút radio
            radioEmail.addEventListener('change', updateInputs);
            radioPhone.addEventListener('change', updateInputs);

            // Bắt sự kiện khi click vào toàn bộ khu vực của hàng (giúp người dùng dễ click hơn)
            emailRow.addEventListener('click', function() {
                if (!radioEmail.checked) {
                    radioEmail.checked = true;
                    updateInputs();
                    inputEmail.focus(); // Tự động focus vào ô nhập
                }
            });

            phoneRow.addEventListener('click', function() {
                if (!radioPhone.checked) {
                    radioPhone.checked = true;
                    updateInputs();
                    inputPhone.focus(); // Tự động focus vào ô nhập
                }
            });
        });

document.addEventListener("DOMContentLoaded", function() {
            let timeLeft = 40;
            const timerDisplay = document.getElementById("timerDisplay");

            const countdownInterval = setInterval(function() {
                timeLeft--;
                timerDisplay.textContent = timeLeft + "s";

                if (timeLeft <= 0) {
                    clearInterval(countdownInterval);
                    timerDisplay.textContent = "Gửi lại mã";
                    timerDisplay.style.cursor = "pointer";
                    timerDisplay.style.textDecoration = "underline";
                    
                    // Thêm sự kiện click để reset đồng hồ khi nhấn "Gửi lại mã"
                    timerDisplay.addEventListener("click", function resetTimer() {
                        timeLeft = 40;
                        timerDisplay.style.cursor = "default";
                        timerDisplay.style.textDecoration = "none";
                        timerDisplay.removeEventListener("click", resetTimer);
                        
                        // Chạy lại đếm ngược
                        const newInterval = setInterval(function() {
                            timeLeft--;
                            timerDisplay.textContent = timeLeft + "s";
                            if (timeLeft <= 0) {
                                clearInterval(newInterval);
                                timerDisplay.textContent = "Gửi lại mã";
                                timerDisplay.style.cursor = "pointer";
                                timerDisplay.style.textDecoration = "underline";
                                timerDisplay.addEventListener("click", resetTimer);
                            }
                        }, 1000);
                    }, { once: true });
                }
            }, 1000);
        });
document.addEventListener("DOMContentLoaded", function() {
            const toggleButtons = document.querySelectorAll('.toggle-password');
            
            toggleButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const inputSelector = this.getAttribute('toggle');
                    const input = document.querySelector(inputSelector);
                    const iconEl = this.querySelector('i');
                    
                    if (input.getAttribute('type') === 'password') {
                        input.setAttribute('type', 'text');
                        iconEl.classList.remove('bi-eye');
                        iconEl.classList.add('bi-eye-slash'); // Đổi sang mắt gạch chéo
                    } else {
                        input.setAttribute('type', 'password');
                        iconEl.classList.remove('bi-eye-slash');
                        iconEl.classList.add('bi-eye'); // Đổi về mắt mở
                    }
                });
            });
        });