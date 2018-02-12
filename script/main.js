let numbers = [1,2,3,4];
let oddNumbers = numbers.filter(x => x%2 != 0).map(x => x * 2);
//console.log(oddNumbers);

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
       const result = movies.filter((x) => {
           return x.rating >= 7;
       }).map((z)=>{
           const movie = document.createElement("li");
           resultHolder.appendChild(movie);
           movie.innerHTML = z.title + '<h6>' + " " + "(Good movie)" + '</h6>';
        });
    });
    
    averageMovies.addEventListener("click",function(){
        resultHolder.innerHTML = "";
       const result = movies.filter((x) => {
           return x.rating >= 4 && x.rating <= 6;
       }).map((z)=>{
           const movie = document.createElement("li");
           resultHolder.appendChild(movie);
           movie.innerHTML = z.title + '<h6>' + " " + "(Average movie)" + '</h6>';
        });
    });
    
    badMovies.addEventListener("click",function(){
        resultHolder.innerHTML = "";
       const result = movies.filter((x) => {
           return x.rating <= 3;
       }).map((z)=>{
           const movie = document.createElement("li");
           resultHolder.appendChild(movie);
           movie.innerHTML = z.title + '<h6>' + " " + "(Bad movie)" + '</h6>';
        });
    });
    
    totalAverage.addEventListener("click",function(){
        resultHolder.innerHTML = "";
        let rating = 0;
       const result = movies.reduce((x) => {
           rating = x.rating;
           const totalReating = document.createElement("h3");
           resultHolder.appendChild(totalReating);
           totalReating.innerHTML = "The total movies average is " + rating;
       })
    });
    
};

fetchJsonData(moviesLink,moviesRatings);