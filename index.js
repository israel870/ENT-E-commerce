let addToCart = document.querySelectorAll('.add');
let item = document.getElementById('item');
let cartNumber = document.getElementById('cartNumber');
let products = [];

addToCart.forEach((button)=>{
    button.addEventListener('click', ()=>{
        products.push(item);
        console.log(products);
        updateNumber();
    })
})

function updateNumber(){
    cartNumber.textContent = products.length;
}