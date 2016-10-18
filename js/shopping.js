var itemlist = document.getElementById("itemlist");
var itemJSON = {"items": [
    {"name": "Apple Watch Series 2 (38mm)", "manufacturer": "Apple", "position":"wrist", "phoneos":"iOS", "externalreview":"https://www.cnet.com/products/apple-watch-series-2/review/", "amazonreview":"", "amazonrating":0, "bbrating":5,"cnetrating":4,"bbprice":369,"amazonprice":"","manufacturerprice":"","image":"http://i-cdn.phonearena.com/images/articles/257191-gallery/BlackCool-Gray-Nike-Sport-Band-38-mm--369-42-mm--399.jpg"},
    
    {"name":"Apple Watch Series 2 (42mm)", "manufacturer":"Apple","position":"wrist", "phoneos":"iOS", "externalreview":"https://www.cnet.com/products/apple-watch-series-2/review/", "amazonreview":"", "amazonrating":0, "bbrating":5,"cnetrating":4,"bbprice":399,"amazonprice":"","manufacturerprice":"","image":"http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/stainless/42-stainless-black-milanese-black-grid?wid=332&hei=392&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472247763547"},
    
    {"name":"LEAF Urban", "manufacturer": "Bellabeat","position": "clip", "phoneos":["iOS","Android"], "externalreview":"http://www.wareable.com/health-and-wellbeing/bellabeat-leaf-urban-review", "amazonreview":0, "amazonrating":0, "bbrating":0,"cnetrating":0,"bbprice":"","amazonprice":"","manufacturerprice":"","image":"https://s3.graphiq.com/sites/default/files/2957/media/images/t2/_6920607.jpg"},
    
    {"name":"Charge 2", "manufacturer":"Fitbit","position":"wrist", "phoneos":["iOS","Android","Windows"], "externalreview":"https://www.cnet.com/products/fitbit-charge-2/review/", "amazonreview":"https://www.amazon.com/Fitbit-Charge-Heart-Fitness-Wristband/product-reviews/B01K9S24EM/ref=cm_cr_arp_d_viewopt_rvwer?ie=UTF8&reviewerType=avp_only_reviews&pageNumber=1", "amazonrating":4, "bbrating":4,"cnetrating":4,"bbprice":149.95,"amazonprice":149.95,"manufacturerprice":"","image":"https://static1.fitbit.com/simple.b-cssdisabled-png.h68bb98f20781d0d17aed743cbeed0d83.pack?items=%2Fcontent%2Fassets%2Fpip%2Fimages%2Fproducts%2Flrn_black_3qtr.png"},
    
    {"name":"Alta", "manufacturer":"Fitbit","position":"wrist", "phoneos":["iOS","Android","Windows"], "externalreview":"https://www.cnet.com/products/fitbit-alta/", "amazonreview":"https://www.amazon.com/Fitbit-Fitness-Tracker-Silver-Black/product-reviews/B01B25PKB0/ref=cm_cr_arp_d_viewopt_rvwer?ie=UTF8&reviewerType=avp_only_reviews&pageNumber=1", "amazonrating":4, "bbrating":5,"cnetrating":4,"bbprice":129.95,"amazonprice":129.86,"manufacturerprice":"","image":"https://i5.walmartimages.com/asr/4dfe5616-edc3-4c7a-8dea-d5aad304e363_1.b3aa42987f0c28c43dd2bcf5d1acb500.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"},
    
    {"name":"Vivoactive HR", "manufacturer":"Garmin","position":"wrist", "phoneos":["iOS","Android","Windows"], "externalreview":"https://www.cnet.com/products/garmin-vivoactive-hr-review/", "amazonreview":"https://www.amazon.com/Garmin-v%C3%ADvoactive-Smart-Watch-Regular/product-reviews/B01BKUB6BA/ref=cm_cr_arp_d_viewopt_rvwer?ie=UTF8&reviewerType=avp_only_reviews&pageNumber=1", "amazonrating":4, "bbrating":4,"cnetrating":4,"bbprice":249.99,"amazonprice":249.99,"manufacturerprice":"","image":"https://static.garmin.com/en/products/010-01605-03/g/all-heart.jpg"},
    
    {"name":"Vivoactive HR+", "manufacturer":"Garmin","position":"wrist", "phoneos":["iOS","Android","Windows"], "externalreview":"https://www.cnet.com/products/garmin-vivosmart-hr-plus/", "amazonreview":"https://www.amazon.com/Garmin-v%C3%ADvosmart-Regular-Activity-Tracker/product-reviews/B01DOJDR4O/ref=cm_cr_arp_d_viewopt_rvwer?ie=UTF8&reviewerType=avp_only_reviews&pageNumber=1", "amazonrating":4, "bbrating":4,"cnetrating":"","bbprice":199.99,"amazonprice":199.99,"manufacturerprice":"","image":"https://static.garmincdn.com/en/products/010-01955-30/v/cf-lg.jpg"}
]};

function buildList() {
    'use strict';
    
    var itemId = "item1", thisItem = 0;
    
    for (thisItem = 0; thisItem < itemJSON.items.length; thisItem++) {
        var hrItem = document.createElement("div");
        hrItem.className = "searchrow row";
        hrItem.id = itemId;

        var imageCol = document.createElement("div");
        imageCol.className = "col-md-4";
        hrItem.appendChild(imageCol);

        var productImg = document.createElement("img");
        productImg.className = "productimage";
        productImg.src = itemJSON.items[thisItem].image;
        imageCol.appendChild(productImg);

        var productDesc = document.createElement("div");
        productDesc.className = "col-md-4";
        productDesc.innerHTML = "<p>"+itemJSON.items[thisItem].name+"</p>";
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

}

window.onload = buildList;