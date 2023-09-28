// Expected to return: "Vivek is 36 yrs old."
function fixThis() {
  let foo = {
    name: "Vivek",
    age: 36
   };

   function getDetails() {
    // just replace the return value using the this keyword. 
   
    return (this.name + " " + "is"+ " "+ this.age+ " "+ "yrs"+ " "+ "old.");
   }

   foo.logMyDetails = getDetails;

    return foo.logMyDetails();
}

// Expected to return: [3, 4, 5, 6, 7, 8, 9, 10]
function getRest() {
  const arr = [1,2,3,4,5,6,7,8,9,10];
  const [a,b, ...rest] = arr; // only change this line of code.
  return rest;
}

// Expected to return: {username: 'vivek', sub1: 'JS', degree: 'BCA'}
function destructureMe() {
  let user = {
    name: 'vivek',
    favSubjects: ['JS', 'Maths'], 
    education: {
      degree: {
        name: 'BCA',
      }
    }
  }

  // just modify the line below
  let obj={};
  let username = user.name;
  let sub1 = user["favSubjects"][0];
  let degree= user.education.degree.name;
  obj={username,sub1,degree};

  return obj;
}

export {fixThis,getRest,destructureMe}