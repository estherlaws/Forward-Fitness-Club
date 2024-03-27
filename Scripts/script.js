//Global Variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

//Functions to Display Burpees Example .mp4
function burpees() {
	videoSource.src = "Media/burpees.mp4";
	descriptionSource.src = "Media/burpees-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

//Functions to Display Plank Example .mp4
function plank() {
	videoSource.src = "Media/plank.mp4";
  descriptionSource.src = "Media/plank-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

//Functions to Display Mountain Example .mp4
function mountain() {
	videoSource.src = "Media/mc.mp4";
  descriptionSource.src = "Media/mountain-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

//Function to Display A Promo Code
function discount() {
  var promo = document.getElementById("special");
  promo.firstChild.nodeValue = "Promo Code: D25START";
  promo.style.color = "#FF0000";
  promo.style.fontSize = "2em";
}

//Functions For Hamburger Menu
function hamburger() {
  var menu = document.getElementById("menu-links");
  var logo = document.getElementById("ffc-logo");

  if (menu.style.display === "block") {
    menu.style.display = "none";
    logo.style.display = "block"; // Show logo when menu is closed
  } else {
    menu.style.display = "block";
    logo.style.display = "none"; // Hide logo when menu is open
  }
}