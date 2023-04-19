// document.onkeydown = function (e) {
//   switch (e.key) {
//     case "a":
//       document.getElementById("a").play();
//       break;
//     default:
//       console.log("Клавіши на виявлено!");
//   }
// };

document.onkeydown = function (e) {
  let audioElement = document.getElementById(e.key);
  if (audioElement) {
    audioElement.play();
  } else {
    document.getElementById("msg").innerHTML = "Клавіши на виявлено!";
    console.log("Клавіши на виявлено!");
  }
};
