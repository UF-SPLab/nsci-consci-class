/* change font; div; svg for d3; random image; set float; set background effects; add iframe;*/

remark.macros.hello = function () {
  return 'hello, world!';
};

remark.macros.image = function(w, a) {
  var url = this;
  if (!a) a = 'image';
  return '<img src="' + url + '" style="width: ' + w + ';" alt="' + a + '" />';
};

remark.macros.scale = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};


remark.macros.color = function (color) {
  return '<span style="color:' + color + '">' + this + '</span>'
};

remark.macros.textal = function (textal) {
  return '<span style="text-align:' + textal + '">' + this + '</span>'
};

remark.macros.hline = function (hline) {
  return "<html><div style='float:left'></div><hr color='#EB811B' size=1px width=720px></html>"
};


remark.macros.emoji = function (emoji) {
  return '<i class="em-svg em-' + emoji + '"></i>'
};

remark.macros.danger_em = function (danger_em) {
  return '<i class="em em-' + "![:random biohazard_sign, radioactive_sign, fire, lightning, zap, warning, skull_and_crossbones, no_entry_sign, scream]" + '"></i>'
};

remark.macros.cheer_em = function (cheer_em) {
  return '<i class="em em-' + "![:random 100, trophy, sunglasses, doughnut, cookie, gem, gift, star]" + '"></i>'
};

remark.macros.random = function () {
  // params are passed as function arguments: ["one", "of", "these", "words"]
  var i = Math.floor(Math.random() * arguments.length);
  return arguments[i];
};

remark.macros.upper = function () {
  // `this` is the value in the parenthesis, or undefined if left out
  return this.toUpperCase()
};

remark.macros.addupper = function () {
  return "![:upper](word)";
};

remark.macros.lower = function () {
  // `this` is the value in the parenthesis, or undefined if left out
  return this.toLowerCase()
};
