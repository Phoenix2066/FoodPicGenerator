let a = ["biryani","burger","butter-chicken","dessert","dosa","idly","pasta","pizza","rice","samosa"];
//For dropdown box
let dropdown = document.querySelector(".item");
for (const i of a){
    let opt = document.createElement("option"); 
    opt.value = i;
    opt.innerText = i;
    dropdown.prepend(opt);
}
//For Submit button
let btn = document.querySelector(".submit");
btn.addEventListener("click",()=>{
    const selected = dropdown.value;
    let img = document.querySelectorAll("img");
    for(const i of img){
        imgLoader(`https://foodish-api.com/api/images/${selected}`,i);
    }
});
//For Random Button
let random = document.querySelector(".random");
random.addEventListener("click",()=>{
    let idx = Math.floor(Math.random() * (9));
    let img = document.querySelectorAll("img");
    for(const i of img){
        imgLoader(`https://foodish-api.com/api/images/${a[idx]}`,i);
    }
});
//Adding images to imgCont
let cont = document.querySelector(".imgCont");
for(let i = 0;i<16;i++){
    let el = document.createElement("img");
    cont.prepend(el);
}
//For collecting all the img elements
let img = document.querySelectorAll("img");
for(const i of img){
    imgLoader("https://foodish-api.com/api",i);
}
//A function to set the img src if api call is successfull(or print the error in the console in case of failure)
async function imgLoader(url, i) {
    let response =await fetch(url);
    let data = await response.json();
    i.src = data.image;
    response.catch(err=>{console.log(err)});
}