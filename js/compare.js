var itemTable = document.getElementById("imagetable");
var featureTable = document.getElementById("featuretable");
var itemData = {"items": [
    {"name": "Apple Watch Series 2 (38mm)", 
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
    {"name":"Apple Watch Series 2 (42mm)", 
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
    {"name":"LEAF Urban", 
     "manufacturer":"Bellabeat",
     "position":"clip", 
     "phoneos":["iOS","Android"],
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
     "externalreview":"http://www.wareable.com/health-and-wellbeing/bellabeat-leaf-urban-review", 
     "amazonreview":0, 
     "amazonrating":0, 
     "bbrating":0, 
     "cnetrating":0,
     "bbprice":0,
     "amazonprice":0,
     "manufacturerprice":0,     "image":"https://s3.graphiq.com/sites/default/files/2957/media/images/t2/_6920607.jpg"
    }
]};
var featureTitles = {"fitnessmetrics":{
         "heartrate": "Heart Rate", 
         "calories": "Calorie Tracking",
         "steps": "Step Count",
         "activity": "Activity Level",
         "sleep": "Sleep Monitoring",
         "stairs": "Stairs climbed",
         "unique": "Unique Feature"
     },
     "features":{
         "waterresistant": "Water Resistant",
         "wifi": "WiFi",
         "gps": "GPS",
         "unique": "Unique Feature"
     }};

function buildTable() {
    'use strict';
    
    var tbody = document.createElement("tbody"), tableRow = document.createElement("tr"), emptyCol = document.createElement("td");
    
    itemTable.appendChild(tbody);
    itemTable.appendChild(tableRow);
    itemTable.appendChild(emptyCol);
    
    var thisItem = 0;
    
    // Add images. Need to decide how to transfer item ids from shopping
    for (thisItem; thisItem < itemData.items.length; thisItem++) {
        var thisCol = document.createElement("td");
        var thisImage = document.createElement("img");
        
        thisImage.src = itemData.items[thisItem].image;
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
    featureTable.appendChild(tableBody);
    
    // Add names
    for (thisItem = 0; thisItem < itemData.items.length; thisItem++) {
        var itemName = document.createElement("th");
        itemName.innerHTML = itemData.items[thisItem].name;
        
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
        
        for (thisItem = 0; thisItem < itemData.items.length; thisItem++) {
            var itemFeature = document.createElement("td");
            var featureBool = itemData.items[thisItem].fitnessmetrics[compareFeatures[thisFeature]];
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

window.onload = buildTable;