
const intervalId = setInterval(() => {
    console.log('Sending analytics data...')
},2000);

document.getElementById('stop-analytics-btn').addEventListener('click',() => {
    clearTimeout(intervalId);//To stop the timer.
    //<-------------------Alternative method-------------------->
    //clearInterval(intervalId);
});