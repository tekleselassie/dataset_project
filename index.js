//Include fs package for file system inorder to write and read a file
const fs = require("fs");
//read File - it is string data file
let data = fs.readFileSync("data.json", "utf8");

// console.log(typeof(data));
// parsed  means change the string file data to JSON object
let parsedData =JSON.parse(data);

// console.log(typeof(parsedData));

let countFemale = 0;
let countMale = 0;
  for(var j = 0; j < parsedData.data.length; j++){

      //counting the number of total data
      if (parsedData.data[j][12] == "Female") {
      countFemale++;

      }
      else if (parsedData.data[j][12] == "Male"){
        countMale++;
      }

    }
    console.log("\n");
console.log("Total Accedint occured in Female and Male");
console.log("\n");
console.log("Male   " +countMale);
console.log("Female " +countFemale);

var count2018 = 0;
var count2017 = 0;
var count2016 = 0;
var count2015 = 0;
var count2014 = 0;
var count2013 = 0;
var count2012 = 0;

for (let i =0; i < parsedData.data.length; i++){

  if(parsedData.data[i][9] !== null ){
    let year = parsedData.data[i][9].split("-");
    switch (year[0]){
      case "2018":
      count2018++;
      break;
      case "2017":
      count2017++;
      break;
      case "2016":
      count2016++;
      break;
      case "2015":
      count2015++;
      break;
      case "2014":
      count2014++;
      break;
      case "2013":
      count2013++;
      break;
      case "2012":
      count2012++;
      break;


    }

  }
}
countYear = {};

for (i = 0; i < parsedData.data.length; i++)
{
  if(parsedData.data[i][9] !== null ){
    let year = parsedData.data[i][9].split("-");
    if(countYear.hasOwnProperty(year[0]) == false){
      countYear[year[0]] = 1;
    }
      else {
        countYear[year[0]]++;
      }

    }

}
console.log(countYear);
console.log("\n");
console.log("Accident occured in Year Betwwen 2012 and 2018");
console.log("\n");
console.log("Total Accident in the year 2018 is :  " + count2018);
console.log("Total Accident in the year 2017 is :  " + count2017);
console.log("Total Accident in the year 2016 is :  " + count2016);
console.log("Total Accident in the year 2015 is :  " + count2015);
console.log("Total Accident in the year 2014 is :  " + count2014);
console.log("Total Accident in the year 2013 is :  " + count2013);
console.log("Total Accident in the year 2012 is :  " + count2012);

let youngAdults = 0;
let middleAged = 0;
let olderAdults = 0;
let underAged = 0;
for(i =0; i < parsedData.data.length; i++){
let age = parseInt(parsedData.data[i][11]);

        if(age < 18 ){
            underAged++;
          }
          else if( age >= 18 && age <= 35 ){
              youngAdults++;
              }
            else if(age >= 36 && age <= 55){
                middleAged++;
            }
            else if (age > 55) {
              olderAdults++

            }

}
console.log("\n");
console.log("Highest accidents occured in diffrent age complications \n");
console.log("Age classified as Follows: \n Under Aged [Less than 18] \n Young Adults [18 - 35] \n Middle Aged[36 - 55] \n Older Adults [Greater than 55]" );
console.log("\n");
console.log("Under Aged " + underAged + "\n");
console.log("Young Adults " + youngAdults + "\n");
console.log("Middle Aged " + middleAged + "\n");
console.log("older Adults " + olderAdults + "\n");

countYear = {};

for (i = 0; i < parsedData.data.length; i++)
{
  if(parsedData.data[i][9] !== null ){
    let year = parsedData.data[i][9].split("-");
    if(countYear.hasOwnProperty(year[0]) == false){
      countYear[year[0]] = 1;
    }
      else {
        countYear[year[0]]++;
      }

    }

}
console.log(countYear);

let countCouses = {};
// another Data Set
let causes = fs.readFileSync("causesData.json", "utf8");
let parsedCauses =JSON.parse(causes);
console.log(parsedCauses.data[152][10]);
console.log(countCouses.hasOwnProperty(parsedCauses.data[0][10]));
for (i = 0; i < parsedCauses.data.length; i++){
  if(countCouses.hasOwnProperty(parsedCauses.data[i][11]) == false){

    countCouses[parsedCauses.data[i][11]] = 1;
  }
  else{
    countCouses[parsedCauses.data[i][11]]++;
  }
}
console.log(countCouses);
