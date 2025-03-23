const products = [
    { name: 'Laptop Dell XPS 15', price: 35990000, image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/x/p/xps-15-9570-70158746-5_1.png' },
    { name: 'iPhone 15 Pro Max', price: 32990000, image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-15-pro-max_1.png' },
    { name: 'Samsung Galaxy S24 Ultra', price: 28990000, image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/g/a/galaxy-s24-ultra-tim_1_3.png' },
    { name: 'Tai nghe Sony WH-1000XM5', price: 7990000, image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/a/tai-nghe-chup-tai-sony-wh-1000xm5-3_1.png' },
    { name: 'Apple Watch Series 9', price: 11990000, image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/e/text_ng_n_33__9_12.png' },
    { name: 'Loa JBL Charge 5', price: 3990000, image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/l/o/loa-jbl-charge-5-den-black-4_1.jpg' }
];

function renderProducts(searchtext = "") {
    let productlist = document.getElementById("productlist");
    productlist.innerHTML = "";
    products.forEach(item => {
        if (item.name.toLowerCase().includes(searchtext.toLowerCase())) {
        let div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>${item.price.toLocaleString()} VNĐ</p>
            <button>Buy</button>
        `;
        productlist.appendChild(div);
        }
    });
}

renderProducts();
document.getElementById("button").addEventListener("click", function () {
    let searchtext = document.getElementById("search").value;
    renderProducts(searchtext);
});