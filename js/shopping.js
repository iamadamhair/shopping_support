var itemlist = document.getElementById("itemlist");

function buildList() {
    'use strict';
    
    //Need to do this in a for loop
    var hrItem = document.createElement("div");
    hrItem.className = "searchrow row";
    
    var imageCol = document.createElement("div");
    imageCol.className = "col-md-4";
    hrItem.appendChild(imageCol);
    
    var productImg = document.createElement("img");
    productImg.className = "productimage";
    productImg.src = "http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/S/1/S1/42/S1-42-alu-gold-sport-cocoa-grid?wid=332&hei=392&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472247759407";
    imageCol.appendChild(productImg);
    
    var productDesc = document.createElement("div");
    productDesc.className = "col-md-4";
    productDesc.innerHTML = "<p>Apple Watch</p>Tracks heart rate<br>App notifications<br>Wireless charging<br>iOS only";
    hrItem.appendChild(productDesc);
    
    var rightCol = document.createElement("div");
    rightCol.className = "col-md-4";
    hrItem.appendChild(rightCol);
    
    var ratings = document.createElement("div");
    ratings.className = "ratingsbox";
    rightCol.appendChild(ratings);
    
    var sites = ["http://amazon.com", "http://apple.com", "http://walmart.com"];
    var siteNames = ["Amazon", "Apple", "Walmart"];
    var i, j;
    
    for (i = 0; i < sites.length; i++) {
        var externalSite = document.createElement("div");
        var siteLink = document.createElement("a");
        siteLink.href = sites[i];
        siteLink.innerHTML = siteNames[i] + " ";
        ratings.appendChild(externalSite);
        externalSite.appendChild(siteLink);
            
        var noStars = 4;
        
        for (j = 0; j < noStars; j++) {
            var star = document.createElement("span");
            star.className = "glyphicon glyphicon-star";  
            externalSite.appendChild(star);
        }
        
        for (j = 0; j < 5 - noStars; j++) {
            var emptyStar = document.createElement("span");
            emptyStar.className = "glyphicon glyphicon-star-empty";  
            externalSite.appendChild(emptyStar);
        }
        
        var externalStoreBreak = document.createElement("br");    
        externalSite.appendChild(externalStoreBreak);
    }
    
    var buttonP = document.createElement("p");
    var button = document.createElement("a");
    button.className = "btn btn-sm btn-orange";
    button.href = "#";
    button.innerHTML = "Add to compare";
    button.role = "button";
    buttonP.appendChild(button);
    rightCol.appendChild(buttonP);
    
    var endHr = document.createElement("hr");
    
    itemlist.appendChild(hrItem);
    itemlist.appendChild(endHr);
}

//window.onload = buildList;