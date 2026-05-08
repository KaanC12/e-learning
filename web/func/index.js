const div = document.getElementById("card-container");

var card = document.createElement("div");

card.style.display = "grid";
card.style.gridTemplateRows = "repeat(2, 1fr)";
card.style.width = "16rem";
card.style.height = "18rem";
card.style.border = "1px solid black";
card.style.borderRadius = "1rem"
card.style.backgroundColor = "rgb(48,48,46)"
card.innerHTML = `
<div id="video-style">
    <p id="video-type">Beginner</p>
</div>
<div id="video-exp">
    <div id="content">
        <div id="trend-container">
            <i class="fa-solid fa-fire" id="fire-icon"></i>
            <p id="trend-txt">Trend</p>
        </div>
        <span id="course-titel">Computer Science</span>
    </div>
    <div id="creator">
        <span id="exp">Data Science With Python</span>
        <span id="owner">Kaan Turgut</span>
        <hr id="divisor">
        <div id="evalu">
            <div id="rating-bar">
                <i class="fa-solid fa-star" style="color: white"></i>
                <i class="fa-solid fa-star" style="color: white"></i>
                <i class="fa-solid fa-star" style="color: white"></i>
                <i class="fa-solid fa-star" style="color: white"></i>
                <i class="fa-solid fa-star" style="color: white"></i>
            </div>
            <span id="rating" style="color: white">4.0</span>
            
        </div>
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
videoExp.style.display = "flex";
videoExp.style.flexDirection = "column";
videoExp.style.marginTop = "0";
videoExp.style.gap = "0.5rem";
videoExp.style.gridRow = "2";

var content = document.getElementById("content");
content.style.display = "flex";
content.style.flexDirection = "row";
content.style.gap = "0.5rem";
content.style.marginBottom = "0.5rem";

var trendContainer = document.getElementById("trend-container");
trendContainer.style.display = "flex";
trendContainer.style.justifyContent = "center";
trendContainer.style.alignItems = "center";
trendContainer.style.width = "3.5rem";
trendContainer.style.height = "1.5rem";
trendContainer.style.borderRadius = "0.5rem";
trendContainer.style.backgroundColor = "rgb(248, 236, 232)";
trendContainer.style.gap = "0.2rem";
trendContainer.style.marginLeft = "0.5rem";

var trendText = document.getElementById("trend-txt");
trendText.style.fontSize = "0.7rem";
trendText.style.color = "#E76F51";
trendText.style.margin = "0";

var fireIcon = document.getElementById("fire-icon");
fireIcon.style.color = "#E76F51";

var courseTitel = document.getElementById("course-titel");
courseTitel.style.color = "white";

var creator = document.getElementById("creator");
creator.style.display = "flex";
creator.style.flexDirection = "column";
creator.style.marginLeft = "0.5rem";
creator.style.gap = "0.2rem";


var exp = document.getElementById("exp");
exp.style.color = "white"; 
exp.style.fontSize = "1.2rem";

var owner = document.getElementById("owner");
owner.style.color = "white";

var divisor = document.getElementById("divisor");
divisor.style.width = "90%";

var evalu = document.getElementById("evalu");
evalu.style.display = "flex";
evalu.style.flexDirection = "row";
evalu.style.gap = "0.5rem";