"use strict";
const mailer = require("./../mail/mailer");
const LightRPC = require("./index.js");

var port = 6556;
var rpc = new LightRPC({
  sendMail: function (mailOptions, callback) {
    mailer.send(mailOptions, function (info) {
      callback(info);
    });
  }
});

(async function () {
  rpc.listen(port);
  console.log("RPC应用已启动");
})();
