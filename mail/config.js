// SMTP客户端配置
module.exports = {
  host: "", //网易163邮箱: smtp.163.com， qq邮箱: smtp.qq.com
  port: 465, // 网易邮箱端口：25， qq邮箱端口: 465
  auth: {
    user: "", // 发件人邮箱地址
    pass: "" // 发件人邮箱的授权码
  }
};
