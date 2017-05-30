function main() {
    var btn = document.getElementById("start");
    btn.addEventListener("click", game);
}

function game() {
    alert("Welcome to the game!");
    var name = prompt("What is your name");
    alert("Hello " + name + ", welcome to the coolest game of all time");
    alert("This is a quiz game made in like 15 minutes because i am absolutly terrible with this");
    var ansone = prompt("First question, what is the square root of 9");
    if (ansone === "3") {
        alert("You were correct! You can do basic math");
        alert("See? Easy game");
    } else {
        alert("Wow, that one took skill to get wrong");
        alert("You will really struggle with this next one");
        prompt("What is your name? This one should be easy!");
        alert("You even got that one wrong");
    }
    var anstwo = prompt("Second question, what is 7x18?");
    if (anstwo === "126") {
        alert("woah there pal stop showing off");
    } else {
        alert("almost!");
        alert("forgivable that you got that one wrong");
    }
    var ansthree = prompt("Third question, What is your name?");
    if (ansthree === name) {
        alert("good memory");
    } 
    else {
        alert("YOU ARENT THE REAL "+name)
        //window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "suprise", "width=600,height=200");
    }
    var ansfour = prompt("Fourth question, what continent is china in?");
    if (ansfour === "Asia" ||"asia") {
        alert("nice job " + name);
    } else {
        alert("you arent the sharpest lightbulb in the tool shed");
    }
    var ansfive = prompt("Fifth question, what is the population of Manila,Philippines");
    if (ansfive === "12000000" || "12,000,000") {
        alert("lucky guess...");
    } else {
        alert("everyone knows that one come on");
    }
    alert("That took way to long to complete. I can see why you are still in the first grade");
    alert("oh and " + name + " your mother called");
    alert("here are your answers");
    alert("1." + ansone + " 2." + anstwo + " 3." + ansthree + " 4." + ansfour + " 5." + ansfive);
    alert("Thank you for part taking in the demo for this quiz game prototype");
    var x = 0
    if (ansone === "3") {
        var x = x + 1
    }
    console.log(x)
    if (anstwo === "126") {
        var x = x + 1
    }
    console.log(x)
    if (ansthree === name) {
        var x = x + 1
    }
    console.log(x)
    if (ansfour === "Asia" ||"asia") {
        var x = x + 1
    }

    console.log(x)
    if (ansfive === "12000000" || "12,000,000") {
        var x = x + 1
    }
    console.log(x)
    if (x === 5) {
        alert("you got all the questions correct! Congratulations " + name + "!")
    }
    if (x < 5) {
        alert("looks like you missed some!")
        alert("you only got " + x + " right!")
        alert("better luck next time!")
    }
}

window.onload = main;
window.onload = credits;

function credits(){
	var btn2 = document.getElementById("crediter");
    btn2.addEventListener("click", credit);
}
function credit(){
	window.open("credits.html")
}
