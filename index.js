
//Mouse click button detector
var drumButtons= document.querySelectorAll(".drum").length;

for(var i = 0;i<drumButtons;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function () {
    var ButtoninnerHtml = this.innerHTML;

    makeSound(ButtoninnerHtml);
    flashButton(ButtoninnerHtml);
});
}

//  Keyboard Key detector
document.addEventListener("keydown", function(event){

    makeSound(event.key);
    flashButton(event.key);

})


function makeSound(key){
    switch(key){

        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log(ButtoninnerHtml)


    }

}

function flashButton(pressedKey){
        var active_btn = document.querySelector("." + pressedKey);
        active_btn.classList.add("pressed");

        setTimeout(function(){ active_btn.classList.remove("pressed")  },100 );
}