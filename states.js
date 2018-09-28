var states = ["Alabama",
                  "Alaska",
                  "Arkansas",
                  "Arizona",
                  "California",
                  "Colorado",
                  "Connecticut",
                  "District of Columbia",
                  "Delaware",
                  "Florida",
                  "Georgia",
                  "Hawaii",
                  "Iowa",
                  "Idaho",
                  "Illinois",
                  "Indiana",
                  "Kansas",
                  "Kentucky",
                  "Louisiana",
                  "Massachusetts",
                  "Maryland",
                  "Maine",
                  "Michigan",
                  "Minnesota",
                  "Missouri",
                  "Mississippi",
                  "Montana",
                  "North Carolina",
                  "North Dakota",
                  "Nebraska",
                  "New Hampshire",
                  "New Jersey",
                  "New Mexico",
                  "Nevada",
                  "New York",
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
                  "Virginia",
                  "Vermont",
                  "Washington",
                  "Wisconsin",
                  "West Virginia",
                  "Wyoming",
                  "Puerto Rico"
                ];

// // for (var i = 0; i <states.length; i++);
function getStateData(){//stateid){

    var queryURL = "https://api.datausa.io/api?show=geo&sumlevel=state&year=latest&required=pop";

    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
    
    
        var data = response.data;

        console.log( $(this).attr("id"));
    
        $(".Alabama").append("<br>"+"Population "+ data[0][2]+"<br>");
        $(".Alaska").append("<br>"+"Population "+ data[1][2]+"<br>");
        $(".Arkansas").append("<br>"+"Population "+ data[2][2]+"<br>");
        $(".Arizona").append("<br>"+"Population "+ data[3][2]+"<br>");
        $(".California").append("<br>"+"Population "+ data[4][2]+"<br>");
        $(".Colorado").append("<br>"+"Population "+ data[5][2]+"<br>");
        $(".Connecticut").append("<br>"+"Population "+ data[6][2]+"<br>");
        $(".District of Columbia").append("<br>"+"Population "+ data[7][2]+"<br>");
        $(".Delaware").append("<br>"+"Population "+ data[8][2]+"<br>");
        $(".Florida").append("<br>"+"Population "+ data[9][2]+"<br>");
        $(".Georgia").append("<br>"+"Population "+ data[10][2]+"<br>");
        $(".Hawaii").append("<br>"+"Population "+ data[11][2]+"<br>");
        $(".Iowa").append("<br>"+"Population "+ data[12][2]+"<br>");
        $(".Idaho").append("<br>"+"Population "+ data[13][2]+"<br>");
        $(".Illinois").append("<br>"+"Population "+ data[14][2]+"<br>");
        $(".Indiana").append("<br>"+"Population "+ data[15][2]+"<br>");
        $(".Kansas").append("<br>"+"Population "+ data[16][2]+"<br>");
        $(".Kentucky").append("<br>"+"Population "+ data[17][2]+"<br>");
        $(".Louisiana").append("<br>"+"Population "+ data[18][2]+"<br>");
        $(".Massachusetts").append("<br>"+"Population "+ data[19][2]+"<br>");
        $(".Maryland").append("<br>"+"Population "+ data[20][2]+"<br>");
        $(".Maine").append("<br>"+"Population "+ data[21][2]+"<br>");
        $(".Michigan").append("<br>"+"Population "+ data[22][2]+"<br>");
        $(".Minnesota").append("<br>"+"Population "+ data[23][2]+"<br>");
        $(".Missouri").append("<br>"+"Population "+ data[24][2]+"<br>");
        $(".Mississippi").append("<br>"+"Population "+ data[25][2]+"<br>");
        $(".Montana").append("<br>"+"Population "+ data[26][2]+"<br>");
        $(".North Carolina").append("<br>"+"Population "+ data[27][2]+"<br>");
        $(".North Dakota").append("<br>"+"Population "+ data[28][2]+"<br>");
        $(".Nebraska").append("<br>"+"Population "+ data[29][2]+"<br>");
        $(".New Hampshire").append("<br>"+"Population "+ data[30][2]+"<br>");
        $(".New Jersey").append("<br>"+"Population "+ data[31][2]+"<br>");
        $(".New Mexico").append("<br>"+"Population "+ data[32][2]+"<br>");
        $(".Nevada").append("<br>"+"Population "+ data[33][2]+"<br>");
        $(".New York").append("<br>"+"Population "+ data[34][2]+"<br>");
        $(".Ohio").append("<br>"+"Population "+ data[35][2]+"<br>");
        $(".Oklahoma").append("<br>"+"Population "+ data[36][2]+"<br>");
        $(".Oregan").append("<br>"+"Population "+ data[37][2]+"<br>");
        $(".Pennsylvania").append("<br>"+"Population "+ data[38][2]+"<br>");
        $(".Rhode Island").append("<br>"+"Population "+ data[39][2]+"<br>");
        $(".South Carolina").append("<br>"+"Population "+ data[40][2]+"<br>");
        $(".South Dakota").append("<br>"+"Population "+ data[41][2]+"<br>");
        $(".Tennessee").append("<br>"+"Population "+ data[42][2]+"<br>");
        $(".Texas").append("<br>"+"Population "+ data[43][2]+"<br>");
        $(".Utah").append("<br>"+"Population "+ data[44][2]+"<br>");
        $(".Virginia").append("<br>"+"Population "+ data[45][2]+"<br>");
        $(".Vermont").append("<br>"+"Population "+ data[46][2]+"<br>");
        $(".Washington").append("<br>"+"Population "+ data[47][2]+"<br>");
        $(".Wisconsin").append("<br>"+"Population "+ data[48][2]+"<br>");
        $(".West Virginia").append("<br>"+"Population "+ data[49][2]+"<br>");
        $(".Wyoming").append("<br>"+"Population "+ data[50][2]+"<br>");
        $(".Puerto Rico").append("<br>"+"Population "+ data[51][2]+"<br>");
    
        
    })

    //if(stateid="Alabama"){
        //  $(".Alabama").append("<br>"+"Population "+ data[0][2]+"<br>");
    
    //}
    //else if(stateid="Alaska"){
        //  $(".Alaska").append("<br>"+"Population "+ data[0][2]+"<br>");
    
    // }
};           

var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn3");
var span = document.getElementsByClassName("close")[0]; 
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    for (var i = 0; i < states.length; i++){
        var state =  "." + states[i];
        $(state).click(function(i){
            console.log( $(event.target))
            // modal.lastChild.textContent = ;
            
        modal.style.display = "block";
        });
        
    }
}

getStateData();


// btn.onclick = function() {
//     modal.style.display = "block";
// }
// // var buttonid=$(this).attr('id');

                

// //if(buttonid == "mybutton1")

// //$(".alabama").append(
// //}
// //else if (buttonid == "mybutto 2";

                
// // Get the modal
// // function getStateData(stateid){
// // var modal = document.getElementById('myModal');
// // var queryURL = "https://api.datausa.io/api?show=geo&sumlevel=state&year=latest&required=pop";

// //                 $.ajax({
// //                     url: queryURL,
// //                     method: "GET"
// //                 }).then(function(response){
// //                     var data = response.data;
// //                 alert(stateid);
// //                   if(stateid == "Alabama"){
                      

// //                     $(".Alabama").append("<br>"+"Population "+ data[0][2]+"<br>");
                   
// //                  modal.style.display = "block";

// //                   }
                
// //                   })
//                 // }


// // Get the button that opens the modal
// // var btn = document.getElementById("myBtn0");

// // Get the <span> element that closes the modal
// // var span = document.getElementsByClassName("close")[0];



// // When the user clicks the button, open the modal 
// // btn.onclick = function() {
// //    modal.style.display = "block";

// // }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn1");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
    
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn2");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn3");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');

// var btn = document.getElementById("myBtn4");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn5");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn6");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn7");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn8");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn9");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn10");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn11");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn12");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn13");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn14");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn15");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn16");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn17");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn18");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn19");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn20");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn21");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn22");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn23");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn24");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn25");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn26");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn27");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn28");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn29");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn30");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn31");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn32");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn33");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn34");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn35");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn36");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn37");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn38");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn39");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn40");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn41");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn42");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn43");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn44");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn45");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn46");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn47");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn48");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn49");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn50");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn51");
// var span = document.getElementsByClassName("close")[0]; 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

