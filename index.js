let drumLength = document.querySelectorAll(".drum").length;

for (let i = 0; i < drumLength; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
       console.log(this.style.color = "white");
    });
}




// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
