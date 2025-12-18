// for style
let lightBtn = document.getElementById("changeLightMode");
let root = document.getElementById("mainContainer");
let header = document.getElementById("header");
let themeBtn = document.getElementById("changeLightMode");
let searchBox = document.getElementById("searchBox");
let output = document.getElementById("output");
let statsBox = document.getElementById("statsBox");
let specificStat1 = document.getElementById("specificStat");
let specificStat2 = document.getElementById("specificStat2");
let specificStat3 = document.getElementById("specificStat3");
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let locationDark = document.getElementById("locationDark");
let locationLight = document.getElementById("locationLight");
let twitterDark = document.getElementById("twitterDark");
let twitterLight = document.getElementById("twitterLight");
let chainLight = document.getElementById("chainLight");
let chainDark = document.getElementById("chainDark");
let houseDark = document.getElementById("houseDark");
let houseLight = document.getElementById("houseLight");
// for style and api
let name = document.getElementById("name");
let joinDate = document.getElementById("joinDate");
let info = document.getElementById("info");
// stats
let repos = document.getElementById("repos");
let following = document.getElementById("following");
let followers = document.getElementById("followers");
// location,twitter,blog,handle
let locationElement = document.getElementById("location");
let twitter = document.getElementById("twitter");
let blog = document.getElementById("blog");
let handleElement = document.getElementById("handleElement");

let isDarkMode = true;
changeTheme();

lightBtn.addEventListener("click", function () {
  isDarkMode = !isDarkMode;
  localStorage.setItem("theme", isDarkMode);
  changeTheme();
});

function changeTheme(isDarkMode) {
  if (localStorage.getItem("theme") === "true") {
    // DARKMODE
    document.body.style.backgroundColor = "rgba(20, 29, 47, 1)";
    root.style.backgroundColor = "rgba(20, 29, 47, 1)";
    header.style.color = "white";
    themeBtn.style.color = "white";
    searchBox.style.backgroundColor = "rgba(30, 42, 71, 1)";
    searchBox.style.boxShadow = "";
    output.style.backgroundColor = "rgba(30, 42, 71, 1)";
    output.style.boxShadow = "";
    name.style.color = "rgba(255, 255, 255, 1)";
    joinDate.style.color = "white";
    statsBox.style.backgroundColor = "rgba(20, 29, 47, 1)";
    info.style.color = "white";
    specificStat1.style.color = "white";
    specificStat2.style.color = "white";
    specificStat3.style.color = "white";
    repos.style.color = "white";
    following.style.color = "white";
    followers.style.color = "white";
    locationElement.style.color = "white";
    twitter.style.color = "white";
    blog.style.color = "white";
    handleElement.style.color = "white";
    moon.style.display = "none";
    sun.style.display = "block";
    changeLightMode.innerText = "DARK";
    locationDark.style.display = "block";
    locationLight.style.display = "none";
    twitterDark.style.display = "block";
    twitterLight.style.display = "none";
    chainLight.style.display = "block";
    chainDark.style.display = "none";
    houseLight.style.display = "none";
    houseDark.style.display = "block";
  } else {
    // LIGHTMODE
    document.body.style.backgroundColor = "rgba(246, 248, 255, 1)";
    root.style.backgroundColor = "rgba(246, 248, 255, 1)";
    header.style.color = "rgba(34, 39, 49, 1)";
    themeBtn.style.color = "rgba(105, 124, 154, 1)";
    searchBox.style.backgroundColor = "rgba(254, 254, 254, 1)";
    searchBox.style.boxShadow = "0px 16px 30px rgba(70, 96, 187, 0.1986)";
    output.style.backgroundColor = "rgba(254, 254, 254, 1)";
    output.style.boxShadow = "0px 16px 30px -10px rgba(70, 96, 187, 0.1986)";
    name.style.color = "rgba(43, 52, 66, 1)";
    joinDate.style.color = "rgba(105, 124, 154, 1)";
    statsBox.style.backgroundColor = "rgba(246, 248, 255, 1)";
    info.style.color = "rgba(75, 106, 155, 1)";
    specificStat1.style.color = "rgba(75, 106, 155, 1)";
    specificStat2.style.color = "rgba(75, 106, 155, 1)";
    specificStat3.style.color = "rgba(75, 106, 155, 1)";
    repos.style.color = "rgba(43, 52, 66, 1)";
    following.style.color = "rgba(43, 52, 66, 1)";
    followers.style.color = "rgba(43, 52, 66, 1)";
    locationElement.style.color = "rgba(75, 106, 155, 1)";
    twitter.style.color = "rgba(75, 106, 155, 1)";
    blog.style.color = "rgba(75, 106, 155, 1)";
    handleElement.style.color = "rgba(75, 106, 155, 1)";
    moon.style.display = "block";
    sun.style.display = "none";
    changeLightMode.innerText = "LIGHT";
    locationDark.style.display = "none";
    locationLight.style.display = "block";
    twitterDark.style.display = "none";
    twitterLight.style.display = "block";
    chainLight.style.display = "none";
    chainDark.style.display = "block";
    houseLight.style.display = "block";
    houseDark.style.display = "none";
  }
}
