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
      else if (state=="Alaska"){
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
      else if (state=="Oregan"){
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
        else if (state=="Alaska"){
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
        else if (state=="Oregan"){
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


  
      // loop over gifArray and print to page
    
      
            //for (var i = 0; i < ageData.length; i++){
  
             
            //   var stateInfo = $("<div>");
  
            //   // var p = $("<p>").text("Rating: " + results[i].rating);
  
            //   console.log(stateData[i]);
            //   var StateImage = $("<img>");
            //   var imgSrc = stateData[i].images.fixed_height.url;
            //   console.log("imgSrc",imgSrc);
            //   StateImage.attr("src", imgSrc);
  
             
            // //   // gifDiv.append(p);
            //   gifDiv.append(StateImage);
  
            //  console.log(gifDiv);
            //   $("#stateinfo").html(stateInfo);
            

            
          });
  
    })
  