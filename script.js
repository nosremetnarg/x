const body = document.querySelector("body");
const section1 = document.querySelector('.section1')
const openDoor = './openDoor.svg';
const closedDoor = './closedDoorBlack.svg';
const words = document.querySelector('.paragraph');

let doorKnocks = 1;
const doorKnockSound = new Audio('./doorKnock.mp3');
const doorKnock2 = new Audio('./DOOR_052.mp3')
const doorOpenSound = new Audio('./doorOpen.mp3');
const womenLaugh = new Audio("./PEOP_091.mp3");
let isDoorOpen = false;

document.querySelector('.section1').addEventListener('click', function () {
    console.log(`door has been knocked ${doorKnocks} times`);
    if (doorKnocks === 3) {
        isDoorOpen = true;
        body.style.backgroundColor = "black";
        doorOpenSound.play();
        body.style.color = "black";
        section1.style.backgroundColor = "black";
        section1.style.backgroundImage = 'url(./openDoorWhite.svg)';
        section1.style.height = '400px';
        doorKnocks++;
        words.innerHTML = "Enter If You Dare...";
        words.style.color = "white";

    } else if (doorKnocks === 1) {
        doorKnocks++;
        doorKnockSound.play();
        words.innerHTML = "Who is it?"
        isDoorOpen = false;

    } else if (doorKnocks === 2) {
        doorKnocks++;
        words.innerHTML = "Leave me be! I do not like being bothered."
        isDoorOpen = false;
        doorKnock2.play();

    } else if (doorKnocks > 3 ) {
        womenLaugh.play();
        doorKnocks++;
        words.innerHTML = "You've released the Witch! Return her before its too late."
    }
})
