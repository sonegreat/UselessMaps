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
  
    var State = $(this).attr("class");
    console.log("state", State)
  
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      State + "&api_key=WdxUcCzvQjpTrfH1ttEMO1KzKnKTHTWj&limit=1&rating=pg";
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(results) {
      console.log(results);
  
      var stateData = results.data;
  
      // loop over gifArray and print to page
    
  
            for (var i = 0; i < stateData.length; i++) {
  
             
              var gifDiv = $("<div>");
  
              // var p = $("<p>").text("Rating: " + results[i].rating);
  
              console.log(stateData[i]);
              var StateImage = $("<img>");
              var imgSrc = stateData[i].images.fixed_height.url;
              console.log("imgSrc",imgSrc);
              StateImage.attr("src", imgSrc);
  
             
            //   // gifDiv.append(p);
              gifDiv.append(StateImage);
  
             console.log(gifDiv);
              $("#gifs-appear-here").html(gifDiv);
            }

            
          });
  
    })