const getUsersData = async () => {
  

  


  try {
    let response=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-users`);
  let data=await response.json();
  let act_data=data.Search;
  splitData(act_data);
  } 
  catch(err) {
    console.log(err)
  }

};

function splitData(){

  return {
    totalPages,
    data1,
    data2,
    data3
  }
}


// donot change the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getUsersData,
    splitData,
  };
}
