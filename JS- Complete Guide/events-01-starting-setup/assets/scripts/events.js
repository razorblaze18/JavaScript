const button = document.querySelector('button');

// button.onClick = function () {
    
// };

const buttonClickHandler = event => {
    // event.target.disabled = true;//to disable the button.
    console.log(event);
}

const anotherButtonClickHandler = () => {
    console.log('This was clicked');
}

// button.onclick = buttonClickHandler;//It is good to use in smaller projects. One downside, we can only add on handler for this kind of event to this element.
// button.onclick = anotherButtonClickHandler;
//This method is not good at all, here the 1st function will never run. And the reason is that it simply override the value which is stored in the property.

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//     button.removeEventListener('click', buttonClickHandler);
// }, 2000);//Here, 2000 means 2 seconds.

// buttons.forEach(btn => {
//     btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', event => {
//     console.log(event);
// });

const form = document.querySelector('form');

form.addEventListener('submit', () => {
    event.preventDefault();//This stops the default behaviour of the browser, whihc might perform upon such an event. It dosen't applies to click event listeners!!!!!!.
    console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('click', event => {
    console.log('Clicked Div');
    console.log(event);
});// By default it's false, By adding a second arguemet and setting it to 'true', this Div event listener will run first!

button.addEventListener('click', event => {
    event.stopPropagation();//To make sure that button clicks don't trigger the div click listener. So, to make sure that the click event for the button for example dosen't propogate anymore.
    event.stopImmediatePropagation();//If there are multiple event listeners on the same element, after the 1st event listeners ,the other listeners on the same element wound not run anymore.
    console.log('Clicked Button');
    console.log(event);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//             event.target.classList.toggle('highlight');
//         })
// });
//<----------ALTERNATIVE METHOD, more efficient(DELEGATE APPROACH)-------->
 list.addEventListener('click', event => {
                event.target.classList.toggle('highlight');
            });