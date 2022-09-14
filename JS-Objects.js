// let movies={name:"RRR",Direction:"SS Rajamouli",Cast:"NTR,Ram Charann"}
// console.log(movies["Cast"]);
// movies["Direction"]='good';
// console.log(movies )


// second way to create
let movie=new Object()
movie.name="RRR"// inseting with .
movie["released"]=2022  // inserting by using []
console.log(movie)
movie.cast="NTR"
movie.cast="Ram Charan"
movie.cast="Mahesh"// by giving multiple latest will come.
console.log(movie)
console.log(movie.released);
console.log(movie.cast); //accessing elements
console.log(movie.released);
console.log(movie["released"]);


      