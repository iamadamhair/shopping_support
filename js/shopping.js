var itemlist = document.getElementById("itemlist");
var itemJSON = {"items": [
    {"itemid":1,
     "name": "Apple Watch Series 2 (38mm)", 
     "manufacturer": "Apple",
     "position": "wrist", 
     "phoneos": "iOS",
     "fitnessmetrics":{
         "heartrate":true, 
         "calories":true,
         "steps":true,
         "activity":true,
         "sleep":false,
         "stairs":false,
         "unique":""
     },
     "features":{
         "waterresistant":true,
         "wifi":true,
         "gps":true,
         "unique":""
     },
     "externalreview":"https://www.cnet.com/products/apple-watch-series-2/review/", 
     "amazonreview":"", 
     "amazonrating":0, 
     "bbrating":5,
     "cnetrating":4,
     "bbprice":369,
     "amazonprice":0,
     "manufacturerprice":0,
     "image":"http://i-cdn.phonearena.com/images/articles/257191-gallery/BlackCool-Gray-Nike-Sport-Band-38-mm--369-42-mm--399.jpg"
    },
    {"itemid":2,
     "name":"Apple Watch Series 2 (42mm)", 
     "manufacturer":"Apple",
     "position":"wrist", 
     "phoneos":"iOS",
     "fitnessmetrics":{
         "heartrate":true, 
         "calories":true,
         "steps":true,
         "activity":true,
         "sleep":false,
         "stairs":false,
         "unique":""
     },
     "features":{
         "waterresistant":false,
         "wifi":true,
         "gps":true,
         "unique":""
     },
     "externalreview":"https://www.cnet.com/products/apple-watch-series-2/review/", 
     "amazonreview":0, 
     "amazonrating":0, 
     "bbrating":5,
     "cnetrating":4,
     "bbprice":399,
     "amazonprice":0,
     "manufacturerprice":0,
     "image":"http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/stainless/42-stainless-black-milanese-black-grid?wid=332&hei=392&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472247763547"
    },
    {"itemid":3,
     "name":"LEAF Urban", 
     "manufacturer":"Bellabeat",
     "position":"clip", 
     "phoneos":["iOS","Android"],
     "fitnessmetrics":{
         "heartrate":false, 
         "calories":true,
         "steps":true,
         "activity":true,
         "sleep":true,
         "stairs":false,
         "unique":"Monthly cycle tracking"
     },
     "features":{
         "waterresistant":false,
         "wifi":false,
         "gps":false,
         "unique":""
     },
     "externalreview":"http://www.wareable.com/health-and-wellbeing/bellabeat-leaf-urban-review", 
     "amazonreview":0, 
     "amazonrating":0, 
     "bbrating":0, 
     "cnetrating":0,
     "bbprice":0,
     "amazonprice":0,
     "manufacturerprice":0,     "image":"https://s3.graphiq.com/sites/default/files/2957/media/images/t2/_6920607.jpg"
    },
    
    {"itemid":4,
     "name":"Charge 2",
     "manufacturer":"Fitbit",
     "position":"wrist",
     "phoneos":["iOS","Android","Windows"],
     "fitnessmetrics":{
         "heartrate":true, 
         "calories":true,
         "steps":true,
         "activity":true,
         "sleep":true,
         "stairs":false,
         "unique":""
     },
     "features":{
         "waterresistant":true,
         "wifi":false,
         "gps":false,
         "unique":""
     },
     "externalreview":"https://www.cnet.com/products/fitbit-charge-2/review/",
     "amazonreview":"https://www.amazon.com/Fitbit-Charge-Heart-Fitness-Wristband/product-reviews/B01K9S24EM/ref=cm_cr_arp_d_viewopt_rvwer?ie=UTF8&reviewerType=avp_only_reviews&pageNumber=1",
     "amazonrating":4,
     "bbrating":4,
     "cnetrating":4,
     "bbprice":149.95,
     "amazonprice":149.95,
     "manufacturerprice":0,
     "image":"https://static1.fitbit.com/simple.b-cssdisabled-png.h68bb98f20781d0d17aed743cbeed0d83.pack?items=%2Fcontent%2Fassets%2Fpip%2Fimages%2Fproducts%2Flrn_black_3qtr.png"
    },
    
    {"itemid":5,
     "name":"Alta",
     "manufacturer":"Fitbit",
     "position":"wrist",
     "phoneos":["iOS","Android","Windows"],
     "fitnessmetrics":{
         "heartrate":true, 
         "calories":true,
         "steps":true,
         "activity":true,
         "sleep":true,
         "stairs":false,
         "unique":""
     },
     "features":{
         "waterresistant":true,
         "wifi":false,
         "gps":false,
         "unique":""
     },
     "externalreview":"https://www.cnet.com/products/fitbit-alta/",
     "amazonreview":"https://www.amazon.com/Fitbit-Fitness-Tracker-Silver-Black/product-reviews/B01B25PKB0/ref=cm_cr_arp_d_viewopt_rvwer?ie=UTF8&reviewerType=avp_only_reviews&pageNumber=1",
     "amazonrating":4,
     "bbrating":5,
     "cnetrating":4,
     "bbprice":129.95,
     "amazonprice":129.86,
     "manufacturerprice":0,
     "image":"https://i5.walmartimages.com/asr/4dfe5616-edc3-4c7a-8dea-d5aad304e363_1.b3aa42987f0c28c43dd2bcf5d1acb500.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
    },
    
    {"itemid":6,
     "name":"Vivoactive HR",
     "manufacturer":"Garmin",
     "position":"wrist",
     "phoneos":["iOS","Android","Windows"],
     "fitnessmetrics":{
         "heartrate":true, 
         "calories":true,
         "steps":true,
         "activity":true,
         "sleep":false,
         "stairs":true,
         "unique":""
     },
     "features":{
         "waterresistant":true,
         "wifi":false,
         "gps":true,
         "unique":""
     },
     "externalreview":"https://www.cnet.com/products/garmin-vivoactive-hr-review/",
     "amazonreview":"https://www.amazon.com/Garmin-v%C3%ADvoactive-Smart-Watch-Regular/product-reviews/B01BKUB6BA/ref=cm_cr_arp_d_viewopt_rvwer?ie=UTF8&reviewerType=avp_only_reviews&pageNumber=1",
     "amazonrating":4,
     "bbrating":4,
     "cnetrating":4,
     "bbprice":249.99,
     "amazonprice":249.99,
     "manufacturerprice":0,
     "image":"https://static.garmin.com/en/products/010-01605-03/g/all-heart.jpg"
    },
    
    {"itemid":7,
     "name":"Vivoactive HR+",
     "manufacturer":"Garmin",
     "position":"wrist",
     "phoneos":["iOS","Android","Windows"],
     "fitnessmetrics":{
         "heartrate":true, 
         "calories":true,
         "steps":true,
         "activity":true,
         "sleep":false,
         "stairs":true,
         "unique":""
     },
     "features":{
         "waterresistant":true,
         "wifi":false,
         "gps":true,
         "unique":""
     },
     "externalreview":"https://www.cnet.com/products/garmin-vivosmart-hr-plus/",
     "amazonreview":"https://www.amazon.com/Garmin-v%C3%ADvosmart-Regular-Activity-Tracker/product-reviews/B01DOJDR4O/ref=cm_cr_arp_d_viewopt_rvwer?ie=UTF8&reviewerType=avp_only_reviews&pageNumber=1",
     "amazonrating":4,
     "bbrating":4,
     "cnetrating":0,
     "bbprice":199.99,
     "amazonprice":199.99,
     "manufacturerprice":0,
     "image":"https://static.garmincdn.com/en/products/010-01955-30/v/cf-lg.jpg"
    },
    
    {"itemid":8,
     "name":"UP3",
     "manufacturer":"Jawbone",
     "position":"wrist",
     "phoneos":["iOS","Android","Windows"],
     "fitnessmetrics":{
         "heartrate":true, 
         "calories":true,
         "steps":true,
         "activity":true,
         "sleep":true,
         "stairs":true,
         "unique":""
     },
     "features":{
         "waterresistant":true,
         "wifi":false,
         "gps":false,
         "unique":"Wireless sync"
     },
     "externalreview":"https://www.cnet.com/products/jawbone-up3/review/",
     "amazonreview":"",
     "amazonrating":3,
     "bbrating":0,
     "cnetrating":3,
     "bbprice":0,
     "amazonprice":58.25,
     "manufacturerprice":0,
     "image":"https://s3.amazonaws.com/Inspiration-Images/wearable_gear_images/photos/000/000/112/large/up3.jpg?1433360116"
    },
    
    {"itemid":9,
     "name":"Ray",
     "manufacturer":"Misfit",
     "position":"wrist",
     "phoneos":["iOS","Android","Windows"],
     "fitnessmetrics":{
         "heartrate":true, 
         "calories":true,
         "steps":true,
         "activity":true,
         "sleep":true,
         "stairs":false,
         "unique":""
     },
     "features":{
         "waterresistant":true,
         "wifi":false,
         "gps":false,
         "unique":""
     },
     "externalreview":"https://www.cnet.com/products/misfit-ray-review/",
     "amazonreview":"",
     "amazonrating":3,
     "bbrating":4,
     "cnetrating":3,
     "bbprice":99.99,
     "amazonprice":99.99,
     "manufacturerprice":0,
     "image":"https://s3.amazonaws.com/Inspiration-Images/wearable_gear_images/photos/000/000/447/large/misfit_ray.jpg?1460676426"
    },
    
    {"itemid":10,
     "name":"Fit2",
     "manufacturer":"Samsung",
     "position":"wrist",
     "phoneos":["iOS","Android"],
     "fitnessmetrics":{
         "heartrate":true, 
         "calories":true,
         "steps":true,
         "activity":true,
         "sleep":true,
         "stairs":true,
         "unique":""
     },
     "features":{
         "waterresistant":true,
         "wifi":false,
         "gps":true,
         "unique":""
     },
     "externalreview":"https://www.cnet.com/products/samsung-gear-fit-2/",
     "amazonreview":"",
     "amazonrating":4,
     "bbrating":4,
     "cnetrating":3,
     "bbprice":149.99,
     "amazonprice":149.00,
     "manufacturerprice":0,
     "image":"https://i5.walmartimages.com/asr/7a6f11d6-2998-4c5e-a15e-b65cb540653b_1.aed97f8b8089b8457c61202b0f76d09f.jpeg"
    },
    
    {"itemid":11,
     "name":"Now",
     "manufacturer":"Moov",
     "position":"clip",
     "phoneos":["iOS","Android"],
     "fitnessmetrics":{
         "heartrate":false, 
         "calories":true,
         "steps":true,
         "activity":true,
         "sleep":false,
         "stairs":false,
         "unique":""
     },
     "features":{
         "waterresistant":true,
         "wifi":false,
         "gps":false,
         "unique":""
     },
     "externalreview":"https://www.cnet.com/products/samsung-gear-fit-2/",
     "amazonreview":"",
     "amazonrating":4,
     "bbrating":4,
     "cnetrating":3,
     "bbprice":59.99,
     "amazonprice":59.00,
     "manufacturerprice":0,
     "image":"http://media.apcmag.com/wp-content/uploads/sites/20/2016/02/moovnow_aquablue_isometric.jpg"
    },
    
    {"itemid":12,
     "name":"Mi Band Pulse",
     "manufacturer":"Xiaomi",
     "position":"clip",
     "phoneos":["iOS","Android"],
     "fitnessmetrics":{
         "heartrate":true, 
         "calories":true,
         "steps":true,
         "activity":true,
         "sleep":true,
         "stairs":false,
         "unique":""
     },
     "features":{
         "waterresistant":false,
         "wifi":false,
         "gps":false,
         "unique":""
     },
     "externalreview":"https://www.cnet.com/products/samsung-gear-fit-2/",
     "amazonreview":"",
     "amazonrating":3,
     "bbrating":0,
     "cnetrating":0,
     "bbprice":0,
     "amazonprice":21.99,
     "manufacturerprice":0,
     "image":"http://xiaomi-mi.com/uploads/CatalogueImage/Mi_Band_Pulse3_14411_1447167856_13941_1447317794.jpg"
    }
]};
var compareList = [];
var filterList = [];
var compareButton = document.getElementById("comparebutton");
var resetButton = document.getElementById("resetbutton");
compareButton.onclick = function() {bakeCookie();};
var allForms = document.forms;
var formNames = ["priceform", "ratingform", "fitnessform", "featureform", "brandform"];
var filterButton = document.getElementById("filterbutton");
filterButton.onclick = function() {filterResults(); return false;};
var heartrate = document.getElementById("heartrate"), calories = document.getElementById("calories"), steps = document.getElementById("steps"), activity = document.getElementById("activity"), sleep = document.getElementById("sleep"), stairs = document.getElementById("stairs"), waterresistant = document.getElementById("waterresistant"), notifications = document.getElementById("notifications"), wifi = document.getElementById("wifi"), gps = document.getElementById("gps"), apple = document.getElementById("apple"), bellabeat = document.getElementById("bellabeat"), fitbit = document.getElementById("fitbit"), garmin = document.getElementById("garmin"), jawbone = document.getElementById("jawbone"), misfit = document.getElementById("misfit"), moov = document.getElementById("moov"), samsung = document.getElementById("samsung"), xiaomi = document.getElementById("xiaomi"), threestar = document.getElementById("3star"), fourstar = document.getElementById("4star"), fivestar = document.getElementById("5star");
var minprice = document.getElementById("minprice"), maxprice = document.getElementById("maxprice");
var priceform = document.getElementById("priceform"), ratingform = document.getElementById("ratingform"), fitnessform = document.getElementById("fitnessform"), featureform = document.getElementById("featureform"), brandform = document.getElementById("brandform");

function buildList(itemstobuild) {
    'use strict';
    
    if (itemstobuild.length == 0) {
        var hrItem = document.createElement("div");
        hrItem.className = "searchrow row";

        var imageCol = document.createElement("div");
        imageCol.className = "col-md-4";
        hrItem.appendChild(imageCol);
        var noResults = document.createElement("div");
        noResults.className = "col-md-4";
        noResults.innerHTML = "<p>No Results</p>"
        hrItem.appendChild(noResults);  
        hrItem.appendChild(imageCol);
        itemlist.appendChild(hrItem);
        return;
    }
        
    
    var thisItem = 0;
    
    for (thisItem = 0; thisItem < itemstobuild.length; thisItem++) {
        var hrItem = document.createElement("div");
        hrItem.className = "searchrow row";
        hrItem.id = itemJSON.items[itemstobuild[thisItem]].itemid;

        var imageCol = document.createElement("div");
        imageCol.className = "col-md-4";
        hrItem.appendChild(imageCol);

        var productImg = document.createElement("img");
        productImg.className = "productimage";
        productImg.src = itemJSON.items[itemstobuild[thisItem]].image;
        imageCol.appendChild(productImg);

        var productDesc = document.createElement("div");
        productDesc.className = "col-md-4";
        productDesc.innerHTML = "<p>"+itemJSON.items[itemstobuild[thisItem]].name+"</p>";
        hrItem.appendChild(productDesc);

        var manufacturer = document.createElement("h4");
        manufacturer.innerHTML = itemJSON.items[itemstobuild[thisItem]].manufacturer;
        productDesc.appendChild(manufacturer);
        
        var rightCol = document.createElement("div");
        rightCol.className = "col-md-4";
        hrItem.appendChild(rightCol);

        var ratings = document.createElement("div");
        ratings.className = "ratingsbox";
        rightCol.appendChild(ratings);

        var sites = ["http://amazon.com", "http://bestbuy.com"];
        var siteNames = ["Amazon", "Best Buy"];
        var siteratings = ["amazonrating", "bbrating"];
        var siteprices = ["amazonprice", "bbprice"];
        var i, j;

        for (i = 0; i < sites.length; i++) {
            var externalSite = document.createElement("div");
            var siteLink = document.createElement("a");
            siteLink.href = sites[i];
            siteLink.innerHTML = siteNames[i] + " ";
            ratings.appendChild(externalSite);
            externalSite.appendChild(siteLink);

            var noStars = itemJSON.items[itemstobuild[thisItem]][siteratings[i]];

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
            var price = document.createElement("p");
            var money = itemJSON.items[itemstobuild[thisItem]][siteprices[i]];
            if (money == 0) {
                price.innerHTML = "NA";
            }
            else {
                price.innerHTML = "$" + itemJSON.items[itemstobuild[thisItem]][siteprices[i]];
            }
            externalSite.appendChild(price);
        }

        var buttonP = document.createElement("p");
        var button = document.createElement("a");
        button.className = "btn btn-sm btn-orange addcompare";
        button.innerHTML = "Add to compare";
        button.role = "button";
        button.href = "#";
        button.onclick = function() {addToList(this.id); return false;};
        button.id = itemJSON.items[itemstobuild[thisItem]].itemid + "button"
        buttonP.appendChild(button);
        rightCol.appendChild(buttonP);

        var endHr = document.createElement("hr");

        itemlist.appendChild(hrItem);
        itemlist.appendChild(endHr);
        
    }

}

function filterResults() {
    while (itemlist.lastChild) {
        itemlist.removeChild(itemlist.lastChild);
    }
    var itemstobuild = [0,1,2,3,4,5,6,7,8,9,10,11];
    
    var thisFilter = 0, thisItem = 0, filter = "";
    var brands = ["apple", "bellabeat", "fitbit", "garmin", "jawbone", "misfit", "moov", "samsung", "xiaomi"];
    var fitness = ["heartrate", "calories", "steps", "activity", "sleep", "stairs"];
    var features = ["waterresistant", "notifications", "wifi", "gps"];
    var ratings = ["3star", "4star", "5star"];
    var priceboxes = ["minprice", "maxprice"];
    
    for (thisFilter; thisFilter < filterList.length; thisFilter++) {
        filter = filterList[thisFilter];
        
        if (brands.indexOf(filter) >= 0) {
            temp = searchItems("manufacturer", filter);
        }
        else if (fitness.indexOf(filter) >= 0) {
            temp = searchItems("fitnessmetrics", filter);
        }
        else if (features.indexOf(filter) >= 0) {
            temp = searchItems("features", filter);
        }
        else if (ratings.indexOf(filter) >= 0) {
            temp = searchItems("ratings", filter);
        }
        else if (priceboxes.indexOf(filter) >= 0) {
            temp = searchItems("prices", filter);
        }
        itemstobuild = itemstobuild.filter(function(n) {
            return temp.indexOf(n) != -1;
        });
    }
    buildList(itemstobuild);
}

function searchItems(scope, keyword) {
    var resultList = [];
    
    var thisItem = 0;
    
    if (scope == "manufacturer") {
        for (thisItem; thisItem < itemJSON.items.length; thisItem++) {
            if (itemJSON.items[thisItem].manufacturer.toLowerCase() == keyword) {
                if (resultList.indexOf(thisItem) < 0) {
                    resultList.push(thisItem);
                }
            }
        }   
    }
    else if (scope == "fitnessmetrics") {
        for (thisItem; thisItem < itemJSON.items.length; thisItem++) {
            if (itemJSON.items[thisItem].fitnessmetrics[keyword]) {
                if (resultList.indexOf(thisItem) < 0) {
                    resultList.push(thisItem);
                }
            }
        }
    }
    else if (scope == "features") {
        for (thisItem; thisItem < itemJSON.items.length; thisItem++) {
            if (itemJSON.items[thisItem].features[keyword]) {
                if (resultList.indexOf(thisItem) < 0) {
                    resultList.push(thisItem);
                }
            }
        }
    }
    else if (scope == "ratings") {
        for (thisItem; thisItem < itemJSON.items.length; thisItem++) {
            // Compare all ratings
            var bbrating = itemJSON.items[thisItem].bbrating;
            var amazonrating = itemJSON.items[thisItem].amazonrating;
            var cnetrating = itemJSON.items[thisItem].cnetrating;
            var minRating = nonZeroMin(bbrating, amazonrating, cnetrating);
            if (minRating >= keyword[0]) {
                if (resultList.indexOf(thisItem) < 0) {
                    resultList.push(thisItem);
                }
            }
        }
    }
    else if (scope == "prices") {
        for (thisItem; thisItem < itemJSON.items.length; thisItem++) {
            // Compare all ratings
            var bbprice = itemJSON.items[thisItem].bbprice;
            var amazonprice = itemJSON.items[thisItem].amazonprice;
            var manufacturerprice = itemJSON.items[thisItem].manufacturerprice;
            var minimumprice = nonZeroMin(bbprice, amazonprice, manufacturerprice);
            var maximumprice = Math.max(bbprice, amazonprice, manufacturerprice);
            if (keyword == "minprice") {
                if (minprice.value < minimumprice) {
                    if (resultList.indexOf(thisItem) < 0) {
                        resultList.push(thisItem);
                    } 
                }
            }
            else {
                if (maxprice.value > maximumprice) {
                    if (resultList.indexOf(thisItem) < 0) {
                        resultList.push(thisItem);
                    } 
                }
            }
        }
    }
    
    return resultList;
}

function nonZeroMin() {
    var args = Array.prototype.slice.call(arguments);
    args.sort(function(a, b) {
        if(a === null || isNaN(a) || a === 0) return 1;
        if(b === null || isNaN(b) || b === 0) return -1
        return a-b;
    });
    return args[0];
}

function addToList(itemID) {
    itemID = itemID.split('b');
    itemID = itemID[0];
    if (compareList.indexOf(itemID) < 0) {
        compareList.push(itemID);
    }
    var tempButton = document.getElementById(itemID+"button");
    tempButton.classList.add("disabled");
    compareButton.innerHTML = "Compare " + compareList.length + " selected items";
    compareButton.classList.remove("disabled");
}

function bakeCookie() {
    var cookieDough = "items=", i = 0;
    for (i; i < compareList.length-1; i++) {
        cookieDough += compareList[i] + ","
    }
    cookieDough += compareList[compareList.length-1]+';';
    document.cookie = cookieDough;
}

function burnCookies() {
    document.cookie = "items=; expires=-1;";
}

function setButton() {
    compareButton.innerHTML = "Compare 0 selected items";
    compareButton.classList.add("disabled");
    
}

function setup() {
    setButton();
    buildList([0,1,2,3,4,5,6,7,8,9,10,11]);
    resetButton.onclick = function() {resetSearch(); return false;};
    configureFilters();
}

function resetSearch() {
    compareList = [];
    filterList = [];
    setButton();
    var addCompareButtons = document.getElementsByClassName("addcompare"), i = 0;
    for (i; i<addCompareButtons.length; i++) {
        addCompareButtons[i].classList.remove("disabled");
    }
    burnCookies();
    filterButton.classList.add("disabled");
    configureFilters();
    while (itemlist.lastChild) {
        itemlist.removeChild(itemlist.lastChild);
    }
    buildList([0,1,2,3,4,5,6,7,8,9,10,11]);
}

function configureFilters() {
    heartrate.checked = false;
    calories.checked = false;
    steps.checked = false;
    activity.checked = false;
    sleep.checked = false;
    stairs.checked = false;
    waterresistant.checked = false;
    notifications.checked = false;
    wifi.checked = false;
    gps.checked = false;
    apple.checked = false;
    bellabeat.checked = false;
    fitbit.checked = false;
    garmin.checked = false;
    jawbone.checked = false;
    misfit.checked = false;
    moov.checked = false;
    samsung.checked = false;
    xiaomi.checked = false;
    threestar.checked = false;
    fourstar.checked = false;
    fivestar.checked = false;
    minprice.value = "";
    maxprice.value = "";
    
    minprice.oninput = function() {priceFilter(this.id)};
    maxprice.oninput = function() {priceFilter(this.id)};
    heartrate.onclick = function() {addFilter(this.id)};
    calories.onclick = function() {addFilter(this.id)};
    steps.onclick = function() {addFilter(this.id)};
    activity.onclick = function() {addFilter(this.id)};
    sleep.onclick = function() {addFilter(this.id)};
    stairs.onclick = function() {addFilter(this.id)};
    waterresistant.onclick = function() {addFilter(this.id)};
    notifications.onclick = function() {addFilter(this.id)};
    wifi.onclick = function() {addFilter(this.id)};
    gps.onclick = function() {addFilter(this.id)};
    apple.onclick = function() {addFilter(this.id)};
    bellabeat.onclick = function() {addFilter(this.id)};
    fitbit.onclick = function() {addFilter(this.id)};
    garmin.onclick = function() {addFilter(this.id)};
    jawbone.onclick = function() {addFilter(this.id)};
    misfit.onclick = function() {addFilter(this.id)};
    moov.onclick = function() {addFilter(this.id)};
    samsung.onclick = function() {addFilter(this.id)};
    xiaomi.onclick = function() {addFilter(this.id)};
    threestar.onclick = function() {addFilter(this.id)};
    fourstar.onclick = function() {addFilter(this.id)};
    fivestar.onclick = function() {addFilter(this.id)};
}

function priceFilter(priceBox) {
    if (priceBox == "minprice") {
        if (minprice.value != null && minprice.value.trim() !="") {
            if (filterList.indexOf(priceBox) < 0){
                filterList.push(priceBox);
            }
        }
        else {
            if (filterList.indexOf(priceBox) >= 0){
                filterList.splice(filterList.indexOf(priceBox),1);
            }
        }
    }
    else {
        if (minprice.value != null && maxprice.value.trim() != "") {
            if (filterList.indexOf(priceBox) < 0){
                filterList.push(priceBox);
            }
        }
        else {
            if (filterList.indexOf(priceBox) >= 0){
                filterList.splice(filterList.indexOf(priceBox),1);
            }
        }
    }
    
    if (filterList.length > 0) {
        filterButton.classList.remove("disabled");
    }
    else {
        filterButton.classList.add("disabled");
    }
}

function addFilter(filterName) {
    if (filterList.indexOf(filterName) < 0) {
        filterList.push(filterName);
    }
    else {
        filterList.splice(filterList.indexOf(filterName),1);
    }
    if (filterList.length > 0) {
        filterButton.classList.remove("disabled");
    }
    else {
        filterButton.classList.add("disabled");
    }
    
}

window.onload = setup;