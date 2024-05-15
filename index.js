let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
     document.querySelectorAll("button")[i].addEventListener("click", function() {
      
     let thisButton = this.innerHTML;
     
     makeSound(thisButton);

    });
}

document.addEventListener("keydown", function(event) {
     makeSound(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "a":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "s":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        
        case "d":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
            
        case "j":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "l":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();    
            break;
            
            default: console.log(thisButton);
                break;
     }
}