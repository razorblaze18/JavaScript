window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');//All the div inside the pads.
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d391",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#4618a9",
        "#3ea3d1"
    ];

    //Lets get going with the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;//Reset Time
            sounds[index].play();

            createBubbles(index);
        });
    });

    //Create a function that makes bubbles.
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
    };
});

