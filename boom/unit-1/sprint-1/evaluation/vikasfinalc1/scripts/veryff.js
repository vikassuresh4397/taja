// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ** Constants / Variables ** //
const pitchURL = `${baseServerURL}/pitches`;
let mainSection = document.getElementById("data-list-wrapper");

// pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// Update Pitch Logic
pitchCreateBtn.addEventListener("click", () => {
  addPitch();
});

async function addPitch() {
  let obj = {
    title: pitchTitleInput.value,
    image: pitchImageInput.value,
    category: pitchCategoryInput.value,
    founder: pitchfounderInput.value,
    price: pitchPriceInput.value,
  };
  await fetch(pitchURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  getData();
}

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



// Update Price Function

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

//Sort Function
sortAtoZBtn.addEventListener("click", () => {
  fetch(`${baseServerURL}/pitches?_sort=price&_order=asc`)
    .then((res) => res.json())
    .then((data) => showPitchData(data))
    .catch((err) => console.log(err));
});

sortZtoABtn.addEventListener("click", () => {
  fetch(`${baseServerURL}/pitches?_sort=price&_order=desc`)
    .then((res) => res.json())
    .then((data) => showPitchData(data))
    .catch((err) => console.log(err));
});

// Filter Function
filterFood.addEventListener("click", () => {
  let val = "Food";
  if (val == "") {
    getData();
  }
  fetch(`${baseServerURL}/pitches?category=${val}`)
    .then((res) => res.json())
    .then((data) => showPitchData(data))
    .catch((err) => console.log(err));
});

filterElectronics.addEventListener("click", () => {
  let val = "Electronics";
  if (val == "") {
    getData();
  }
  fetch(`${baseServerURL}/pitches?category=${val}`)
    .then((res) => res.json())
    .then((data) => showPitchData(data))
    .catch((err) => console.log(err));
});

filterPersonalCare.addEventListener("click", () => {
  let val = "Personal Care";
  if (val == "") {
    getData();
  }
  fetch(`${baseServerURL}/pitches?category=${val}`)
    .then((res) => res.json())
    .then((data) => showPitchData(data))
    .catch((err) => console.log(err));
});

//Search by title/founder

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

// Search Function
searchByButton.addEventListener("click", () => {
  let val = searchBySelect.value;
  let inputVal = searchByInput.value;
  if (val == "") {
    getData();
  }
  fetch(`${baseServerURL}/pitches?${val}=${inputVal}`)
    .then((res) => res.json())
    .then((data) => showPitchData(data))
    .catch((err) => console.log(err));
});

let pitches = [];

function getData() {
  fetch(pitchURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showPitchData(data);
    })
    .catch((err) => console.log(err));
}
getData();

function showPitchData(data) {
  mainSection.innerHTML = null;
  console.log(data, "inner");

  data.forEach((el) => {
    let CardListDiv = document.createElement("div");
    CardListDiv.setAttribute("class", "card-list");

    let CardDiv = document.createElement("div");
    CardDiv.setAttribute("class", "card");
    CardDiv.setAttribute("data-id", "1");

    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "card-img");

    let img = document.createElement("img");
    img.src = el.image;
    img.alt = "pitch";

    let BodyDiv = document.createElement("div");
    BodyDiv.setAttribute("class", "card-body");

    let h4 = document.createElement("h4");
    h4.setAttribute("class", "card-title");
    h4.innerHTML = el.title;

    let p = document.createElement("p");
    p.setAttribute("class", "card-founder");
    p.innerHTML = el.founder;

    let p1 = document.createElement("p");
    p1.setAttribute("class", "card-category");
    p1.innerHTML = el.category;

    let p2 = document.createElement("p");
    p2.setAttribute("class", "card-price");
    p2.innerHTML = el.price;

    let anch = document.createElement("a");
    anch.innerHTML = "Edit";
    anch.setAttribute("class", "card-link");
    anch.setAttribute("data-id", "1");
    anch.setAttribute("href", "#");
    anch.addEventListener("click", () => {
      editt(el);
    });

    let del = document.createElement("button");
    del.innerHTML = "Delete";
    del.setAttribute("class", "card-button");
    del.setAttribute("data-id", "1");
    del.addEventListener("click", () => {
      delt(el.id);
    });

    CardListDiv.append(CardDiv);
    CardDiv.append(imgDiv, BodyDiv);
    imgDiv.append(img);
    BodyDiv.append(h4, p, p1, p2, anch, del);
    mainSection.append(CardListDiv);
  });
}

function delt(id) {
  fetch(`${baseServerURL}/pitches/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      window.location.reload();
    })
    .catch((err) => console.log(err));
}