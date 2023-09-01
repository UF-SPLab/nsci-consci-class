let fsize = {};

remark.macros.fontsz = function (name, el_class, size) {
  fsize[el_class] = el_class;
  fsize[size] = size;
  return fsize
}


window.addEventListener('load', function () {
  var elems = document.getElementsByClassName(el_class);
  for(var i = 0; i < elems.length; i++) {
    elems[i].style.fontSize = size;
  }
}, false);
