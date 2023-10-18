"use strict";
var rpc = require("./index.js");
const host = "127.0.0.1";
const port = 6556;

let defaultMailOptions = {
  from: "发件人邮箱地址",
  subject: "邮件主题",
  to: "收件人邮箱地址",
  text: "邮件正文内容"
};
function sendMail(mailOptions = defaultMailOptions) {
  console.log("执行发送邮件");
  rpc.connect(port, host, function (remote, conn) {
    remote.sendMail(mailOptions, function (res) {
      conn.destroy();
      conn.end();
    });
  });
}

module.exports.sendMail = sendMail;
