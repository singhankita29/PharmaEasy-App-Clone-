var cartData = JSON.parse(localStorage.getItem("cart")) || [];
dataMedicines.map(function (elem) {
  var box = document.createElement("div");

  var img = document.createElement("img");
  img.src = elem.image;
  img.style.height="300px";
  img.style.width="400px";
  img.style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px";
  img.style.marginBottom="5%";

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
  btn.innerText = "Add to Cart";
  btn.style.width="160px";
  btn.style.height="40px";
  btn.style.fontSize="18px";
  btn.style.fontWeight="500";
  btn.style.backgroundColor="gray";
  btn.style.color="black";
  btn.style.borderRadius="5px"
  btn.addEventListener("click", function () {
    addToCart(elem);
  });

  box.append(img, name, price,strikedOffPrice, btn);

  document.querySelector("#product").append(box);
});

function addToCart(elem) {
  console.log(elem);
  cartData.push(elem);
  localStorage.setItem("cart", JSON.stringify(cartData));
  alert("item added to cart");
  window.location.href="cart.html";
}
