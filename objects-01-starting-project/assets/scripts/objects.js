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

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = () => {
    const movieList = document.getElementById('movie-list');

    if(movies.length === 0){
        movieList.classList.remove('visible');
        return;
    }else{
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    movies.forEach((movie) => {
        const movieEl = document.createElement('li');
        let text = movie.info.title + ' - ';
        for(const key in movie.info) {
            if(key !== 'title'){
                text = text + `${key}: ${movie.info[key]}`;
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
        [extraName]: extraValue
        },
        id: Math.random()
    };
    movies.push(newMovie);
    renderMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);