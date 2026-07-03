window.createLink = function(text, path) {
  var a = document.createElement("a");
  var div = document.getElementById("links");
  a.href = path
  a.innerHTML = "Goto " + text,
  a.id = text
  a.style="color:#00ffff;"
  div.appendChild(a)
  div.appendChild(document.createElement("br"))
};