"use strict";

  const Number0fFilms = +prompt('Сколько вы фильмов посмотрели?', '');

  const PersonalMovieDB = {

    count: Number0fFilms,
    movies:  {
      
    },
    actors: {},
    genres: [],
    privat: false


  };

const a = prompt('Один из последних просмотрених фильмов', ''),
      b = prompt('На сколько оценете его?', ''),
      c = prompt('Один из последних просмотрених фильмов', ''),
      d = prompt('На сколько оценете его?', '');


      PersonalMovieDB.movies[a] = b;
      PersonalMovieDB.movies[c] = d;

      console.log(PersonalMovieDB);