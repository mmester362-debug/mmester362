const phoneNumber = "+212 753253681";

const products = [
  {name:"Luxury Hoodie", price:41, image:"images/hoodie.jpg"},
  {name:"Elegant Dress", price:75, image:"images/dress.jpg"}
];

const shop = document.getElementById("shop");

products.forEach(product=>{
  shop.innerHTML += `
    <div class="card" onclick="openPopup('${product.name}',${product.price},'${product.image}')">
      <img src="${product.image}">
      <div class="card-content">
        <h3>${product.name}</h3>
        <p class="price">${product.price}€</p>
      </div>
    </div>
  `;
});

function openPopup(name,price,image){
  document.getElementById("popup").style.display="flex";
  document.getElementById("popup-img").src=image;
  document.getElementById("popup-title").innerText=name;
  document.getElementById("popup-price").innerText=price+"€";
  document.getElementById("orderBtn").onclick=function(){
    const message=`سلام، بغيت نطلب ${name} بثمن ${price}€ من Wool Style`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
  }
}

function closePopup(){
  document.getElementById("popup").style.display="none";
}