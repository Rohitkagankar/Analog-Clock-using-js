//get references to DOM elements
const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second"),
    modeSwitch = document.querySelector(".mode-switch");

//add a click event listener to modeSwitch
modeSwitch.addEventListener("click",() =>{
    //toggle the "dark" class on the body element
    body.classList.toggle("Dark")
})


const updateTime = () =>{
    //get current time and calculate degrees for clock hands
    let date = new Date(),
    secToDeg = (date.getSeconds() / 60)*360;
    minToDeg = (date.getMinutes() / 60)*360;
    hrToDeg = (date.getHours() / 12)*360;

    //rotate the clock hands to the appropriate degree based on the current time
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
}

//call updateTime to set clock hands every second
setInterval(updateTime,1000);
updateTime();