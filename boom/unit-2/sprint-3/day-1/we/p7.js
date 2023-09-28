// You have an array of objects that stores firstName and lastName values of your friends as follows:


// use the map() method to iterate over the array and join the values of firstName and lastName as follows

// Output should look like

// ["Nrupul Dev", "Prateek Shukla", "Yogesh Bhat"]


let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];
  let sum=function (el){
   return (el["firstName"]+" "+el["lastName"]);
  }
  let x= users.map(sum);
  console.log(x);