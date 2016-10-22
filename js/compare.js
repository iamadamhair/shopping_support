var itemTable = document.getElementById("imagetable");
var featureTable = document.getElementById("featuretable");
var itemData = {"items": [
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
         "unique":"Tracks menstrual cycle"
     },
     "features":{
         "waterresistant":false,
         "wifi":false,
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

var dropdown = document.getElementById("featuredropdown");

var shownFeatures = [0, 4, 5];

var featureIndices = [0,1,2,3,4,5,6,7,8,9,10,11];
var featureNames = ["heartrate","calories","steps","activity","sleep","stairs","unique","waterresistant","wifi","gps","unique"];
var featureTitles = {"fitnessmetrics":{
         "heartrate": "Heart Rate", 
         "calories": "Calorie Tracking",
         "steps": "Step Count",
         "activity": "Activity Level",
         "sleep": "Sleep Monitoring",
         "stairs": "Stairs climbed",
         "unique": "Unique Fitness Feature"
     },
     "features":{
         "waterresistant": "Water Resistant",
         "wifi": "WiFi",
         "gps": "GPS",
         "unique": "Unique Feature"
     }};


function buildTable() {
    'use strict';
    
    var compareList = readCookie("items");
    if (!compareList) {
        return false;
    }
    compareList = compareList.split(',');
    var tbody = document.createElement("tbody"), tableRow = document.createElement("tr"), emptyCol = document.createElement("td");
    
    itemTable.appendChild(tbody);
    itemTable.appendChild(tableRow);
    itemTable.appendChild(emptyCol);
    
    var thisItem = 0;
    
    // Add images. Need to decide how to transfer item ids from shopping
    for (thisItem; thisItem < compareList.length; thisItem++) {
        var thisCol = document.createElement("td");
        var thisImage = document.createElement("img");
        
        thisImage.src = itemData.items[compareList[thisItem]-1].image;
        thisImage.className = "productimage";
        
        thisCol.appendChild(thisImage);
        itemTable.appendChild(thisCol);
    }
    // Can access properties programmatically with brackets bar = 'image'; img = foo[bar];
    
    var tableHead = document.createElement("thead"), tableRow = document.createElement("tr"), featureCol = document.createElement("th");
    featureCol.innerHTML = "Feature";
    
    tableHead.appendChild(tableRow);
    tableRow.appendChild(featureCol);
    featureTable.appendChild(tableHead);
    
    var tableBody = document.createElement("tbody");
    tableBody.id = "comptablebody";
    featureTable.appendChild(tableBody);
    
    // Add names
    for (thisItem = 0; thisItem < compareList.length; thisItem++) {
        var itemName = document.createElement("th");
        itemName.innerHTML = itemData.items[compareList[thisItem]-1].name;
        
        tableRow.appendChild(itemName);
    }
    
    // Add features
    var compareFeatures = ["heartrate","sleep","stairs"];
    var thisFeature = 0;
    for (thisFeature; thisFeature < compareFeatures.length; thisFeature++) {
        var thisRow = document.createElement("tr"), rowHead = document.createElement("th");
        rowHead.scope = "row";
        rowHead.innerHTML = featureTitles.fitnessmetrics[compareFeatures[thisFeature]];
        thisRow.appendChild(rowHead);
        
        for (thisItem = 0; thisItem < compareList.length; thisItem++) {
            var itemFeature = document.createElement("td");
            var featureBool = itemData.items[compareList[thisItem]-1].fitnessmetrics[compareFeatures[thisFeature]];
            if (featureBool) {
                itemFeature.innerHTML = "Yes";
            }
            else {
                itemFeature.innerHTML = "No";
            }

            thisRow.appendChild(itemFeature);
        }  
        tableBody.appendChild(thisRow);
    }
    featureTable.appendChild(tableBody);
    
}

function loadCookies() {
    var cookie = document.cookie.split(';');
}

function addRow(featureID) {
    var compareList = readCookie("items");
    if (!compareList) {
        return false;
    }
    compareList = compareList.split(',');
    
    featureID = featureID.split("f");
    featureID = featureID[0];
    var tableBody = document.getElementById("comptablebody");

    var thisRow = document.createElement("tr"), rowHead = document.createElement("th");
    rowHead.scope = "row";
    if (featureID < 7) {
        rowHead.innerHTML = featureTitles.fitnessmetrics[featureNames[featureID]];  
    }
    else {
        rowHead.innerHTML = featureTitles.features[featureNames[featureID]];
    }
    
    thisRow.appendChild(rowHead);

    for (thisItem = 0; thisItem < compareList.length; thisItem++) {
        var itemFeature = document.createElement("td");
        if (featureID < 7 && featureID != 6) {
            var featureBool = itemData.items[compareList[thisItem]-1].fitnessmetrics[featureNames[featureID]];   
        }
        else if (featureID != 10) {
            var featureBool = itemData.items[compareList[thisItem]-1].features[featureNames[featureID]];
        }
        if (featureID != 6 && featureID != 10) {
            if (featureBool) {
                itemFeature.innerHTML = "Yes";
            }
            else {
                itemFeature.innerHTML = "No";
            }   
        }
        else if (featureID == 6) {
            itemFeature.innerHTML = itemData.items[compareList[thisItem]-1].fitnessmetrics["unique"];
        }
        else {
            itemFeature.innerHTML = itemData.items[compareList[thisItem]-1].features["unique"];
        }
        

        thisRow.appendChild(itemFeature);
    }  
    tableBody.appendChild(thisRow);
    var oldChild = document.getElementById(featureID+"listitem");
    dropdown.removeChild(oldChild);
}

function buildDropdown() {
    var i = 0;
    for (i; i < featureNames.length; i++) {
        if (shownFeatures.indexOf(i) < 0) {
            if (i < 7) {
                var featureListItem = document.createElement("li");
                featureListItem.id = i + "listitem";
                var featureName = document.createElement("a");
                featureName.href = "#";
                featureName.id = i + "feature";
                featureName.onclick = function() {addRow(this.id); return false;}
                featureName.innerHTML = featureTitles.fitnessmetrics[featureNames[i]];

                featureListItem.appendChild(featureName);
                dropdown.appendChild(featureListItem);   
            }
            else {
                var featureListItem = document.createElement("li");
                featureListItem.id = i + "listitem";
                var featureName = document.createElement("a");
                featureName.href = "#";
                featureName.id = i + "feature";
                featureName.onclick = function() {addRow(this.id); return false;}
                featureName.innerHTML = featureTitles.features[featureNames[i]];

                featureListItem.appendChild(featureName);
                dropdown.appendChild(featureListItem);   
            } 
        }
        
    }
    
}

function readCookie(name) {
    var attributeName = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(attributeName) == 0) return c.substring(attributeName.length,c.length);
    }
    return null;
}


function setup() {
    buildTable();
    buildDropdown();
}

window.onload = setup;