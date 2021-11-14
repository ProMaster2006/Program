"use strict";

let Number0fFilms ;

function start() {
       Number0fFilms = +prompt('Сколько вы фильмов посмотрели?', '');

      while (Number0fFilms == '' || Number0fFilms ==null || isNaN(Number0fFilms)) {
             Number0fFilms = +prompt('Сколько вы фильмов посмотрели?', '');

      }
}

const PersonalMovieDB = {

  count: Number0fFilms,
  movies:  {
    
  },
  actors: {},
  genres: [],
  privat: false


};





           function rememberFilms() {

            for (let i = 0; i < 2; i++) {
                  const a = prompt('Один из последних просмотрених фильмов', ''),
                        b = prompt('На сколько оценете его?', '');
                        
                        
              
                         if (a != null && b != null  && a !='' && b !='' && a.length < 50) {
                              PersonalMovieDB.movies[a] = b;
                              console.log('done');
                         } else {
                               console.log('error');
                               i--;
                         }

           }
      }
           rememberFilms();



    

    function detectPersonaLevel() {
          
      if (PersonalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
      } else if (PersonalMovieDB.count > 10 && PersonalMovieDB.count < 30) {
            console.log('Вы класический зритель');

      }else if (PersonalMovieDB.count >= 30) {
            console.log('Вы киноман');
      } else {
          console.log('Произошла ошибка');
      }


    }

    console.log(PersonalMovieDB);

    function showmyDB (hidden) {
          if ( !hidden) {
                console.log(PersonalMovieDB);
          } else {
                console.log('error');
          }
    }

    showmyDB(PersonalMovieDB.privat);


    function WriteyourGenres() {
      for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимий фильм под номером ${i}`,);
            PersonalMovieDB.genres[i - 1]= genre;


      }  
    }

    WriteyourGenres();