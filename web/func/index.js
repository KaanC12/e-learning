const div = document.getElementById("card-container");

var card = document.createElement("div");

card.style.display = "grid";
card.style.gridTemplateRows = "repeat(2, 1fr)";
card.style.width = "12rem";
card.style.height = "15rem";
card.style.border = "1px solid black";
card.style.borderRadius = "1rem"
card.style.backgroundColor = "rgb(48,48,46)"
card.innerHTML = `
<div id="video-style">
    <p id="video-type">Beginner</p>
</div>
<div id="video-exp">
    <div id="trend-container">
        <p id="trend-txt">Trend<p>
    </div>
</div>
`;

div.appendChild(card);

var videoStyleContainer = document.getElementById("video-style");
videoStyleContainer.style.gridRow = "1";
videoStyleContainer.style.display = "flex";
videoStyleContainer.style.flexDirection = "column";
videoStyleContainer.style.justifyContent = "center";
videoStyleContainer.style.alignItems = "center";

videoStyleContainer.style.height = "1.5rem";
videoStyleContainer.style.width = "3.5rem";
videoStyleContainer.style.margin = "0.5rem";
videoStyleContainer.style.border = "1px solid black";
videoStyleContainer.style.borderRadius = "0.5rem";

videoStyleContainer.style.backgroundColor = "rgb(229,244,234)";


var videoStyle = document.getElementById("video-type");
videoStyle.style.fontSize = "0.7rem";
videoStyle.style.color = "rgb(34,79,66)"

var videoExp = document.getElementById("video-exp");
videoExp.style.gridRow = "2";

var trendContainer = document.getElementById("trend-container");
trendContainer.style.display = "flex";
trendContainer.style.flexDirection = "column";
trendContainer.style.justifyContent = "center";
trendContainer.style.alignItems = "center";
trendContainer.style.width = "3.5rem";
trendContainer.style.height = "1.5rem";
trendContainer.style.borderRadius = "0.5rem";
trendContainer.style.backgroundColor = "rgb(248, 236, 232)";



