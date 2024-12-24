const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// 提供静态文件
app.use(express.static(path.join(__dirname, 'public')));

// 解析请求体
app.use(bodyParser.json());

// 根路径，返回首页
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 个人登录接口
app.post('/login/personal', (req, res) => {
    const { name, idCard, password } = req.body;
    if (name && idCard && password) {
        res.json({ message: '个人登录成功' });
    } else {
        res.status(400).json({ message: '个人登录失败，缺少必要的字段' });
    }
});

// 企业登录接口
app.post('/login/business', (req, res) => {
    const { companyId, taxNumber, password } = req.body;
    if (companyId && taxNumber && password) {
        res.json({ message: '企业登录成功' });
    } else {
        res.status(400).json({ message: '企业登录失败，缺少必要的字段' });
    }
});

// 政府登录接口
app.post('/login/government', (req, res) => {
    const { governmentId, authorizationCode, password } = req.body;
    if (governmentId && authorizationCode && password) {
        res.json({ message: '政府登录成功' });
    } else {
        res.status(400).json({ message: '政府登录失败，缺少必要的字段' });
    }
});

// 提交碳报告接口
app.post('/submit-report', (req, res) => {
    const { reportData } = req.body;
    if (reportData) {
        res.json({ message: '碳报告提交成功' });
    } else {
        res.status(400).json({ message: '碳报告提交失败，缺少报告数据' });
    }
});

// 查询碳报告接口
app.get('/query-report', (req, res) => {
    res.json({ message: '查询碳报告成功' });
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
