let glareBox = document.querySelector("#flip");
VanillaTilt.init(glareBox);

function flipCard(number) {
  glareBox.vanillaTilt.glarePause = true;

  var glare = document.getElementById("js-tilt-glare-inner");
  var flip = document.getElementById("flip");
  var element = document.getElementsByClassName("card");

  if (!element[number].classList.contains("flipped"))
	element[number].classList.add("flipped");
  else if (element[number].classList.contains("flipped"))
	element[number].classList.remove("flipped");
  glare.style.opacity = "0";
  setTimeout(function() {
	glareBox.vanillaTilt.glarePause = false;
  }, 1000);
}

function returnCard(number) {
  var element = document.getElementsByClassName("card");
  element[number].classList.remove("flipped");

  VanillaTilt.init(glareBox);
}

const card = document.querySelector("#card");
const av = document.querySelector("#avatar-icon");
const name = document.querySelector("#name");
const role = document.querySelector("#role");
const email = document.querySelector("#email");
card.addEventListener("mousemove", e => {
  av.style.backgroundPositionX = -e.offsetX + "px";
  av.style.backgroundPositionY = -e.offsetY + "px";

  name.style.backgroundPositionX = -e.offsetX + "px";
  name.style.backgroundPositionY = -e.offsetY + "px";

  role.style.backgroundPositionX = -e.offsetX + "px";
  role.style.backgroundPositionY = -e.offsetY + "px";

  email.style.backgroundPositionX = -e.offsetX + "px";
  email.style.backgroundPositionY = -e.offsetY + "px";

  facebook.style.backgroundPositionX = -e.offsetX + "px";
  facebook.style.backgroundPositionY = -e.offsetY + "px";

  linkedin.style.backgroundPositionX = -e.offsetX + "px";
  linkedin.style.backgroundPositionY = -e.offsetY + "px";

  twitter.style.backgroundPositionX = -e.offsetX + "px";
  twitter.style.backgroundPositionY = -e.offsetY + "px";

  website.style.backgroundPositionX = -e.offsetX + "px";
  website.style.backgroundPositionY = -e.offsetY + "px";
});

// const el1 = document.querySelector("#name");
// el1.addEventListener("mousemove", (e) => {
//   el1.style.backgroundPositionX = -e.offsetX + "px";
//   el1.style.backgroundPositionY = -e.offsetY + "px";
// });
// const el2 = document.querySelector("#role");
// el2.addEventListener("mousemove", (e) => {
//   el2.style.backgroundPositionX = -e.offsetX + "px";
//   el2.style.backgroundPositionY = -e.offsetY + "px";
// });

function toggle() {
  var face = document.getElementsByClassName("face");
  var back = document.getElementsByClassName("back");
  for (i = 0; i < face.length; i++) {
	if (
	  face[i].classList.contains("shadow") &&
	  back[i].classList.contains("shadow")
	) {
	  document.body.style.backgroundColor = "rgb(17, 17, 17)";
	  face[i].classList.remove("shadow");
	  face[i].classList.add("shadow-light");
	  back[i].classList.remove("shadow");
	  back[i].classList.add("shadow-light");
	} else if (
	  face[i].classList.contains("shadow-light") &&
	  back[i].classList.contains("shadow-light")
	) {
	  document.body.style.backgroundColor = "rgb(71, 71, 71)";
	  face[i].classList.remove("shadow-light");
	  face[i].classList.add("shadow");
	  back[i].classList.remove("shadow-light");
	  back[i].classList.add("shadow");
	}
  }
}

function changecolor() {
  var tags = ["silver-text", "black-text", "gold-text", "blue-text"];
  var items = document.getElementsByClassName("card-engrave");

  var value = parseInt(document.getElementById("color").value, 4);
  value = isNaN(value) ? 0 : value;
  if (value == 3) {
	document.getElementById("name").classList.remove(tags[tags.length - 1]);
	document.getElementById("role").classList.remove(tags[tags.length - 1]);
	document.getElementById("email").classList.remove(tags[tags.length - 1]);
	document
	  .getElementById("avatar-icon")
	  .classList.remove(tags[tags.length - 1]);
	document.getElementById("facebook").classList.remove(tags[tags.length - 1]);
	document.getElementById("linkedin").classList.remove(tags[tags.length - 1]);
	document.getElementById("twitter").classList.remove(tags[tags.length - 1]);
	document.getElementById("website").classList.remove(tags[tags.length - 1]);

	document.getElementById("name").classList.add(tags[0]);
	document.getElementById("role").classList.add(tags[0]);
	document.getElementById("email").classList.add(tags[0]);
	document.getElementById("avatar-icon").classList.add(tags[0]);
	document.getElementById("facebook").classList.add(tags[0]);
	document.getElementById("linkedin").classList.add(tags[0]);
	document.getElementById("twitter").classList.add(tags[0]);
	document.getElementById("website").classList.add(tags[0]);
  } else {
	document.getElementById("name").classList.remove(tags[value]);
	document.getElementById("role").classList.remove(tags[value]);
	document.getElementById("email").classList.remove(tags[value]);
	document.getElementById("avatar-icon").classList.remove(tags[value]);
	document.getElementById("facebook").classList.remove(tags[value]);
	document.getElementById("linkedin").classList.remove(tags[value]);
	document.getElementById("twitter").classList.remove(tags[value]);
	document.getElementById("website").classList.remove(tags[value]);

	document.getElementById("name").classList.add(tags[value + 1]);
	document.getElementById("role").classList.add(tags[value + 1]);
	document.getElementById("email").classList.add(tags[value + 1]);
	document.getElementById("avatar-icon").classList.add(tags[value + 1]);
	document.getElementById("facebook").classList.add(tags[value + 1]);
	document.getElementById("linkedin").classList.add(tags[value + 1]);
	document.getElementById("twitter").classList.add(tags[value + 1]);
	document.getElementById("website").classList.add(tags[value + 1]);
  }

  value++;
  document.getElementById("color").value = value;
}
