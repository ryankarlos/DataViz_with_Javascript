$(document).ready(function() {

    $.getJSON('Life_Expectancy.json', function(data){

            var years = [];
            var years_reverse = [];
            var countries = [];
            var seriesOptions = [],
                seriesCounter = 0;
            var metric_name = [];
            var data_new = [];
            var data_rwanda = [];
            var data_south_sudan = [];
            var data_uganda = [];
            var data_burundi = [];
            var data_kenya = [];
            var data_tanzania = [];

            console.log(data);

            for (var i = 0; i < data.length; i++){

                        years.push(data[i].Year)
                        years = years.filter((x, i, a) => a.indexOf(x) == i) /// getting unique year values into array
                        years.sort(function(a,b){return a-b}); // sorting values in year array in ascending order
                    };

            var max_year = Math.max(...years);
            var min_year = Math.min(...years);
            console.log(max_year);
            console.log(min_year);
            console.log(years);

            var grouped = _.chain(data)
                       .groupBy('Metric')
                       .mapObject(function(item) { return _.groupBy(item, 'Country_Name');})
                       .value();

             console.log(grouped);

            metric_name = Object.keys(grouped) // getting all the metirc names
            console.log(metric_name);

            for(var key in grouped){

               console.log(key)
               var val = grouped[key]

                     var value = [];
                     var range = [];
                     var indicator;
                     for (var i = 0; i < val.Burundi.length; i++ ){
                       value.push(val.Burundi[i].Value);
                       range.push(val.Burundi[i].Range);
                       indicator = val.Burundi[i].indicator
                      };
                      data_burundi.push({"name": "Burundi", "metric": key, "indicator" : indicator, "data": value.reverse(), "range" : range.reverse()});

                      var value = [];
                      var range = [];
                      var indicator;
                      for (var i = 0; i < val.Kenya.length; i++ ){
                        value.push(val.Kenya[i].Value);
                        range.push(val.Kenya[i].Range);
                        indicator = val.Kenya[i].indicator
                      };
                      data_kenya.push({"name": "Kenya", "metric": key, "indicator" : indicator,"data": value.reverse(), "range" : range.reverse()});


                      var value = [];
                      var range = [];
                      var indicator;
                      for (var i = 0; i < val.Rwanda.length; i++ ){
                        value.push(val.Rwanda[i].Value);
                        range.push(val.Rwanda[i].Range);
                          indicator = val.Rwanda[i].indicator
                      };
                      data_rwanda.push({"name": "Rwanda", "metric": key, "indicator" : indicator, "data": value.reverse(), "range" : range.reverse()});


                      var value = [];
                      var range = [];
                      var indicator;
                      for (var i = 0; i < val.Uganda.length; i++ ){
                        value.push(val.Uganda[i].Value);
                        range.push(val.Uganda[i].Range);
                        indicator = val.Uganda[i].indicator
                      };
                      data_uganda.push({"name": "Uganda", "metric": key, "indicator" : indicator,"data": value.reverse(), "range" : range.reverse()});


                      var value = [];
                      var range = [];
                      var indicator;
                      for (var i = 0; i < val["South Sudan"].length; i++ ){
                        value.push(val["South Sudan"][i].Value);
                        range.push(val["South Sudan"][i].Range);
                        indicator = val["South Sudan"][i].indicator
                      };
                      data_south_sudan.push({"name": "South Sudan", "metric": key, "indicator" : indicator,"data": value.reverse(), "range" : range.reverse()});

                      var value = [];
                      var range = [];
                      var indicator;
                      for (var i = 0; i < val["United Republic of Tanzania"].length; i++ ){
                        value.push(val["United Republic of Tanzania"][i].Value);
                        range.push(val["United Republic of Tanzania"][i].Range);
                        indicator = val["United Republic of Tanzania"][i].indicator
                      };
                      data_tanzania.push({"name": "United Republic of Tanzania", "metric": key, "indicator" : indicator,"data": value.reverse(), "range" : range.reverse()});

            };

            console.log(data_rwanda);
            console.log(data_south_sudan);
            console.log(data_uganda) ;
            console.log(data_burundi);
            console.log(data_kenya) ;
            console.log(data_tanzania);

     //// this function creates div containers equal to the number of metric_namess
     // in the array as thats the number of charts we have to draw

            function divs() {

                for (var i = 0; i < metric_name.length; i++) {
                  var single = metric_name[i];
                  var d = document.createElement("div");
                  d.style.width = "900px";
                  d.style.height = "450px";
                  d.style.margin = "20px";
                  d.id = single;
                  d.class = "chart"
                  $("body").append(d);
                }
            }

           divs();


      /// drawing the charts for all the divs by looping through the
      //// metrics in the array and redrawing the new chart in each new div


            for(var i = 0; i < metric_name.length; i++){

                  $("#"+metric_name[i]).highcharts({

                            chart: {
                                type: 'scatter'
                                },

                            title: {
                                text: metric_name[i]
                                  },

                            xAxis: [{
                                  categories: years,
                                  reversed:false,
                                  title:{
                                    text: ' Year'
                                       },
                                  crosshair: true,
                                  gridLineWidth:0
                                    }],

                               plotOptions:{
                                            scatter:
                                                   {lineWidth:2}
                                            },

                            yAxis: [{ // Primary yAxis
                                         labels: {
                                                 format: '{value}',
                                                  },

                                          gridLineWidth:0,
                                          title: {
                                                  text: data[0].Indicator,

                                                 }
                                          }],

                            tooltip: {
                                        crosshairs: true,
                                        formatter:function(){
                                              console.log(this);
                                              return '<span style="color:' + this.series.color + '"> ▀ </span>' + ' ' +
                                              this.series.name + '<br/>' + '<b>' + 'Year: ' + '</b>' + this.key  +
                                              '<br/>' + '<b>' + '' + data[0].Indicator + ": " + '</b>' + this.y +"years";
                                            }
                                   },

                            legend: {
                                enabled: true
                                     },

                            series:   [{
                                      name: data_uganda[i].name,
                                      data: data_uganda[i].data
                                  },
                                  {
                                      name: data_kenya[i].name,
                                      data: data_kenya[i].data
                                  },
                                  {
                                      name: data_rwanda[i].name,
                                      data: data_rwanda[i].data
                                  },
                                  {
                                      name: data_burundi[i].name,
                                      data: data_burundi[i].data
                                  },
                                  {
                                      name: data_south_sudan[i].name,
                                      data: data_south_sudan[i].data
                                  },
                                  {
                                      name: data_tanzania[i].name,
                                      data: data_tanzania[i].data
                                  }]

                                });

                    };


           });

  });
