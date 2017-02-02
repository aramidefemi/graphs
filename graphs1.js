 $(function () {

                // Prepare demo data
                var data = [{ 'hc-key': 'ng-ri', value: 0 },
                    { 'hc-key': 'ng-kt', value: 1 },
                    { 'hc-key': 'ng-so', value: 2 },
                    { 'hc-key': 'ng-za', value: 3 },
                    { 'hc-key': 'ng-yo', value: 4 },
                    { 'hc-key': 'ng-ke', value: 5 },
                    { 'hc-key': 'ng-ad', value: 6 },
                    { 'hc-key': 'ng-bo', value: 7 },
                    { 'hc-key': 'ng-ak', value: 8 },
                    { 'hc-key': 'ng-ab', value: 9 },
                    { 'hc-key': 'ng-im', value: 10 },
                    { 'hc-key': 'ng-by', value: 11 },
                    { 'hc-key': 'ng-be', value: 12 },
                    { 'hc-key': 'ng-cr', value: 13 },
                    { 'hc-key': 'ng-ta', value: 14 },
                    { 'hc-key': 'ng-kw', value: 15 },
                    { 'hc-key': 'ng-la', value: 16 },
                    { 'hc-key': 'ng-ni', value: 17 },
                    { 'hc-key': 'ng-fc', value: 18 },
                    { 'hc-key': 'ng-og', value: 19 },
                    { 'hc-key': 'ng-on', value: 20 },
                    { 'hc-key': 'ng-ek', value: 21 },
                    { 'hc-key': 'ng-os', value: 22 },
                    { 'hc-key': 'ng-oy', value: 23 },
                    { 'hc-key': 'ng-an', value: 24 },
                    { 'hc-key': 'ng-ba', value: 25 },
                    { 'hc-key': 'ng-go', value: 26 },
                    { 'hc-key': 'ng-de', value: 27 },
                    { 'hc-key': 'ng-ed', value: 28 },
                    { 'hc-key': 'ng-en', value: 29 },
                    { 'hc-key': 'ng-eb', value: 30 },
                    { 'hc-key': 'ng-kd', value: 31 },
                    { 'hc-key': 'ng-ko', value: 32 },
                    { 'hc-key': 'ng-pl', value: 33 },
                    { 'hc-key': 'ng-na', value: 34 },
                    { 'hc-key': 'ng-ji', value: 35 },
                    { 'hc-key': 'ng-kn', value: 36 }];

                    
                // Initiate the chart
                $('#c7').highcharts('Map', {
                    
                    title : {
                        text : 'Highmaps basic demo'
                    },

                    subtitle : {
                        text : 'Source map: <a href="https://code.highcharts.com/mapdata/countries/ng/ng-all.js">countries/ng/ng-all</a>'
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

                    series : [{
                        data : data,
                        mapData: Highcharts.maps['countries/ng/ng-all'],
                        joinBy: 'hc-key',
                        name: 'Random data',
                        states: {
                            hover: {
                                color: '#a4edba'
                            }
                        },
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        }
                    }]
                });

           

var title = {
      text: 'Monthly Average Temperature'   
   };
   var subtitle = {
      text: 'Made by: natterbse.com'
   };
   var xAxis = {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
   };
   var yAxis = {
      title: {
        text: 'Total loan amount'
      },
      plotLines: [{
         value: 0,
         width: 1,
         color: '#808080'
      }]
   };   

   
   var legend = {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
   };
   var tooltip = {
        valueSuffix: ' Naira',
       shared: true,
	   crosshairs: true,
       valueSuffix: '\xB0C'
   }; 






    var chart = {
      type: 'bar'
   };
   
   var credits = {
      enabled: false
   };
   var series= [{
      name: 'John',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Jane',
            data: [2, -2, -3, 2, 1]
        }, {
            name: 'Joe',
            data: [3, 4, 4, -2, 5]
      }
   ];     
      
   var json = {};   
   json.title = title;    
   json.xAxis = xAxis;
   json.yAxis = yAxis;
   json.tooltip = tooltip;
   json.legend = legend;     
   json.series = series;
   $('#c9').highcharts(json); 


    var ranges = [
      [1246406400000, 14.3, 27.7],
      [1246492800000, 14.5, 27.8],
      [1246579200000, 15.5, 29.6],
      [1246665600000, 16.7, 30.7],
      [1246752000000, 16.5, 25.0],
      [1246838400000, 17.8, 25.7],
      [1246924800000, 13.5, 24.8],
      [1247011200000, 10.5, 21.4],
      [1247097600000, 9.2, 23.8],
      [1247184000000, 11.6, 21.8],
      [1247270400000, 10.7, 23.7],
      [1247356800000, 11.0, 23.3],
      [1247443200000, 11.6, 23.7],
      [1247529600000, 11.8, 20.7],
      [1247616000000, 12.6, 22.4],
      [1247702400000, 13.6, 19.6],
      [1247788800000, 11.4, 22.6],
      [1247875200000, 13.2, 25.0],
      [1247961600000, 14.2, 21.6],
      [1248048000000, 13.1, 17.1],
      [1248134400000, 12.2, 15.5],
      [1248220800000, 12.0, 20.8],
      [1248307200000, 12.0, 17.1],
      [1248393600000, 12.7, 18.3],
      [1248480000000, 12.4, 19.4],
      [1248566400000, 12.6, 19.9],
      [1248652800000, 11.9, 20.2],
      [1248739200000, 11.0, 19.3],
      [1248825600000, 10.8, 17.8],
      [1248912000000, 11.8, 18.5],
      [1248998400000, 10.8, 16.1]
   ];
   var averages = [
      [1246406400000, 21.5],
      [1246492800000, 22.1],
      [1246579200000, 23],
      [1246665600000, 23.8],
      [1246752000000, 21.4],
      [1246838400000, 21.3],
      [1246924800000, 18.3],
      [1247011200000, 15.4],
      [1247097600000, 16.4],
      [1247184000000, 17.7],
      [1247270400000, 17.5],
      [1247356800000, 17.6],
      [1247443200000, 17.7],
      [1247529600000, 16.8],
      [1247616000000, 17.7],
      [1247702400000, 16.3],
      [1247788800000, 17.8],
      [1247875200000, 18.1],
      [1247961600000, 17.2],
      [1248048000000, 14.4],
      [1248134400000, 13.7],
      [1248220800000, 15.7],
      [1248307200000, 14.6],
      [1248393600000, 15.3],
      [1248480000000, 15.3],
      [1248566400000, 15.8],
      [1248652800000, 15.2],
      [1248739200000, 14.8],
      [1248825600000, 14.4],
      [1248912000000, 15],
      [1248998400000, 13.6]
   ];

 var legend = {
      
   };
   var series= [{
        name: 'Temperature',
            data: averages,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
        }, {
            name: 'Range',
            data: ranges,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
      }
   ];  
   var json = {};   
   json.title = title;    
   json.xAxis = xAxis;
   json.yAxis = yAxis;
   json.tooltip = tooltip;
   json.legend = legend;     
   json.series = series;
   $('#c16').highcharts(json); 


   var chart = {
      zoomType: 'xy'
   };
 
   var yAxis= [{ // Primary yAxis
      labels: {
         format: '{value}\xB0C',
         style: {
            color: Highcharts.getOptions().colors[2]
         }
      },
      title: {
         text: 'Temperature',
         style: {
            color: Highcharts.getOptions().colors[2]
         }
      },
	  opposite: true
   }, { // Secondary yAxis
      title: {
         text: 'Rainfall',
         style: {
            color: Highcharts.getOptions().colors[0]
         }
      },
      labels: {
         format: '{value} mm',
         style: {
            color: Highcharts.getOptions().colors[0]
         }
      }      
   }, { // Tertiary yAxis
      gridLineWidth: 0,
      title: {
         text: 'Sea-Level Pressure',
         style: {
            color: Highcharts.getOptions().colors[1]
         }
      },
      labels: {
         format: '{value} mb',
         style: {
            color: Highcharts.getOptions().colors[1]
         }
      },
      opposite:true  
   }];
   var tooltip = {
      shared: true
   };
   var legend = {
      layout: 'vertical',
      align: 'left',
      x: 120,
      verticalAlign: 'top',
      y: 100,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
   };
   var series= [{
         name: 'Rainfall',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                valueSuffix: ' mm'
            }

         },{
            name: 'Sea-Level Pressure',
            type: 'spline',
            yAxis: 2,
            data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ' mb'
            }
        },{
            name: 'Temperature',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
                valueSuffix: '\xB0C'
           }
        }
   ];     
      
   var json = {};   
   json.chart = chart;   
   json.title = title;
   json.subtitle = subtitle;      
   json.xAxis = xAxis;
   json.yAxis = yAxis;
   json.tooltip = tooltip;  
   json.legend = legend;  
   json.series = series;
   $('#c10').highcharts(json);  

   var labels = {
      items: [{
         html: 'Total loan amount',
            style: {
               left: '50px',
               top: '18px',
               color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
            }
      }]
   };
   var series= [{
        type: 'column',
            name: 'Jane',
            data: [3, 2, 1, 3, 4]
        }, {
            type: 'column',
            name: 'John',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: 'Joe',
            data: [4, 3, 3, 9, 0]
        }, {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Total consumption',
            data: [{
                name: 'Jane',
                y: 13,
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: 'John',
                y: 23,
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: 'Joe',
                y: 19,
                color: Highcharts.getOptions().colors[2] // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
      }
   ];     
      
   var json = {};   
   json.title = title;   
   json.xAxis = xAxis;
   json.labels = labels;  
   json.series = series;
   $('#c11').highcharts(json); 

     
   var xAxis = {
      min: -0.5,
      max: 5.5
   };
   var yAxis= {
      min: 0
   };
   var series= [{
            type: 'line',
            name: 'Regression Line',
            data: [[0, 1.11], [5, 4.51]],
            marker: {
                enabled: false
            },
            states: {
                hover: {
                    lineWidth: 0
                }
            },
            enableMouseTracking: false
        }, {
            type: 'scatter',
            name: 'Observations',
            data: [1, 1.5, 2.8, 3.5, 3.9, 4.2],
            marker: {
                radius: 4
            }
        }
   ];     
      
   var json = {};   
   json.title = title;
   json.xAxis = xAxis;
   json.yAxis = yAxis;
   json.series = series;
   $('#c12').highcharts(json);  

// Give the points a 3D feel by adding a radial gradient
Highcharts.getOptions().colors = $.map(Highcharts.getOptions().colors, function (color) {
    return {
        radialGradient: {
            cx: 0.4,
            cy: 0.3,
            r: 0.5
        },
        stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.2).get('rgb')]
        ]
    };
});

// Set up the chart
var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'c15',
        margin: 100,
        type: 'scatter',
        options3d: {
            enabled: true,
            alpha: 10,
            beta: 30,
            depth: 250,
            viewDistance: 5,
            fitToPlot: false,
            frame: {
                bottom: { size: 1, color: 'rgba(0,0,0,0.02)' },
                back: { size: 1, color: 'rgba(0,0,0,0.04)' },
                side: { size: 1, color: 'rgba(0,0,0,0.06)' }
            }
        }
    },
    title: {
        text: 'Draggable box'
    },
    subtitle: {
        text: 'Click and drag the plot area to rotate in space'
    },
    plotOptions: {
        scatter: {
            width: 10,
            height: 10,
            depth: 10
        }
    },
    yAxis: {
        min: 0,
        max: 10,
        title: null
    },
    xAxis: {
        min: 0,
        max: 10,
        gridLineWidth: 1
    },
    zAxis: {
        min: 0,
        max: 10,
        showFirstLabel: false
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'Reading',
        colorByPoint: true,
        data: [[1, 6, 5], [8, 7, 9], [1, 3, 4], [4, 6, 8], [5, 7, 7], [6, 9, 6], [7, 0, 5], [2, 3, 3], [3, 9, 8], [3, 6, 5], [4, 9, 4], [2, 3, 3], [6, 9, 9], [0, 7, 0], [7, 7, 9], [7, 2, 9], [0, 6, 2], [4, 6, 7], [3, 7, 7], [0, 1, 7], [2, 8, 6], [2, 3, 7], [6, 4, 8], [3, 5, 9], [7, 9, 5], [3, 1, 7], [4, 4, 2], [3, 6, 2], [3, 1, 6], [6, 8, 5], [6, 6, 7], [4, 1, 1], [7, 2, 7], [7, 7, 0], [8, 8, 9], [9, 4, 1], [8, 3, 4], [9, 8, 9], [3, 5, 3], [0, 2, 4], [6, 0, 2], [2, 1, 3], [5, 8, 9], [2, 1, 1], [9, 7, 6], [3, 0, 2], [9, 9, 0], [3, 4, 8], [2, 6, 1], [8, 9, 2], [7, 6, 5], [6, 3, 1], [9, 3, 1], [8, 9, 3], [9, 1, 0], [3, 8, 7], [8, 0, 0], [4, 9, 7], [8, 6, 2], [4, 3, 0], [2, 3, 5], [9, 1, 4], [1, 1, 4], [6, 0, 2], [6, 1, 6], [3, 8, 8], [8, 8, 7], [5, 5, 0], [3, 9, 6], [5, 4, 3], [6, 8, 3], [0, 1, 5], [6, 7, 3], [8, 3, 2], [3, 8, 3], [2, 1, 6], [4, 6, 7], [8, 9, 9], [5, 4, 2], [6, 1, 3], [6, 9, 5], [4, 8, 2], [9, 7, 4], [5, 4, 2], [9, 6, 1], [2, 7, 3], [4, 5, 4], [6, 8, 1], [3, 4, 0], [2, 2, 6], [5, 1, 2], [9, 9, 7], [6, 9, 9], [8, 4, 3], [4, 1, 7], [6, 2, 5], [0, 4, 9], [3, 5, 9], [6, 9, 1], [1, 9, 2]]
    }]
});


// Add mouse events for rotation
$(chart.container).on('mousedown.hc touchstart.hc', function (eStart) {
    eStart = chart.pointer.normalize(eStart);

    var posX = eStart.pageX,
        posY = eStart.pageY,
        alpha = chart.options.chart.options3d.alpha,
        beta = chart.options.chart.options3d.beta,
        newAlpha,
        newBeta,
        sensitivity = 5; // lower is more sensitive

    $(document).on({
        'mousemove.hc touchdrag.hc': function (e) {
            // Run beta
            newBeta = beta + (posX - e.pageX) / sensitivity;
            chart.options.chart.options3d.beta = newBeta;

            // Run alpha
            newAlpha = alpha + (e.pageY - posY) / sensitivity;
            chart.options.chart.options3d.alpha = newAlpha;

            chart.redraw(false);
        },
        'mouseup touchend': function () {
            $(document).off('.hc');
        }
    });
});

            });
