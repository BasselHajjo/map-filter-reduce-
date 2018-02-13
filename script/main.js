<<<<<<< HEAD
let numbers = [1,2,3,4];
let oddNumbers = numbers.filter(x => x%2 != 0).map(x => x * 2);
//console.log(oddNumbers);

/*XMLHttpRequest*/

function fetchJsonData(url, callBackFunction) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', function() {
        callBackFunction(JSON.parse(request.responseText));
    });

    request.open('get', url);
    request.send();
}

const moviesLink = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
const goodMovies = document.querySelector("#good");
const averageMovies = document.querySelector("#average");
const badMovies = document.querySelector("#bad");
const totalAverage = document.querySelector("#total_average");
const goodMoviesCount = document.querySelector("#goodMoviesCount");
const averageMoviesCount = document.querySelector("#averageMoviesCount");
const badMoviesCount = document.querySelector("#badMoviesCount");
const specialMovies = document.querySelector("#specialMovies");
const oldMovies = document.querySelector("#oldMovies");
const resultHolder = document.querySelector("ul");

function moviesRatings(movies){
    console.log(movies);
    
/*Give each movie a tag: Good (>=7), Average (4-6), Bad (0-3) based on the ratings*/
    
    goodMovies.addEventListener("click",function(){
        resultHolder.innerHTML = "";
       resultRatingMovies(movies,7,10);
    });
    
    averageMovies.addEventListener("click",function(){
        resultHolder.innerHTML = "";
       resultRatingMovies(movies,4,6);
    });
    
    badMovies.addEventListener("click",function(){
        resultHolder.innerHTML = "";
       resultRatingMovies(movies,0,3);
    });
    
/*Calculate the average rating of all the movies*/
        
        totalAverage.addEventListener("click",function(){
        resultHolder.innerHTML = "";
        let rating = 0;
        let result = movies.map((x) => {
           rating += x.rating / movies.length;
        })
        const totalReating = document.createElement("h3");
       resultHolder.appendChild(totalReating);
       totalReating.innerHTML = "The total movies average is " + rating.toFixed(2);
    });
    
/*Count the total number of Good, Average and Bad movies.*/
    
    goodMoviesCount.addEventListener("click",function(){
        resultHolder.innerHTML = "";
        let goodMoviesCountValue = 0;
        movies.reduce((x,y) => {
            return goodMoviesCountValue = x + (y.rating >= 7);        
        },0);
            const goodResult = document.createElement("h3");
            resultHolder.appendChild(goodResult);
            goodResult.innerHTML = "The good movies count is: " + goodMoviesCountValue;
        });
    
    averageMoviesCount.addEventListener('click',function(){
        resultHolder.innerHTML = "";
        let averageMoviesCountValue = 0;
        let badMoviesCountValue = 0;
        movies.reduce((x,y) => {
           return averageMoviesCountValue = x + (y.rating >= 4 && y.rating <7);
        },0);
        const averageResult = document.createElement("h3");
        resultHolder.appendChild(averageResult);
        averageResult.innerHTML = "The average movies count is: " + averageMoviesCountValue;
    });
    
    badMoviesCount.addEventListener('click',function(){
        resultHolder.innerHTML = "";
        let badMoviesCountValue = 0;
        movies.reduce((x,y) => {
            return badMoviesCountValue = x + (y.rating < 4);
        },0);
        const badResult = document.createElement("h3");
        resultHolder.appendChild(badResult);
        badResult.innerHTML = "The bad movies count is: " + badMoviesCountValue;
    });
        
/*Count he number of movies containing the following keywords: ["The", "dog", "who", "is", "not", "a", "man"].*/
    
    specialMovies.addEventListener('click',function(){
        resultHolder.innerHTML = "";
        const keyWords = ["The", "dog", "who", "is", "not", "a", "man"];
        let result = movies.map((x) => {
            for(let i = 0; i<keyWords.length;i++){
                if(keyWords[i] === x.title){
                }
            }
        });
        const containing = document.createElement("h3");
        resultHolder.appendChild(containing);
        containing.innerHTML = "The number of movies containe the givin words is: " + result.length;
    });
    
    
    
/*Can you make sure the search is case insensitive?*/
    
    
    
/*Count the number of movies made between 1980-1989 (including both the years).*/
    
    oldMovies.addEventListener('click',function(){
        resultHolder.innerHTML="";
        let oldMoviesCount = 0;
        movies.reduce((x,y) => {
            return oldMoviesCount = x + (y.year >= 1980 && y.year <= 1989);
        },0);
        const oldMovie = document.createElement("h3");
        resultHolder.appendChild(oldMovie);
        oldMovie.innerHTML = "The number of movies that was made between 1980 & 1989 is: " + oldMoviesCount;
    })
    
    
};

fetchJsonData(moviesLink,moviesRatings);



function resultRatingMovies(jsonFile,a,b){
    const result = jsonFile.filter((x) => {
           return x.rating >= a && x.rating <=b;
       }).map((z)=>{
           const movie = document.createElement("li");
           resultHolder.appendChild(movie);
           movie.innerHTML = z.title;
        });
=======
let numbers = [1,2,3,4];
let oddNumbers = numbers.filter(x => x%2 != 0).map(x => x * 2);
//console.log(oddNumbers);

/*XMLHttpRequest*/

function fetchJsonData(url, callBackFunction) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', function() {
        callBackFunction(JSON.parse(request.responseText));
    });

    request.open('get', url);
    request.send();
}

const moviesLink = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
const goodMovies = document.querySelector("#good");
const averageMovies = document.querySelector("#average");
const badMovies = document.querySelector("#bad");
const totalAverage = document.querySelector("#total_average");
const goodMoviesCount = document.querySelector("#goodMoviesCount");
const averageMoviesCount = document.querySelector("#averageMoviesCount");
const badMoviesCount = document.querySelector("#badMoviesCount");
const specialMovies = document.querySelector("#specialMovies");
const oldMovies = document.querySelector("#oldMovies");
const resultHolder = document.querySelector("ul");

function moviesRatings(movies){
    console.log(movies);
    
/*Give each movie a tag: Good (>=7), Average (4-6), Bad (0-3) based on the ratings*/
    
    goodMovies.addEventListener("click",function(){
        resultHolder.innerHTML = "";
       resultRatingMovies(movies,7,10);
    });
    
    averageMovies.addEventListener("click",function(){
        resultHolder.innerHTML = "";
       resultRatingMovies(movies,4,6);
    });
    
    badMovies.addEventListener("click",function(){
        resultHolder.innerHTML = "";
       resultRatingMovies(movies,0,3);
    });
    
/*Calculate the average rating of all the movies*/
        
        totalAverage.addEventListener("click",function(){
        resultHolder.innerHTML = "";
        let rating = 0;
        let result = movies.map((x) => {
           rating += x.rating / movies.length;
        })
        const totalReating = document.createElement("h3");
       resultHolder.appendChild(totalReating);
       totalReating.innerHTML = "The total movies average is " + rating.toFixed(2);
    });
    
/*Count the total number of Good, Average and Bad movies.*/
    
    goodMoviesCount.addEventListener("click",function(){
        resultHolder.innerHTML = "";
        let goodMoviesCountValue = 0;
        movies.reduce((x,y) => {
            return goodMoviesCountValue = x + (y.rating >= 7);        
        },0);
            const goodResult = document.createElement("h3");
            resultHolder.appendChild(goodResult);
            goodResult.innerHTML = "The good movies count is: " + goodMoviesCountValue;
        });
    
    averageMoviesCount.addEventListener('click',function(){
        resultHolder.innerHTML = "";
        let averageMoviesCountValue = 0;
        let badMoviesCountValue = 0;
        movies.reduce((x,y) => {
           return averageMoviesCountValue = x + (y.rating >= 4 && y.rating <7);
        },0);
        const averageResult = document.createElement("h3");
        resultHolder.appendChild(averageResult);
        averageResult.innerHTML = "The average movies count is: " + averageMoviesCountValue;
    });
    
    badMoviesCount.addEventListener('click',function(){
        resultHolder.innerHTML = "";
        let badMoviesCountValue = 0;
        movies.reduce((x,y) => {
            return badMoviesCountValue = x + (y.rating < 4);
        },0);
        const badResult = document.createElement("h3");
        resultHolder.appendChild(badResult);
        badResult.innerHTML = "The bad movies count is: " + badMoviesCountValue;
    });
        
/*Count he number of movies containing the following keywords: ["The", "dog", "who", "is", "not", "a", "man"].*/
    
    specialMovies.addEventListener('click',function(){
        resultHolder.innerHTML = "";
        const keyWords = ["The", "dog", "who", "is", "not", "a", "man"];
        let result = movies.map((x) => {
            for(let i = 0; i<keyWords.length;i++){
                if(keyWords[i] === x.title){
                }
            }
        });
        const containing = document.createElement("h3");
        resultHolder.appendChild(containing);
        containing.innerHTML = "The number of movies containe the givin words is: " + result.length;
    });
    
    
    
/*Can you make sure the search is case insensitive?*/
    
    
    
/*Count the number of movies made between 1980-1989 (including both the years).*/
    
    oldMovies.addEventListener('click',function(){
        resultHolder.innerHTML="";
        let oldMoviesCount = 0;
        movies.reduce((x,y) => {
            return oldMoviesCount = x + (y.year >= 1980 && y.year <= 1989);
        },0);
        const oldMovie = document.createElement("h3");
        resultHolder.appendChild(oldMovie);
        oldMovie.innerHTML = "The number of movies that was made between 1980 & 1989 is: " + oldMoviesCount;
    })
    
    
};

fetchJsonData(moviesLink,moviesRatings);



function resultRatingMovies(jsonFile,a,b){
    const result = jsonFile.filter((x) => {
           return x.rating >= a && x.rating <=b;
       }).map((z)=>{
           const movie = document.createElement("li");
           resultHolder.appendChild(movie);
           movie.innerHTML = z.title;
        });
>>>>>>> cceb9272552ad296341cfd7d4d0f9a8b1ce3ce71
};