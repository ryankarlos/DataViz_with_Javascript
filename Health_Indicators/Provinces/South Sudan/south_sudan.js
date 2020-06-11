$(document).ready(function() {
        
// africa shape files taken from Highmaps map collections - https://code.highcharts.com/mapdata/


var data1 = []

var data = [];

$.getJSON("south_sudan.json", function(data1) {


for (var i = 0; i < data1.length; i++) {
    var province_name = data1[i].name;
    var code = data1[i].code;
    var path = data1[i].path;
    data1.push({name: province_name, code: code, path: path})
   };

});

$.getJSON("south_sudan_data.json", function(data2) {


for (var i = 0; i < data1.length; i++) {
    var province_name = data1[i].name;
    var code = data1[i].code;
    var path = data1[i].path;
    console.log(code);
    for (var j = 0; j < data2.length; j++) {
        if (data2[j].code == code) {
          data.push({name: province_name, code: code, year: data2[j].Year, metric: data2[j].Metric, indicator: data2[j].indicator, path: path})
          }
    }

}

});

console.log(data);
console.log(data1);


var years = [];
var provinces = [];

for (var i = 0; i < data.length; i++){

    years.push(data[i].Year)
    provinces.push(data[i].name)
    years = years.filter((x, i, a) => a.indexOf(x) == i).reverse(); /// getting unique year values into array
    years = years.sort(function(a,b){return a-b}); // sorting values in year array in ascending order
    provinces = provinces.filter((x, i, a) => a.indexOf(x) == i); /// getting unique country values into array
    
}

var max_year = Math.max(...years);
var min_year = Math.min(...years);
console.log(max_year);
console.log(min_year);
console.log(years);
console.log(provinces);


var metric_number;

// store the metric names in an array. these are same for all years and countries so can 
// choose any index 

var metric_name = [];

for(var key in data1[0]){
    metric_name.push(key);
};  

metric_name = metric_name.slice(5,metric_name.length);  // slicing the array from the 6th index to the end to collect all the metrics

console.log('The names of the metrics are', metric_name);
//console.log(metric_name[0]);

metric_number = metric_name.length;
console.log("The number of metrics is", metric_number);
console.log("The metric value for " + metric_name[5] + " is: " + data1[0][metric_name[5]]);

/// Computing the max and min years from the data - this will be used to automatically set the slider range

console.log("the min year is: ", min_year);
console.log("the max year is: ", max_year);

// creating  a function which outputs a highchart series array for a given year.
// Year is used as an argument. This is later called when the slider is moved to change 
// the maps depending on the slider year value.

var data_year = [];
var data_metric = [];
var min_value = 1000000; // set this as a high number

// function which produces an array of country code and metric (based on index of required metric as argument)

function map_metric(metric_no){

for (var i = 0; i < data1.length; i++) {

  var metric = metric_name[metric_no];

 var item = [data1[i].Code,+data1[i][metric]];
    data_metric.push(item)

  }
  return data_metric;

}

map_metric(0);  

console.log(data_metric);

function map_year(year, data_metric){
for (var i = 0; i < data1.length; i++) {

   if (data1[i].Year == year) {

      // set the default metric as the first in the list - "Birth Both Sexes"
        var item = data_metric[i];  
        // uses the output from the function map_metric which outputs values for Birth_Both_sexes metric (default value)
        data_year.push(item);

     // setting the new min value equal to half less than the current metric value
         console.log(item);

        if(item[1] < min_value){
                min_value = item[1] -0.5; 
                      }
            }

        }

        data_single = data_year.slice(Math.max(data_year.length - 6, 0));
        return data_single;
  };
       
// checking output of function map_data for year 2000       
map_year(min_year, data_metric);
console.log(data_single); 

var chart = Highcharts.mapChart('container1',{
  
title: {
        text: 'South Sudan' + metric_name[0]
    },
mapNavigation: {
        enabled: true,
        buttonOptions: {
                        verticalAlign: 'bottom'
                    }
    },
colorAxis: {
        min: min_value,
        stops: [
                      [0, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.5).get()],
                      [0.7, Highcharts.getOptions().colors[0]],
                      [1, '#EFEFFF']
                ]
         },


   legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'bottom'
        },

series: [{
    data: data_single,
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

min: min_year,
max: max_year,
step: 1,
value: initialValue,
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



