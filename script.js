document.addEventListener('DOMContentLoaded', function () {
    // 个人登录表单提交事件
    const personalLoginForm = document.getElementById('personalLoginForm');
    if (personalLoginForm) {
        personalLoginForm.addEventListener('submit', function (event) {
            event.preventDefault();  // 阻止表单的默认提交行为

            const name = document.getElementById('name').value;
            const idCard = document.getElementById('idCard').value;
            const password = document.getElementById('password').value;

            fetch('/login/personal', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, idCard, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.message === '个人登录成功') {
                    window.location.href = 'user-center.html';  // 登录成功，跳转到用户中心页面
                } else {
                    alert('登录失败');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('请求失败，请稍后再试');
            });
        });
    }

    // 企业登录表单提交事件
    const businessLoginForm = document.getElementById('businessLoginForm');
    if (businessLoginForm) {
        businessLoginForm.addEventListener('submit', function (event) {
            event.preventDefault();  // 阻止表单的默认提交行为

            const companyId = document.getElementById('companyId').value;
            const taxNumber = document.getElementById('taxNumber').value;
            const password = document.getElementById('password').value;

            fetch('/login/business', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ companyId, taxNumber, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.message === '企业登录成功') {
                    window.location.href = 'user-center.html';  // 登录成功，跳转到用户中心页面
                } else {
                    alert('登录失败');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('请求失败，请稍后再试');
            });
        });
    }

    // 政府登录表单提交事件
    const governmentLoginForm = document.getElementById('governmentLoginForm');
    if (governmentLoginForm) {
        governmentLoginForm.addEventListener('submit', function (event) {
            event.preventDefault();  // 阻止表单的默认提交行为

            const governmentId = document.getElementById('governmentId').value;
            const authorizationCode = document.getElementById('authorizationCode').value;
            const password = document.getElementById('password').value;

            fetch('/login/government', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ governmentId, authorizationCode, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.message === '政府登录成功') {
                    window.location.href = 'user-center.html';  // 登录成功，跳转到用户中心页面
                } else {
                    alert('登录失败');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('请求失败，请稍后再试');
            });
        });
    }
});
