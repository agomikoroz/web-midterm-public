const getData = function(){

    const currentUrl = window.location.href;

    id = currentUrl.split("/")[currentUrl.split("/").length-1];

    $.get(window.location.origin + "/api/productById/"+id, function(data, status){
    
        const img = document.getElementById("product-img");
        const title = document.getElementById("title");
        const brand = document.getElementById("brand");
        const price = document.getElementById("price");
        const category = document.getElementById("category");

        let res = JSON.stringify(data);
        let theData = JSON.parse(res);

        // USE THE DATA
        img.src = theData[0].image;
        title.innerHTML = theData[0].title;
        brand.innerHTML = theData[0].brand;
        price.innerHTML = theData[0].price + "<span>TL</span>";
        category.innerHTML = theData[0].category;

    });

    $.get(window.location.origin + "/api/description/"+id, function(data, status){
    
    const productDescription = document.getElementById("description");

    let res = JSON.stringify(data);
    let theData = JSON.parse(res);

    console.log(theData);

    // USE THE DATA
    let tableRows = "";
    for(let i = 0; i < theData.length; i+=2)
    {
        tableRows += "<tr>";
        tableRows += `
        <td>${theData[i].title}</td>
        <td>${theData[i].info}</td>
        `;
        if(theData[i+1] != null)
        {
            tableRows += `
            <td>${theData[i+1].title}</td>
            <td>${theData[i+1].info}</td>
            `;
        }
        tableRows += "</tr>";
    }

    productDescription.innerHTML = "<table>"+tableRows+"</table>";

});
    
};


getData();