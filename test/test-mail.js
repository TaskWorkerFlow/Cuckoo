const template = require("art-template");
const mailer = require("./../mail/mailer");

function getMailTemplate(obj) {
  let html = template(__dirname + "/mail_temp.html", obj);
  return html;
}

var mailTemplate = getMailTemplate({
  tit: "邮件主题",
  content: "邮件正文"
});
// 创建一个邮件对象
var mailOptions = {
  from: "发件人邮箱地址",
  subject: "邮件主题",
  to: "收件人邮箱地址",
  text: mailTemplate
};

mailer.send(mailOptions);
