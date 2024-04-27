// LONGTEXT TOGGLE
const longtext = document.querySelector(".longtext-text");
const longtextToggleBtn = document.querySelector(".longtext-toggle");
let longtextIsOpen = false;

function toggleLongtext() {
    if(longtextIsOpen){
        // open the text area
        longtext.style.maxHeight = "initial";
        longtext.style.overflow = "initial";
        longtextToggleBtn.innerHTML = "Devamını Gizle";
        longtextIsOpen = false;
    }
    else {
        // close the text area
        longtext.style.maxHeight = "90px";
        longtext.style.overflow = "hidden";
        longtextToggleBtn.innerHTML = "Devamını Göster";
        longtextIsOpen = true;
    }
}

longtextToggleBtn.addEventListener("click", toggleLongtext);
toggleLongtext();

// campaigns
const campaignListItems = document.querySelectorAll(".campaign-list ul li");
const campaignList = document.querySelector(".campaign-list ul");
const campaigns = document.querySelectorAll(".campaign");

campaignList.addEventListener("click", (e) => {
    const name = e.target.innerHTML;

    let index = 0;
    for(let i = 0; i < campaignListItems.length; i++)
    {
        if(campaignListItems[i].innerHTML === name)
        {
            index = i;
            break;
        }
    }

    try {
        document.querySelector(".active-campaign").classList.remove("active-campaign");
        document.querySelector(".campaign-list-active").classList.remove("campaign-list-active");
    } catch (ignore) {
        
    }

    campaigns[index].classList.add("active-campaign");
    e.target.classList.add("campaign-list-active");

})

// GATHER DATA FROM DB
const getData = function(){

    const currentUrl = window.location.href;

    // süper fiyat süper teklif
    $.get(window.location.origin + "/api/product/superb", function(data, status){
    
        const productsEl = document.querySelector(".superb-price-products")
        let res = JSON.stringify(data);
        let theData = JSON.parse(res);

        // USE THE DATA
        let productEl = "";
        const url = window.location.href;
        for(let i = 0; i < theData.length; i++)
        {
            productEl += `
            <div class="superb-price-product">
                <h3>${theData[i].title}</h3>
                <img src="${theData[i].image}" alt="">
                <h2>${theData[i].price}</h2>
            </div>
            `;
        }
        productsEl.innerHTML += productEl;
    });

    // popüler ürünler
    $.get(window.location.origin + "/api/product/popular-chosen", function(data, status){
    
        const productsEl = document.querySelector(".popular-product")
        let res = JSON.stringify(data);
        let theData = JSON.parse(res);

        // USE THE DATA
        let productEl = "";
        const url = window.location.href;
        for(let i = 0; i < theData.length; i++)
        {
            productEl += `
            <a style="display: block;" class="product" href="${url + "detail/" + theData[i].id}">
                <img src="${theData[i].image}" alt="">
                <h4>${theData[i].title}</h4>
                <h3>${theData[i].price}</h3>
            </a>
            `;
        }
        productsEl.innerHTML = productEl;
    });

    // herkes bu ürünlerin peşinde
    $.get(window.location.origin + "/api/product/topseller", function(data, status){
    
    const productsEl = document.querySelector(".topseller-product")
    let res = JSON.stringify(data);
    let theData = JSON.parse(res);

    // USE THE DATA
    let productEl = "";
    const url = window.location.href;
    for(let i = 0; i < theData.length; i++)
    {
        productEl += `
        <a style="display: block;" class="product" href="${url + "detail/" + theData[i].id}">
            <img src="${theData[i].image}" alt="">
            <h4>${theData[i].title}</h4>
            <h3>${theData[i].price}</h3>
        </a>
        `;
    }
    productsEl.innerHTML = productEl;
});


    // giyim
    $.get(window.location.origin + "/api/product/dress", function(data, status){
    
    const productsEl = document.querySelector(".dress-product")
    let res = JSON.stringify(data);
    let theData = JSON.parse(res);

    // USE THE DATA
    let productEl = "";
    const url = window.location.href;
    for(let i = 0; i < theData.length; i++)
    {
        productEl += `
        <a style="display: block;" class="product" href="${url + "detail/" + theData[i].id}">
            <img src="${theData[i].image}" alt="">
            <h4>${theData[i].title}</h4>
            <h3>${theData[i].price}</h3>
        </a>
        `;
    }
    productsEl.innerHTML = productEl;
});


    // popülerlere özel indirimler
    $.get(window.location.origin + "/api/product/popular-discount", function(data, status){
    
    const productsEl = document.querySelector(".popular-discount-product")
    let res = JSON.stringify(data);
    let theData = JSON.parse(res);

    // USE THE DATA
    let productEl = "";
    const url = window.location.href;
    for(let i = 0; i < theData.length; i++)
    {
        productEl += `
        <a style="display: block;" class="product" href="${url + "detail/" + theData[i].id}">
            <img src="${theData[i].image}" alt="">
            <h4>${theData[i].title}</h4>
            <h3>${theData[i].price}</h3>
        </a>
        `;
    }
    productsEl.innerHTML = productEl;
});


    // günlük ihtiyaçlarda topseller
    $.get(window.location.origin + "/api/product/musthave", function(data, status){
    
        const productsEl = document.querySelector(".musthave-product")
        let res = JSON.stringify(data);
        let theData = JSON.parse(res);

        // USE THE DATA
        let productEl = "";
        const url = window.location.href;
        for(let i = 0; i < theData.length; i++)
        {
            productEl += `
            <a style="display: block;" class="product" href="${url + "detail/" + theData[i].id}">
                <img src="${theData[i].image}" alt="">
                <h4>${theData[i].title}</h4>
                <h3>${theData[i].price}</h3>
            </a>
            `;
        }
        productsEl.innerHTML = productEl;
    });
    
};

getData();
