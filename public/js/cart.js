const addToCartEl = document.querySelectorAll('.addtocart');
const dataID = (element) => element.getAttribute('data-id');
const userId = document.getElementById('userid').value;
const CartProducts = document.getElementsByClassName('cart-products')
// const delFromCart = document.querySelector()


// for (let i = 0; i < addToCartEl.length; i++) {
//     const element = addToCartEl[i];
//     element.addEventListener('click', async () => {
        try {
            const productId = dataID(element)
            console.log(productId);
            const response = await fetch(`/api/cart/${userId}`, {
                method: 'POST',
                body: JSON.stringify({ user_id: userId, product_id: productId }),
                headers: { 'Content-Type': 'application/json' },
            });
            console.log(response);
            if (response.ok) {
                console.log('add to cart')
                // document.location.reload();
            }
        } catch {
        }
//     }

//     );

// }






















// const products = document.querySelector("#products");
// // const cartProductsEl = document.querySelector("#cart-products");
// const cartProductsEl = $("#cart-products");
// const subTotalEl = $("#sub-total")

// const getCartItems = () => {
//     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//     return cartItems;
// }
// const setCartItems = (items) => {
//     localStorage.setItem('cart', JSON.stringify(items));
// }

// if (products) {
//     products.addEventListener('click', (event) => {
//         if (event.target.matches(".btn")) {
//             event.preventDefault();
//             const product = {
//                 id: event.target.dataset.id,
//                 name: event.target.dataset.name,
//                 author: event.target.dataset.author,
//                 price: event.target.dataset.price,
//                 // img: event.target.dataset.img,
//             }
//             const cartItems = getCartItems();
//             cartItems.push(product);
//             setCartItems(cartItems);
//             window.location.href = "/cart";
//         }
//     });
// };


// if (cartProductsEl) {
//     console.log("loaded")
//     const cartItems = getCartItems();
//     cartProductsEl.innerHTML = "";
//     let subtotal = 0;
//     for (let index = 0; index < cartItems.length; index++) {
//         const product = cartItems[index];
//         subtotal += parseInt(product.price);
//         cartProductsEl.append(`
//         <div class="card m-3 bg-secondary text-light" style="width: 18rem;">
//         <img src="${product.img}" class="card-img-top" alt="Book image sourced from online url">
//         <div class="card-body">
//             <h5 class="card-title">${product.name}</h5>
//             <p class="card-text">by: ${product.author}</p>
//             <p class="card-text">$${product.price}</p>
//         </div>
//         <button class="deleteBut btn btn-danger" data-id="${product.id}">Delete</button>
//     </div>
//         `);
//     }
//     subTotalEl.text(`Subtotal: $${subtotal}`);

// };

// const deleteButtonArray = document.querySelectorAll('.deleteBut');
// for (let i = 0; i < deleteButtonArray.length; i++) {
//     const element = deleteButtonArray[i];

//     element.addEventListener('click', (event) => {
//         console.log(event.target);
//         const deleteId = event.target.dataset.id
//         console.log(deleteId);
//         const items = getCartItems();
//         console.log(items);
//         const results = items.filter((product) => {
//             return (product.id !== deleteId);
//         })
//         console.log(results);
//         setCartItems(results);
//         location.reload();
//     });
// }
