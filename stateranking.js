
$(".dropdown-menu a").click(function() {
   
   var ranking = $(this).attr("value"); // how to get the value of the selected item if you need it
   $(".rank").html("")
   $(".stateName").html("");
   $(".pop").html(""); 
    


states=["Alabama",
"Alaska",
"Arkansas",
"Arizona",
"California",
"Colorado",
"Connecticut",
"Delaware",
"District of Columbia",
"Florida",
"Georgia",
"Hawaii",
"Idaho",
"Illinois",
"Indiana",
"Iowa",
"Kansas",
"Kentucky",
"Louisiana",
"Maine",
"Maryland",
"Massachusetts",
"Michigan",
"Minnesota",
"Mississippi",
"Missouri",
"Montana",
"Nebraska",
"Nevada",
"New Hampshire",
"New Jersey",
"New Mexico",
"New York",
"North Carolina",
"North Dakota",
"Ohio",
"Oklahoma",
"Oregon",
"Pennsylvania",
"Rhode Island",
"South Carolina",
"South Dakota",
"Tennessee",
"Texas",
"Utah",
"Vermont",
"Virginia",
"Washington",
"West Virginia",
"Wisconsin",
"Wyoming",
"Puerto Rico"
]

//   var state = $(this).attr("class");
//     console.log("state", state)
  
if (ranking=="pop"){
    $(".change").html("Population");

    var queryURL = "https://api.datausa.io/api?show=geo&sumlevel=state&year=latest&required=pop"; 
      
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(results) {
      console.log(results);
  
      var stateData = results.data;

      var stateconnect = []

for(var b = 0; b < stateData.length; b++){

    var tempObj = {}

    tempObj.stateCode = stateData[b][1];
    tempObj.stateName = states[b];

    tempObj.val = stateData[b][2];

    stateconnect.push(tempObj);
}
console.log(stateconnect);
var sortdata=sortByKeyDesc(stateconnect,"val");
console.log(sortdata);

for(var i=0; i < sortdata.length; i++){
    var num = i+1
    $(".rank").append(num+"<br>")
    $(".stateName").append(sortdata[i].stateName +"<br>");
    $(".pop").append(sortdata[i].val+"<br>");
}

    })


    function sortByKeyDesc(array, key) {
        return array.sort(function (a, b) {
            var x = a[key]; var y = b[key];
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });
    }
}
else if (ranking=="income"){
    $(".change").html("Average Income");
    var queryURL1 = "https://api.datausa.io/api?show=geo&sumlevel=state&year=latest&required=income"; 
      
  
    $.ajax({
      url: queryURL1,
      method: "GET"
    }).then(function(results) {
      console.log(results);
  
      var stateData = results.data;

      var stateconnect = []

for(var b = 0; b < stateData.length; b++){

    var tempObj = {}

    tempObj.stateCode = stateData[b][1];
    tempObj.stateName = states[b];

    tempObj.val = stateData[b][2];

    stateconnect.push(tempObj);
}
console.log(stateconnect);
var sortdata=sortByKeyDesc(stateconnect,"val");
console.log(sortdata);

for(var i=0; i < sortdata.length; i++){
    var num = i+1
    $(".rank").append(num+"<br>")
    $(".stateName").append(sortdata[i].stateName +"<br>");
    $(".pop").append(sortdata[i].val+"<br>");
}

    })


    function sortByKeyDesc(array, key) {
        return array.sort(function (a, b) {
            var x = a[key]; var y = b[key];
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });
    }
}

else if(ranking=="poverty"){
    $(".change").html("Population above poverty status");
    var queryURL2 = "https://api.datausa.io/api?show=geo&sumlevel=state&year=latest&required=pop_poverty_status"; 
      
  
    $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function(results) {
      console.log(results);
  
      var stateData = results.data;

      var stateconnect = []

for(var b = 0; b < stateData.length; b++){

    var tempObj = {}

    tempObj.stateCode = stateData[b][1];
    tempObj.stateName = states[b];

    tempObj.val = stateData[b][2];

    stateconnect.push(tempObj);
}
console.log(stateconnect);
var sortdata=sortByKeyDesc(stateconnect,"val");
console.log(sortdata);

for(var i=0; i < sortdata.length; i++){
    var num = i+1
    $(".rank").append(num+"<br>")
    $(".stateName").append(  sortdata[i].stateName +"<br>");
    $(".pop").append(sortdata[i].val+"<br>");
}

    })


    function sortByKeyDesc(array, key) {
        return array.sort(function (a, b) {
            var x = a[key]; var y = b[key];
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });
    }

}
else if(ranking=="drate"){
    $(".change").html("Opiod Overdose Deathrate");
    var queryURL3 = "https://api.datausa.io/api?show=geo&sumlevel=state&year=latest&required=opioid_overdose_deathrate_ageadjusted"; 
      
  
    $.ajax({
      url: queryURL3,
      method: "GET"
    }).then(function(results) {
      console.log(results);
  
      var stateData = results.data;

      var stateconnect = []

for(var b = 0; b < stateData.length; b++){

    var tempObj = {}

    tempObj.stateCode = stateData[b][1];
    tempObj.stateName = states[b];

    tempObj.val = stateData[b][2];

    stateconnect.push(tempObj);
}
console.log(stateconnect);
var sortdata=sortByKeyDesc(stateconnect,"val");
console.log(sortdata);

for(var i=0; i < sortdata.length; i++){
    var num = i+1
    $(".rank").append(num+"<br>")
    $(".stateName").append(sortdata[i].stateName +"<br>");
    $(".pop").append(sortdata[i].val+"<br>");
}

    })


    function sortByKeyDesc(array, key) {
        return array.sort(function (a, b) {
            var x = a[key]; var y = b[key];
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });
    }

}
else if (ranking=="wage"){
    $(".change").html("Median Wage");
    var queryURL4 = "https://api.datausa.io/api?show=geo&sumlevel=state&year=latest&required=avg_wage"; 
      
  
    $.ajax({
      url: queryURL4,
      method: "GET"
    }).then(function(results) {
      console.log(results);
  
      var stateData = results.data;

      var stateconnect = []

for(var b = 0; b < stateData.length; b++){

    var tempObj = {}

    tempObj.stateCode = stateData[b][1];
    tempObj.stateName = states[b];

    tempObj.val = stateData[b][2];

    stateconnect.push(tempObj);
}
console.log(stateconnect);
var sortdata=sortByKeyDesc(stateconnect,"val");
console.log(sortdata);

for(var i=0; i < sortdata.length; i++){
    var num = i+1;

    $(".rank").append(num+"<br>")
    $(".stateName").append(sortdata[i].stateName +"<br>");
    $(".pop").append(+sortdata[i].val+"<br>");
}

    })


    function sortByKeyDesc(array, key) {
        return array.sort(function (a, b) {
            var x = a[key]; var y = b[key];
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });
    }

}
});
    
$(".header").click(function(){
    $(this).nextUntil("table").slideToggle(1000);
})

$( function() {
    states=["Alabama",
"Alaska",
"Arkansas",
"Arizona",
"California",
"Colorado",
"Connecticut",
"Delaware",
"District of Columbia",
"Florida",
"Georgia",
"Hawaii",
"Idaho",
"Illinois",
"Indiana",
"Iowa",
"Kansas",
"Kentucky",
"Louisiana",
"Maine",
"Maryland",
"Massachusetts",
"Michigan",
"Minnesota",
"Mississippi",
"Missouri",
"Montana",
"Nebraska",
"Nevada",
"New Hampshire",
"New Jersey",
"New Mexico",
"New York",
"North Carolina",
"North Dakota",
"Ohio",
"Oklahoma",
"Oregon",
"Pennsylvania",
"Rhode Island",
"South Carolina",
"South Dakota",
"Tennessee",
"Texas",
"Utah",
"Vermont",
"Virginia",
"Washington",
"West Virginia",
"Wisconsin",
"Wyoming",
"Puerto Rico"
]

    $( "#tags" ).autocomplete({
      source: states
    });
  } );