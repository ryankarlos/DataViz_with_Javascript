$(document).ready(function() {

              
// africa shape files taken from Highmaps map collections - https://code.highcharts.com/mapdata/
$.getJSON( "uganda.json", function( data ) {


// Initiate the chart

var chart = Highcharts.mapChart('container1',{
  
title: {
        text: 'Uganda SVG'
    },
mapNavigation: {
        enabled: true,
        buttonOptions: {
                        verticalAlign: 'bottom'
                    }
    },
colorAxis: {
        min: 0
         },


series: [{
    data: data,
    type: "map",
    states: {
      hover: {
        color: '#BADA55'
      }
    },
    dataLabels:{
    enabled:true,
    format: '{point.name}'
    }
   }]

});


});

var browser_width = $(window).width();
var browser_height = $(window).height(); 

var d = document.getElementById('play-button');
d.style.positon = "absolute";
d.style.left = -browser_width/2 + 'px';
;
var data_year = [];
var initialValue = 2000;
var sliderTooltip = function(event, ui) {

    var curValue = ui.value || initialValue;
    var tooltip = '<div class="tooltip"><div class="tooltip-inner">' + curValue + '</div><div class="tooltip-arrow"></div></div>';

    $('.ui-slider-handle').html(tooltip);
    var data_index = +ui.value || initialValue
    console.log(data_index);
}

$('#slider').slider({

min: 2000,
max: 2015,
step: 1,
value: 2015,
create: sliderTooltip,
change: sliderTooltip,

/*change: function(event, ui) {
       $('#slider2_value').html(ui.value);
       newdata = ui.value
       console.log(newdata)
       console.log(map_data(newdata))
       //newdata.push(ui.value);
    //chart.series[0].setData (newdata);
        },
   */     
stop: function(event, ui) {    
    }

 });

var startButton = document.getElementById("play-button");
var pauseButton  = document.getElementById("pause-button");
var stopButton = document.getElementById("stop-button");
var count = initialValue;



// automatically generate number of radio buttons based on 
// number of metrics. Also adjust the CSS styling of the 
// border around the radio buttons depending on the number 
// of radio buttons generated

});