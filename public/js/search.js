const getData = function(){

    const currentUrl = window.location.href;

    category = currentUrl.split("/")[currentUrl.split("/").length-1];

    $.get(window.location.origin + "/api/product/"+category, function(data, status){
    
        const productsEl = document.getElementById("products")
        let res = JSON.stringify(data);
        let theData = JSON.parse(res);

        // USE THE DATA
        productsEl.innerHTML = "";
        let productEl = "";
        const newUrl = window.location.href.split("search")[0]
        for(let i = 0; i < theData.length; i++)
        {
            productEl += `
            <a class="product" href="${newUrl + "detail/" + theData[i].id}">
                <div class="product_image_container">
                    <img src="${theData[i].image}" alt="">
                </div>
                <div class="product_info_container">
                    <h2 class="product_label">Kartsız 12 taksit</h2>
                    <h1 class="product_title"><span class="product_brand">${theData[i].brand}</span> ${theData[i].title}</h1>
                    <h2 class="product_price">${theData[i].price}</h2>
                </div>
            </a>
            `;
        }
        productsEl.innerHTML = productEl;


    });
    
};

getData();