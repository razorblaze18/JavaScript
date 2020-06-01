const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    }, error => {
  
    }, opts);
  });
  return promise;
  };
  

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  }); //A Promise is in the end an object with the functionality or which the idea of having such a then method which you call on it
  return promise;
};

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimer(2000).then(data => {
        console.log(data, posData);
      });//This then attribute works only when the promises resolves.
  }, error => {
    console.log(error);
  }
  );
  setTimer(1000).then(() => {
    console.log('Timer done!');
  })
  console.log('Getting Position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for( let i = 0; i < 100000000 ;i++){
//   result += i;
// }
// console.log(result);

// const greet = () => {
//   console.log('Hi');
// };

// const showAlert = () => {
//   alert('Danger!');
// };

// setTimeout(showAlert, 2000);
// greet();