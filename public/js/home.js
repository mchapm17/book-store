const addToCartEl = document.querySelectorAll('.addtocart');
const dataID = (element) => element.getAttribute('data-id');
const userId = document.getElementById('userid').value;

for (let i = 0; i < addToCartEl.length; i++) {
    const element = addToCartEl[i];
    element.addEventListener('click', async () => {
        const productId = dataID(element)
        console.log(productId);
        const response = await fetch(`/api/cart/${userId}`, {
            method: 'POST',
            body: JSON.stringify({ user_id: userId, product_id: productId }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);
        if (response.ok) {
            // document.location.reload();
        }
    }
    );
}