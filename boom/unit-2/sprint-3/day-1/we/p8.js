// OBJECTS FILTER
// You have an array of objects that stores firstName and lastName and place values of your friends as follows:

// let users = [
//   { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
//   { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
//   { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
// ];
// use filter along with map() method to iterate over the array and output the names who lives in Banglore Output should look like

// ["Nrupul Dev", "Prateek Shukla"]

let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];
  
  let add=function (el){
    if(el["place"]=="Banglore"){
      return (el);
    }
  }
  
  let sum=function (el){
    return (el["firstName"]+" "+el["lastName"])
  }

  let x= users.filter(add).map(sum);
  console.log(x);