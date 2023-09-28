const { populate } = require("dotenv/lib/main");

// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const pitchURL = `${baseServerURL}/pitches`;
let mainSection = document.getElementById("data-list-wrapper");

// pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");

//Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

//Search by title/founder

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

// Event Listeners //

pitchCreateBtn.addEventListener("click",()=>{
  addPitch();
})

updatePitchBtn.addEventListener("click",()=>{
  updatePitch();
})

updatePricePitchPriceBtn.addEventListener("click",()=>{
updatePitchPrice();
})

// sort event listerners

sortAtoZBtn.addEventListener("click",()=>{
  sortPitchesByPrice("asc");
});

sortZtoABtn.addEventListener("click",()=>{
  sortPitchesByPrice("desc");
});

//filter event listeners
filterFood.addEventListener("click",()=>{
  filterPitchesByCategory("Food");
})

filterElectronics.addEventListener("click",()=>{
  filterPitchesByCategory("Electronics");
})

filterPersonalCare.addEventListener("click",()=>{
  filterPitchesByCategory("Personal-Care");;
})


// search event listener

searchByButton.addEventListener("click",()=>{
  searchPitches();
});

//helper functions

//fetch pitches from server

async function fetchPitches(){
  try{
    const response=await 
    fetch(pitchURL);
    const pitches=await 
    response.json();
    return pitches;
  }catch(error){
    console.log("Error fetching pitches", error)
  }
}


//render pitches on the page
function renderPitches(pitches){
  mainSection.innerHTML="";
  pitches.forEach((pitch)=>{
     const pitchCard=createPitchCard(pitch);

     mainSection.appendChild(pitchCard)
  })
}

// create pitch card element

function createPitchCard(pitch){
  const {id,title,image,category,founder,price}=pitch;
  const cardContainer= document.createElement("div");
  cardContainer.className="card";

  const imageElement=document.createElement("img");
  imageElement.src=image;
  imageElement.alt=title;
  cardContainer.appendChild(imageElement)

  const titleElement=document.createElement("h2");
  titleElement.textContent=title;
  cardContainer.appendChild(titleElement);

  const categoryElement=document.createElement("p");
  categoryElement.textContent=` Category: ${category}`;
  cardContainer.appendChild(categoryElement);

  const founderElement=document.createElement("p");
  categoryElement.textContent=`Founder: ${founder}`;
  cardContainer.appendChild(founderElement);

  const priceElement=document.createElement("p");
  categoryElement.textContent=`Price: ${price}`;
  cardContainer.appendChild(priceElement);

  const updateButton=document.createElement("button");
  updateButton.textContent="Update";
  updateButton.addEventListener("click",()=>{
    populateUpdateForm(id);
  })

  cardContainer.appendChild(updateButton);

  const deleteButton=document.createElement("button");
  deleteButtontextContent="Delete";
  updateButton.addEventListener("click",()=>{
    deletePitch(id);
  });
  cardContainer.appendChild(deleteButton);

  

  return cardContainer

}


// add a new pitch

async function addPitch(){
  const pitch={
    title:pitchTitleInput.value,
    image:pitchImageInput.value,
    category:pitchCategoryInput.value,
    founder:pitchFounderInput.value,
    price:pitchPriceInput.value,
  }

try{
const response= await
fetch(pitchURL,{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(pitch),
});

if(response.ok){
  const newPitch=await response.json();
  const pitchCard=createPitchCard(newPitch);

  mainSection.appendChild(pitchCard);
  clearPitchForm();
}else{
  console.error("Error",response.status);
}



}catch(error){
console.log(erroe)
}



}


// update existing pitch

async function updatePitch(){
  const pitchId= updatePitchInput.value;
  const updatePitch={
    title:updatePitchTitleInput.value,
    image:updatePitchImageInput.value,
    category:updatePitchCategoryInput.value,
    founder:updatePitchFounderInput.value,

  }

  try{
    const response= await
    fetch({pitchURL}/`${pitchId}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(updatePitch),
    });
    
    if(response.ok){
      const updatedPitchData=await response.json();
      const updatedPitchCard=createPitchCard(updatedPitchData);
      const existingPitchCard=document.getElementById(pitch-`${pitchId}`);
      mainSection.appendChild(pitchCard);
      clearPitchForm();
    }else{
      console.error("Error",response.status);
    }
    
    
    
    }catch(error){
    console.log(error)
    }

}

// update pitch price
async function updatePitchPrice(){
  const pitchId= updatePricePitchId.value;
  const updatedPrice={
    price:updatePricePitchPrice.value,

  }

  try{
    const response= await
    fetch({pitchURL}/`${pitchId}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(updatedPrice),
    });
    
    if(response.ok){
      const updatedPitchData=await response.json();
      const updatedPitchCard=createPitchCard(updatedPitchData);
      const existingPitchCard=document.getElementById(pitch-`${pitchId}`);
      mainSection.appendChild(pitchCard);
      clearPitchForm();
    }else{
      console.error("Error",response.status);
    }
    
    
    
    }catch(error){
    console.log(error)
    }

}


// delete a pitch
async function deletePitch(pitchId){
  
  

  try{
    const response= await
    fetch({pitchURL}/`${pitchId}`,{
      method:"DELETE",
     
    });
    
    if(response.ok){
const deletedPitch=document.getElementById(pitch-`${pitchId}`);
      mainSection.removeChild(deletedPitch);
      clearPitchForm();
    }else{
      console.error("Error",response.status);
    }
    
    
    
    }catch(error){
    console.log(error)
    }

}

//sorting by price

async function sortPitchesByPrice(order){
 

  try{
    const response= await
    fetchPitches();
    pitches.sort((a,b)=>{
      if(order==="asc"){
        return a.price-b.price;
      }else if(order==="desc"){
        return b.price-a.price;
      }
    })
    renderPitches(pitches);
    
    
    }catch(error){
    console.log(error)
    }

}

async function filterPitchesByCategory(order){
 

  try{
    const pitches= await
    fetchPitches();
    const filteredPitches=pitches.filter((pitch)=>{
      return pitch.category===category
    })
   renderPitches(filteredPitches);
    
    }catch(error){
    console.log(error)
    }

}

//search pitches

async function searchPitches(order){
 const searchBy=searchBySelect.value;
 const searchTerm=searchByInput.value.trim().toLowerCase();

  try{
   const pitches =await fetchPitches();
   const filteredPitches=pitches.filter((pitch)=>{
    pitch[searchBy].toLowerCase().includes(searchTerm)
   
   })
   renderPitches(filteredPitches)
    }catch(error){
    console.log(error)
    }

}
// clear add pitch
function clearPitchForm(){
  pitchTitleInput.value="";
  pitchImageInput.value="";
  pitchCategoryInput.value="";
  pitchFounderInput.value="";
  pitchPriceInput.value="";
}

//clear updator pitch

function clearUpdateForm(){
  updatePitchTitleInput.value="";
   updatePitchImageInput.value="";
   updatePitchCategoryInput.value="";
   updatePitchFounderInput.value="";
   updatePitchPriceInput.value="";
}

//clear update form

function clearPriceUpdateForm(){
  updatePricePitchId.value="";
  updatePricePitchPrice.value="";

}

(async function (){
  const pitches=await fetchPitches();
  renderPitches(pitches)
})