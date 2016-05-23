var RouteRecognizer = require('../../../../dist/route-recognizer');

var Segments = [
  [
    ":6bG0f03hdXK0KbSyBmUs",
    ":mPxhIznhic1wKQVSRFGP",
    ":mCS0FnerGK61sKvjaQiK",
    ":x0u7geq151TcYKNaba9D",
    ":srZn5fzER8m8z6e1ntE1",
    ":aaKd7vQg2X9Zq0rR6afK",
    ":oJ8WIfFGhjGp11ucVydI",
    ":b27stkgUlrweA3FIniMV",
    ":VxejwfUWW7wjdlxaSrSv",
    ":iGInnXA4itk4UDHvDLca"
  ], [
    ":kGIIprdTnl",
    ":hY1SInvQ6X",
    ":hsy81PFjfh",
    ":oJxtapNdcr",
    ":GExASNp4u8",
    ":5ql59uWsoW",
    ":YANjS34xgG",
    ":pX8Zipj8YL",
    ":mhrPwm7sme",
    ":ZruNEh3Ea2"
  ], [
    ":7gZG1nebWc",
    ":WIuPa29VHO",
    ":VLLXt8Ac8X",
    ":PmFp2H4Z2R",
    ":I2VfsoQCCF",
    ":ZAjpE0DEem",
    ":gZyOJYYSg5",
    ":vv0iWrgPAK",
    ":gt5aB9txF2",
    ":FIHR1n3nLy"
  ]
];

var routes = new Array(1000);

var i, hundreds, tens, ones;
for (i = 0; i < routes.length; i++) {
  hundreds = Math.floor(i/100);
  tens = Math.floor(i/10) - hundreds * 10;
  ones = i % 10;
  routes[i] = "/" + Segments[0][hundreds];
  routes[i] += "/" + Segments[1][tens];
  routes[i] += "/" + Segments[2][ones];
}

var router = new RouteRecognizer();

function add() {
  var i = 1000;

  while (i--) {
    router.add([{ path: routes[i], handler: { handler: i } }]);
  }
}

module.exports = {
  name: 'Add single dynamic routes.',
  fn: add
};
