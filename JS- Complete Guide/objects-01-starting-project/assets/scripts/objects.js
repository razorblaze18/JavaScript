// const movieList = document.getElementById('movie-list');

// movieList.style['background-color'] = 'red';
// movieList.style.display = 'block';

// const userChosenKeyName = 'level';

// let person = {
//     'First name': 'Aman',
//     age: 22,
//     hobbies: ['Sports','Cooking'],
//     [userChosenKeyName]:'...',
//     greet: function(){
//         alert('Hi there!')
//     },
//     1.5: 'hello' //-ve numbers not allowed. zero or higher!
// };

// delete person.age;
// person.isAdmin = true;
// // person.age = 31;
// // console.log(person.isAdmin);
// const keyName = 'First name';

// console.log(person[keyName]); 
// console.log(person[1.5]);//If you put 1.5 in inverted commas i.e., '1.5', it will still work because JS coerce the values
// console.log(person);

// //Arrays are object with numbers keys where the order should be guranteed (ascending)!.
"use strict";
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {//by adding an argument 'filter' and assigning a default value, let say an empty string. That measn that by default, this will be an empty string if we don't pass any more specific value.
    const movieList = document.getElementById('movie-list');

    if(movies.length === 0){
        movieList.classList.remove('visible');
        return;
    }else{
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filteredMovies = !filter 
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        // if(!('info' in movie)){//To check whether we that info property in our object or not, with the help of 'in' operator.

        // }
        const {info, ...otherProps} = movie; //Object Destructing.Point at the object you want to where you want to pull something. In this case, Movie. Now between the curly bracket enter the key name which exist in that object on the right, for ex- 'info'.
        console.log(otherProps);//otherProps, it consist of REST parameter ('...'). And this will now collect all properties which you didn't pull out by name and give you the new object with all these collected remaining properties.
        // const {title:movieTitle } = info;
        let {getFormattedTitle} = movie;
        // getFormattedTitle = getFormattedTitle.bind(movie);// Bind prepares the function for future execution, it returns a new function object in the end which we then store here in getFormattedTitle.
        // let text = getFormattedTitle.call(movie) + ' - ';// Call executes the function right away and it can take infinite amount of additional arguement
        let text = getFormattedTitle.apply(movie) + ' - ';// Apply also works like 'call', it also executes the function right away. But, it can take only one additional arguement and that however has to be an ARRAY.
        for(const key in info) {
            if(key !== 'title'){ // keys are string that why we have to write 'title' rather than just writing title.
                text = text + `${key}: ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if(
        title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === '' 
    ){
        return;
    }

    const newMovie = {
        info: {
        title, //If Key name and Value name are same then you can use that. If you hardcoded the value name then you can't use this.
        [extraName]: extraValue// [], used here to assign a dynamic property name.
        },
        id: Math.random().toString(),
        getFormattedTitle() {//Whenever dealing with 'this' keyword. Never use arrow function. Because 'arrow' function, they don't know "this".Every function has its own "this" binding. And, using "this" it will refer to the global window.So using "this" and the arrow function and using this outside the arrow function won't make any change. 
            console.log(this);
            return this.info.title.toUpperCase(); //This keyword, inside of a function, no matter if that function is part of an object or not, the 'this' keyword will refer to whatever called the function, whatever was responsible for executing that function.
        }
    };
    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler.bind());
searchBtn.addEventListener('click', searchMovieHandler);

//Spread Operator in combination with objects