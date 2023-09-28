import {navbar} from "./components/navbar.js"

let navbar_div=document.getElementById("navbar");

navbar_div.innerHTML=navbar();


// 39986adde8a7b5ddecf773d48e877d9d

let create_btn=document.getElementById("create_btn");

create_btn.onclick=function(){
    createPost();
};

let inp_image=document.getElementById("image");

inp_image.onchange = ()=> {

    handleImage()
}

let image_url;

const handleImage = async() => {
    let img=document.getElementById("image");
    let actual_img=img.files[0];
    // console.log("actual_img:", actual_img);

    let form = new FormData();

    form.append("image", actual_img);

    let res =await fetch(`https://api.imgbb.com/1/upload?key=39986adde8a7b5ddecf773d48e877d9d`, {
        method : "POST",
        body : form,
    });

let data =await res.json();
console.log("data:", data);
image_url=data.data.display_url;



};

const createPost = async () => {
    let id= document.getElementById("id").value;
    let caption= document.getElementById("caption").value;


let send_this_data= {
    id,
    caption,
    image_url,
};


let res= await fetch(`http://localhost:3000/posts`,{
    method : 'POST',
body: JSON.stringify(send_this_data),

headers:{
    'Content-Type':'application/json',
}
});

let data= await res.json();
console.log("data:",data);



};