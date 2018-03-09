/*eslint-env browser*/
//STEP 1
/*var movies = ["The glass castle", "Lion", "Mice and Men", "Horton Hear A Who", "How to be a Latin Lover"];
window.console.log(movies[1]);*/

//STEP 2
/*var movies = new Array(5);
movies[0] = "The glass Castle";
movies[1] = "Training Day";
movies[2] = "It Man";
movies[3] = "Scarface";
movies[4] = "Blood In Blood Out";
window.console.log(movies[0]);*/

//STEP 3
/*var movies = new Array(5);
movies[0] = "The glass Castle";
movies[1] = "Training Day";
movies[2] = "It Man";
movies[3] = "Scarface";
movies[4] = "Blood In Blood Out";
movies[movies.length] = 6;
movies[4] = "nemo";
window.console.log(movies[4]);*/

//STEP 4
/*var movies = ["The glass castle", "Lion", "Mice and Men", "Horton Hear A Who", "How to be a Latin Lover"];
delete movies[0];
window.console.log(movies);*/

//STEP 5
/*var movies = ["The glass castle", "Lion", "Mice and Men", "Horton Hear A Who", "How to be a Latin Lover", "ScarFace", "Cars"];
var i;
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}*/

//STEP 6
/*var index;
var movies = ["The glass castle", "Lion", "Mice and Men", "Horton Hear A Who", "How to be a Latin Lover", "ScarFace", "Cars"];
for (index in movies) {
    window.console.log(movies[index]);
}*/

//STEP 7
/*var movies = ["The glass castle", "Lion", "Mice and Men", "Horton Hear A Who", "How to be a Latin Lover", "ScarFace", "Cars"];
var i;
movies.sort();
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}*/

//STEP 8
/*var movies = ["The glass castle", "Lion", "Mice and Men", "Horton Hear A Who", "How to be a Latin Lover", "ScarFace", "Cars", "..."];
var leastFavMovies = ["The Human Centipede", "Trolls", "Frozen", "..."];
var i;
var j;

window.console.log("\n" + "Movies I Like:" + "\n\n");
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}

window.console.log("\n" + "Movies I regret watching:" + "\n\n");
for (j = 0; j <leastFavMovies.length; j += 1) {
    window.console.log(leastFavMovies[j]);
}*/

//STEP 9
/*var movies = ["The glass castle", "Lion", "Mice and Men", "Horton Hear A Who", "How to be a Latin Lover", "ScarFace", "Cars"];
var leastFavMovies = ["The Human Centipede", "Trolls", "Frozen", "..."];
var i;
var j;

window.console.log("\n" + "Movies I Like:" + "\n\n");
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}

window.console.log("\n" + "Movies I regret watching:" + "\n\n");
for (j = 0; j < leastFavMovies.length; j += 1) {
    window.console.log(leastFavMovies[j]);
}
// Concat & Reverse method
movies = movies.concat("The Human Centipede", "Trolls", "Frozen");
window.console.log(movies.reverse());*/


//STEP 10
/*var movies = ["The glass castle", "Lion", "Mice and Men", "Horton Hear A Who", "How to be a Latin Lover", "ScarFace", "Cars"];
// Pop 
movies = movies.pop();
window.console.log(movies);*/

//STEP 11
/*var movies = ["The glass castle", "Lion", "Mice and Men", "Horton Hear A Who", "How to be a Latin Lover", "ScarFace", "Cars"];
// Shift
movies = movies.shift();
window.console.log(movies);*/


//STEP 12
/*var movies = ["Man On Fire", "Wolf Of Wall Street", "Dr Strange", "The Jungle Book", "Trolls"];
movies.splice(3, 4, "Planet Of The Apes", "Jurassic Park");
window.document.write(movies);*/

//STEP 13
/*
var employee1 = [];
employee1["id"] = 6199;
employee1["name"] = "Manny";
employee1["title"] = "Painter";
employee1["department"] = "paint";
employee1["isCurrent"] = true;
var employee2 = [];
employee2["id"] = 8585;
employee2["name"] = "jose";
employee2["title"] = "Street Sweeper";
employee2["department"] = "management";
employee2["isCurrent"] = true;

var employees = [employee1, employee2]
employee1[0];
employee2[1];

window.console.log(employees[1]["name"]);
*/


//STEP 14
/*var employee1 = [];
employee1["id"] = 6199;
employee1["name"] = "Manny";
employee1["title"] = "Painter";
employee1["department"] = "paint";
employee1["isCurrent"] = true;
var employee2 = [];
employee2["id"] = 8585;
employee2["name"] = "jose";
employee2["title"] = "Street Sweeper";
employee2["department"] = "management";
employee2["isCurrent"] = true;

var employees = [employee1, employee2]
employee1[0];
employee2[1];

var i;
for (i = 0; i < employees.length; i += 1) {
    window.console.log(employees[i]["name"]);
}*/

//STEP 15
/*var employee1 = [];
employee1["id"] = 6199;
employee1["name"] = "Manny";
employee1["title"] = "Painter";
employee1["department"] = "paint";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 8585;
employee2["name"] = "jose";
employee2["title"] = "Street Sweeper";
employee2["department"] = "cleaning";
employee2["isCurrent"] = true;

var employee3 = [];
employee3["id"] = 2323;
employee3["name"] = "John Smith";
employee3["title"] = "Supervisor";
employee3["department"] = "management";
employee3["isCurrent"] = false;

var employees = [employee1, employee2, employee3]
employee1[0];
employee2[1];
employee3[2];

var i;
for (i = 0; i < employees.length; i += 1) {
    if (employees[i]["isCurrent"]) {
            window.console.log(employees[i]["name"]);
    }
}*/

//STEP 16
/*var movies = [["The Glass Castle", 1], ["Man On Fire", 2], ["The Great Simon", 3], ["Stand By Me", 4], ["American Me", 5]];
movies.filter(function(movie){
    window.console.log(movie[0]);
});*/

//STEP 17
/*var employees = ["Manny", "Carlos", "Moises", "Bianca", "Bailee"];
var showEmployees = function (employees) {
    "use strict";
    var i;
    for (i = 0; i < employees.length; i += 1) {
        window.console.log(employees[i]);
    }
};
window.console.log("Employees: \n\n");
window.console.log(showEmployees(employees));*/
//STEP 18
/*
var filterValues = function (arr) {
    "use strict";
    return arr.filter(Boolean);
};
window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
*/

//STEP 19
/*var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var randomNumber = function (numbers) {
    return numbers[Math.floor(Math.random()*numbers.length)];
}
window.console.log(randomNumber(numbers));*/

//STEP 20
/*var numbers = [2, 10, 5, 4, 9];
function largestNumber(numbers) {
    "use strict";
    return Math.max.apply(Math, numbers);
}
window.console.log(largestNumber(numbers));*/

























