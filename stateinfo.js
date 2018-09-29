$("path, circle").hover(function (e) {
    $('#info-box').css('visibility', 'visible');
    $('#info-box').html($(this).data('info'));
  });
  
  $("path, circle").mouseleave(function (e) {
    $('#info-box').css('visibility', 'hidden');
  });
  
  $(document).mousemove(function (e) {
    $('#info-box').css('top', e.pageY - $('#info-box').height() - 30);
    $('#info-box').css('left', e.pageX - ($('#info-box').width()) / 2);
  }).mouseover();
  
  var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (ios) {
    $('a').on('click touchend', function () {
      var link = $(this).attr('href');
      window.open(link, '_blank');
      return false;
  
  
    });
  }
  
  $("path, circle").hover(function (e) {
    $('#info-box').css('display', 'block');
    $('#info-box').html($(this).data('info'));
  });
  $("path, circle").mouseleave(function (e) {
    $('#info-box').css('display', 'none');
  });
  $(document).mousemove(function (e) {
    $('#info-box').css('top', e.pageY - $('#info-box').height() - 30);
    $('#info-box').css('left', e.pageX - ($('#info-box').width()) / 2);
  }).mouseover();
  
  
  $("path, circle").on("click", function () {
  
    var state = $(this).attr("class");
    console.log("state", state)
  
    var queryURL = "https://api.datausa.io/api?show=geo&sumlevel=state&year=latest&required=pop"; +
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(results) {
      console.log(results);
  
      var stateData = results.data;

      console.log(stateData)

      if(state=="Alabama"){
        $("#Average Age:").html("<br>"+"Population "+ stateData[0][2]+"<br>");}
      else if (state=="Alaska"){
        $("#population").html("<br>"+"Population "+ stateData[1][2]+"<br>");}
      else if (state=="Arkansas"){
        $("#population").html("<br>"+"Population "+ stateData[2][2]+"<br>");}
      else if (state=="Arizona"){
        $("#population").html("<br>"+"Population "+ stateData[3][2]+"<br>");}
      else if (state=="California"){
        $("#population").html("<br>"+"Population "+ stateData[4][2]+"<br>");}
      else if (state=="Colorado"){
        $("#population").html("<br>"+"Population "+ stateData[5][2]+"<br>");}
      else if (state=="Connecticut"){
        $("#population").html("<br>"+"Population "+ stateData[6][2]+"<br>");}
      else if (state=="District of Columbia"){
        $("#population").html("<br>"+"Population "+ stateData[7][2]+"<br>");}
      else if (state=="Delaware"){
        $("#population").html("<br>"+"Population "+ stateData[8][2]+"<br>");}
      else if (state=="Florida"){
        $("#population").html("<br>"+"Population "+ stateData[9][2]+"<br>");}
      else if (state=="Georgia"){
        $("#population").html("<br>"+"Population "+ stateData[10][2]+"<br>");}
      else if (state=="Hawaii"){
        $("#population").html("<br>"+"Population "+ stateData[11][2]+"<br>");}
      else if (state=="Iowa"){
        $("#population").html("<br>"+"Population "+ stateData[12][2]+"<br>");}
      else if (state=="Idaho"){
        $("#population").html("<br>"+"Population "+ stateData[13][2]+"<br>");}
      else if (state=="Illinois"){
        $("#population").html("<br>"+"Population "+ stateData[14][2]+"<br>");}
      else if (state=="Indiana"){
        $("#population").html("<br>"+"Population "+ stateData[15][2]+"<br>");}
      else if (state=="Kansas"){
        $("#population").html("<br>"+"Population "+ stateData[16][2]+"<br>");}
      else if (state=="Kentucky"){
        $("#population").html("<br>"+"Population "+ stateData[17][2]+"<br>");}
      else if (state=="Louisiana"){
        $("#population").html("<br>"+"Population "+ stateData[18][2]+"<br>");}
      else if (state=="Massachusetts"){
        $("#population").html("<br>"+"Population "+ stateData[19][2]+"<br>");}
      else if (state=="Maryland"){
        $("#population").html("<br>"+"Population "+ stateData[20][2]+"<br>");}
      else if (state=="Michigan"){
        $("#population").html("<br>"+"Population "+ stateData[21][2]+"<br>");}
      else if (state=="Minnesota"){
        $("#population").html("<br>"+"Population "+ stateData[22][2]+"<br>");}
      else if (state=="Missouri"){
        $("#population").html("<br>"+"Population "+ stateData[23][2]+"<br>");}
      else if (state=="Montana"){
        $("#population").html("<br>"+"Population "+ stateData[24][2]+"<br>");}
      else if (state=="North Carolina"){
        $("#population").html("<br>"+"Population "+ stateData[25][2]+"<br>");}
      else if (state=="North Dakota"){
        $("#population").html("<br>"+"Population "+ stateData[26][2]+"<br>");}
      else if (state=="Nebraska"){
        $("#population").html("<br>"+"Population "+ stateData[27][2]+"<br>");}
      else if (state=="New Hampshire"){
        $("#population").html("<br>"+"Population "+ stateData[28][2]+"<br>");}
      else if (state=="New Jersey"){
        $("#population").html("<br>"+"Population "+ stateData[29][2]+"<br>");}
      else if (state=="New Mexico"){
        $("#population").html("<br>"+"Population "+ stateData[30][2]+"<br>");}
      else if (state=="Nevada"){
        $("#population").html("<br>"+"Population "+ stateData[31][2]+"<br>");}
      else if (state=="New York"){
        $("#population").html("<br>"+"Population "+ stateData[32][2]+"<br>");}
      else if (state=="Ohio"){
        $("#population").html("<br>"+"Population "+ stateData[33][2]+"<br>");}
      else if (state=="Oklahoma"){
        $("#population").html("<br>"+"Population "+ stateData[34][2]+"<br>");}
      else if (state=="Oregon"){
        $("#population").html("<br>"+"Population "+ stateData[35][2]+"<br>");}
      else if (state=="Pennsylvania"){
        $("#population").html("<br>"+"Population "+ stateData[36][2]+"<br>");}
      else if (state=="Rhode Island"){
        $("#population").html("<br>"+"Population "+ stateData[37][2]+"<br>");}
      else if (state=="South Carolina"){
        $("#population").html("<br>"+"Population "+ stateData[38][2]+"<br>");}
      else if (state=="South Dakota"){
        $("#population").html("<br>"+"Population "+ stateData[39][2]+"<br>");}
      else if (state=="Tennessee"){
        $("#population").html("<br>"+"Population "+ stateData[40][2]+"<br>");}
      else if (state=="Texas"){
        $("#population").html("<br>"+"Population "+ stateData[41][2]+"<br>");}
      else if (state=="Utah"){
        $("#population").html("<br>"+"Population "+ stateData[42][2]+"<br>");}
      else if (state=="Virginia"){
        $("#population").html("<br>"+"Population "+ stateData[43][2]+"<br>");}
      else if (state=="Vermont"){
        $("#population").html("<br>"+"Population "+ stateData[44][2]+"<br>");}
      else if (state=="Washington"){
        $("#population").html("<br>"+"Population "+ stateData[45][2]+"<br>");}
      else if (state=="Wisconsin"){
        $("#population").html("<br>"+"Population "+ stateData[46][2]+"<br>");}
      else if (state=="West Virginia"){
        $("#population").html("<br>"+"Population "+ stateData[47][2]+"<br>");}
      else if (state=="Wyoming"){
        $("#population").html("<br>"+"Population "+ stateData[48][2]+"<br>");}
      else if (state=="Puerto Rico"){
        $("#population").html("<br>"+"Population "+ stateData[49][2]+"<br>");}

      var queryURL2 = "https://api.datausa.io/api?show=geo&sumlevel=state&year=latest&required=avg_age"; +
    $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function(results) {
      console.log(results);
  
      var ageData = results.data;

      console.log(ageData)

      if(state=="Alabama"){
        $("#stateinfo").html("<br>"+"Average Age: "+ ageData[0][2]+"<br>");}
        else if (state=="Alaska"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[1][2]+"<br>");}
        else if (state=="Arkansas"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[2][2]+"<br>");}
        else if (state=="Arizona"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[3][2]+"<br>");}
        else if (state=="California"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[4][2]+"<br>");}
        else if (state=="Colorado"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[5][2]+"<br>");}
        else if (state=="Connecticut"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[6][2]+"<br>");}
        else if (state=="District of Columbia"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[7][2]+"<br>");}
        else if (state=="Delaware"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[8][2]+"<br>");}
        else if (state=="Florida"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[9][2]+"<br>");}
        else if (state=="Georgia"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[10][2]+"<br>");}
        else if (state=="Hawaii"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[11][2]+"<br>");}
        else if (state=="Iowa"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[12][2]+"<br>");}
        else if (state=="Idaho"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[13][2]+"<br>");}
        else if (state=="Illinois"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[14][2]+"<br>");}
        else if (state=="Indiana"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[15][2]+"<br>");}
        else if (state=="Kansas"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[16][2]+"<br>");}
        else if (state=="Kentucky"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[17][2]+"<br>");}
        else if (state=="Louisiana"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[18][2]+"<br>");}
        else if (state=="Massachusetts"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[19][2]+"<br>");}
        else if (state=="Maryland"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[20][2]+"<br>");}
        else if (state=="Michigan"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[21][2]+"<br>");}
        else if (state=="Minnesota"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[22][2]+"<br>");}
        else if (state=="Missouri"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[23][2]+"<br>");}
        else if (state=="Montana"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[24][2]+"<br>");}
        else if (state=="North Carolina"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[25][2]+"<br>");}
        else if (state=="North Dakota"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[26][2]+"<br>");}
        else if (state=="Nebraska"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[27][2]+"<br>");}
        else if (state=="New Hampshire"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[28][2]+"<br>");}
        else if (state=="New Jersey"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[29][2]+"<br>");}
        else if (state=="New Mexico"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[30][2]+"<br>");}
        else if (state=="Nevada"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[31][2]+"<br>");}
        else if (state=="New York"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[32][2]+"<br>");}
        else if (state=="Ohio"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[33][2]+"<br>");}
        else if (state=="Oklahoma"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[34][2]+"<br>");}
        else if (state=="Oregon"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[35][2]+"<br>");}
        else if (state=="Pennsylvania"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[36][2]+"<br>");}
        else if (state=="Rhode Island"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[37][2]+"<br>");}
        else if (state=="South Carolina"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[38][2]+"<br>");}
        else if (state=="South Dakota"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[39][2]+"<br>");}
        else if (state=="Tennessee"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[40][2]+"<br>");}
        else if (state=="Texas"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[41][2]+"<br>");}
        else if (state=="Utah"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[42][2]+"<br>");}
        else if (state=="Virginia"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[43][2]+"<br>");}
        else if (state=="Vermont"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[44][2]+"<br>");}
        else if (state=="Washington"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[45][2]+"<br>");}
        else if (state=="Wisconsin"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[46][2]+"<br>");}
        else if (state=="West Virginia"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[47][2]+"<br>");}
        else if (state=="Wyoming"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[48][2]+"<br>");}
        else if (state=="Puerto Rico"){
          $("#stateinfo").html("<br>"+"Average Age: "+ ageData[49][2]+"<br>");}
  

    });


    
          });
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
];
for (var i = 0; i <states.length; i++);

if(state=="Alabama"){
  $("#statename").text(states[0]);}
  else if (state=="Alaska"){
    $("#statename").text(states[1]);}
  else if (state=="Arkansas"){
    $("#statename").text(states[2]);}
  else if (state=="Arizona"){
    $("#statename").text(states[3]);}
  else if (state=="California"){
    $("#statename").text(states[4]);}
  else if (state=="Colorado"){
    $("#statename").text(states[6]);}
  else if (state=="Connecticut"){
    $("#statename").text(states[6]);}
  else if (state=="Delaware"){
    $("#statename").text(states[7]);}
  else if (state=="District of Columbia"){
    $("#statename").text(states[8]);}
  else if (state=="Florida"){
    $("#statename").text(states[9]);}
  else if (state=="Georgia"){
    $("#statename").text(states[10]);}
  else if (state=="Hawaii"){
    $("#statename").text(states[11]);}
  else if (state=="Idaho"){
    $("#statename").text(states[12]);}
  else if (state=="Illinois"){
    $("#statename").text(states[13]);}
  else if (state=="Indiana"){
    $("#statename").text(states[14]);}
  else if (state=="Iowa"){
    $("#statename").text(states[15]);}
  else if (state=="Kansas"){
    $("#statename").text(states[16]);}
  else if (state=="Kentucky"){
    $("#statename").text(states[17]);}
  else if (state=="Louisiana"){
    $("#statename").text(states[18]);}
  else if (state=="Maine"){
    $("#statename").text(states[19]);}
  else if (state=="Maryland"){
    $("#statename").text(states[20]);}
  else if (state=="Massachusetts"){
    $("#statename").text(states[21]);}
  else if (state=="Michigan"){
    $("#statename").text(states[22]);}
  else if (state=="Minnesota"){
    $("#statename").text(states[23]);}
  else if (state=="Mississippi"){
    $("#statename").text(states[24]);}
  else if (state=="Missouri"){
    $("#statename").text(states[25]);}
  else if (state=="Montana"){
    $("#statename").text(states[26]);}
  else if (state=="Nebraska"){
    $("#statename").text(states[27]);}
  else if (state=="Nevada"){
    $("#statename").text(states[28]);}
  else if (state=="New Hamphsire"){
    $("#statename").text(states[29]);}
  else if (state=="New Jersey"){
    $("#statename").text(states[30]);}
  else if (state=="New Mexico"){
    $("#statename").text(states[31]);}
  else if (state=="New York"){
    $("#statename").text(states[32]);}
  else if (state=="North Carolina"){
    $("#statename").text(states[33]);}
  else if (state=="North Dakota"){
    $("#statename").text(states[34]);}
  else if (state=="Ohio"){
    $("#statename").text(states[35]);}
  else if (state=="Oklahoma"){
    $("#statename").text(states[36]);}
  else if (state=="Oregon"){
    $("#statename").text(states[37]);}
  else if (state=="Pennsylvania"){
    $("#statename").text(states[38]);}
  else if (state=="Rhode Island"){
    $("#statename").text(states[39]);}
  else if (state=="South Carolina"){
    $("#statename").text(states[40]);}
  else if (state=="South Dakota"){
    $("#statename").text(states[41]);}
  else if (state=="Tennessee"){
    $("#statename").text(states[42]);}
  else if (state=="Texas"){
    $("#statename").text(states[43]);}
  else if (state=="Utah"){
    $("#statename").text(states[44]);}
  else if (state=="Vermont"){
    $("#statename").text(states[45]);}
  else if (state=="Virginia"){
    $("#statename").text(states[46]);}
  else if (state=="Washington"){
    $("#statename").text(states[47]);}
  else if (state=="West Virgina"){
    $("#statename").text(states[48]);}
  else if (state=="Wisconsin"){
    $("#statename").text(states[49]);}
  else if (state=="Wyoming"){
    $("#statename").text(states[50]);}




$( "#tags" ).autocomplete({
  source: states
});

$()
  
    })
  });
