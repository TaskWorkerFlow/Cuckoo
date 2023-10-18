// 引入 nodemailer
var nodemailer = require('nodemailer');

// 创建一个SMTP客户端配置
var config = require('./config');

// 创建一个SMTP客户端对象
var transporter = nodemailer.createTransport(config);

// 发送邮件
function send(mailOptions, callback) {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('mail sent:', info.response);
    callback(info)
  });
}

module.exports.send = send