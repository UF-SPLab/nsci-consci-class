let data = {};

remark.macros.transferTo = function (name, print = false) {
  let shouldPrint = JSON.parse(print);
  let trimmedValues = this.slice(0, this.length);
  data[name] = JSON.parse(trimmedValues);
  if(data[name] && shouldPrint) {
    return '<p>' + JSON.stringify(data[name]) + '</p>';
  }
};

window.addEventListener('load', function () {
  document.querySelector("#js-data-goes-here").innerHTML = JSON.stringify(data.myList.df, null, 2);
}, false);


