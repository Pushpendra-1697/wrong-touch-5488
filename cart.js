   
let cartLS=JSON.parse(localStorage.getItem("cart-page"))||[];
function displayTable(cartLS){
    document.querySelector("#container").innerHTML=null;
    let sum=0;
    let count=0;
    cartLS.map(function(ele,index){
        count++;
        sum+=Number(ele.price);
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src",ele.image);
        let price=document.createElement("h2");
        price.innerText=ele.price;
        let catagory=document.createElement("h5");
        catagory.innerText=ele.catagory;
        let para=document.createElement("p");  
        para.innerText=ele.para;
        let star=document.createElement("img");
        star.setAttribute("src",ele.star);
        let deleteBtn=document.createElement("button");
        deleteBtn.innerText="Delete";
        deleteBtn.addEventListener("click",function(){
            deletetoCart(ele,index);
        });
        div.append(image,price,catagory,para,star,deleteBtn);
        document.querySelector("#container").append(div);
    });
     document.querySelector("#total-price").innerText=sum;
     document.querySelector("#total-quantity").innerText=count;
}
displayTable(cartLS);

function deletetoCart(ele,index){
   cartLS.splice(ele,1);
   localStorage.setItem("cart-page",JSON.stringify(cartLS));
   displayTable(cartLS);
}


let loginLS=JSON.parse(localStorage.getItem("login"));
if(loginLS != null){
    document.querySelector("#nav").innerHTML = null;
    username=document.createElement("h1");
    username.innerText=loginLS.Name;
     document.querySelector("#nav").append(username);
}