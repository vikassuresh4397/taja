// // studentData('Vivek', 'Agarwal', 38, [50,60,70] , 'Singing', 'Coding', 'Meditating');

// function studentData('Vivek', 'Agarwal', 38, [50,60,70] , 'Singing', 'Coding', 'Meditating') {
  
//   let user={
//     fullName : firstName+" "+lastName,
//     age : age,
//     hobbies:hobbies,
//     getInfo: function(){
//       return this.fullName+"'s age is "+age+".";
//     },

//     getResult : function(){
//       let n=marksshop.length;
//       let sum=0;
//       for(let a=0;a<n;a++){
//         sum=sum+marksshop[a];
//       }
//       let avg=sum/n;

//       if(avg<50){
//         return 'Result: FAIL';
//       }else{
//         return 'Result: PASS';
//       }
//     }
//   }
  
//   return user;
// }








// export {studentData}
function studentData(firstName,lastName,age,marksArray,...hobbies) {
// // studentData('Vivek', 'Agarwal', 38, [50,60,70] , 'Singing', 'Coding', 'Meditating');

// function studentData('Vivek', 'Agarwal', 38, [50,60,70] , 'Singing', 'Coding', 'Meditating') {
  let user = {
      fullName  : firstName +" "+ lastName,
      age:age,
      hobbies:hobbies,
      
      getInfo:  function(){
        return this.fullName+"'s age is "+age+".";
      },

//   let user={
//     fullName : firstName+" "+lastName,
//     age : age,
//     hobbies:hobbies,
//     getInfo: function(){
//       return this.fullName+"'s age is "+age+".";
//     },
      getResult: function() {
        let n = marksArray.length;
        let sum = 0;


        
        for(let i=0;i<marksArray.length;i++){


          
          sum+=marksArray[i];
        }



        let avg = sum/n;


        if(avg<50){
          return "Result: FAIL"
        }else{
          return "Result: PASS"
        }
      }
  }




  return user
}








export {studentData}