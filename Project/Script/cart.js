var cartData = JSON.parse(localStorage.getItem("cart"));
console.log(cartData);

var total = cartData.reduce(function (sum, elem, index, arr) {
  return sum + Number(elem.price);
}, 0);

var length = cartData.length;
console.log(length);

console.log(total);


 cartData.map(function (elem, index) {
  var box = document.createElement("div");

  var img = document.createElement("img");
  img.src = elem.image;
  img.style.height="300px";
  img.style.width="400px";
  img.style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px";
  img.style.marginBottom="20px";

  var name = document.createElement("p");
  name.textContent = elem.name;
  name.style.fontSize="18px";
  name.style.fontWeight="700";

  var price = document.createElement("p");
  price.innerText = elem.price;
  price.style.fontSize="16px";
  price.style.fontWeight="500";
  price.style.textDecoration="line-through";
  price.style.color="red";  

  var strikedOffPrice = document.createElement("p");
  strikedOffPrice.innerText = "Rs" + elem.strikedOffPrice;
  strikedOffPrice.style.fontSize="16px";
  strikedOffPrice.style.fontWeight="500";
  strikedOffPrice.style.color="black";

  var btn = document.createElement("button");
  btn.innerText = "Remove";
  btn.style.width="160px";
  btn.style.height="40px";
  btn.style.fontSize="18px";
  btn.style.fontWeight="500";
  btn.style.backgroundColor="gray";
  btn.style.color="black";
  btn.style.borderRadius="5px";
  btn.style.marginBottom="30px";
  btn.addEventListener("click", function () {
    removeItem(elem, index);
  });

  box.append(img, name, price, strikedOffPrice, btn);

  document.querySelector("#product").append(box);
});

function removeItem(elem, index) {
  console.log(elem, index);
  cartData.splice(index, 1);
  console.log(cartData);
  localStorage.setItem("cart", JSON.stringify(cartData));
  window.location.reload();
}

ocument.querySelector("#promo").addEventListener("click", formSubmit);
function formSubmit() {
  var coupon = document.querySelector("#coupon").value;

  if (coupon == "masai30") {
    //  alert("succ")
    alert("Your coupon is applied");
  } 
  else {
    alert(" Coupon NOT applied");
  }
}
