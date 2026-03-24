let allkeys = document.querySelectorAll(".white-key,.black-key");


const sounds = {
  a: new Audio("sounds/a.mp3"),
  s: new Audio("sounds/s.mp3"),
  d: new Audio("sounds/d.mp3"),
  f: new Audio("sounds/f.mp3"),
  g: new Audio("sounds/g.mp3"),
  h: new Audio("sounds/h.mp3"),
  j: new Audio("sounds/j.mp3"),
  k: new Audio("sounds/k.mp3"),
  l: new Audio("sounds/l.mp3"),
  ";": new Audio("sounds/semicolon.mp3"),

  q:new Audio("sounds/q.mp3"),
  e:new Audio("sounds/e.mp3"),
  t:new Audio("sounds/t.mp3"),
  u:new Audio("sounds/U.mp3"),
  o:new Audio("sounds/o.mp3"),
  p:new Audio("sounds/p.mp3"),
  "[":new Audio("sounds/left-bracket.mp3")
};
// console.log(Object.keys(sounds).length)

allkeys.forEach((key) => {
  key.addEventListener("click", () => {
    let letter = key.dataset.key;
    sounds[letter].currentTime = 0  ;
    sounds[letter].play();
  });
});

document.addEventListener("keydown", function (e) {
  let letter = e.key;
  if (sounds[letter]) {
    e.classList.add(".black-key:active")
    sounds[letter].currentTime = 0;
    sounds[letter].play();
  }
});







