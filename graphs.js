 
 $(function () { 


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

   var tooltip = {
      valueSuffix: ' Naira'
   }

   var legend = {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
   };

   var series =  [
      {
         name: 'Ags 1',
         data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
            26.5, 23.3, 18.3, 13.9, 9.6]
      }, 
      {
         name: 'Ags 2',
         data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,
            24.1, 20.1, 14.1, 8.6, 2.5]
      }, 
      {
         name: 'Ags 3',
         data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6,
            17.9, 14.3, 9.0, 3.9, 1.0]
      }, 
      {
         name: 'Ags 4',
         data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 
            16.6, 14.2, 10.3, 6.6, 4.8]
      }
   ];


var json = {};



json.title = title;
json.subtitle = subtitle;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.tooltip = tooltip;
json.legend = legend;
json.series = series;

$('#c1').highcharts(json);


 var chart = {
      type: 'scatter',
	  zoomType: 'xy'
   };var legend = {   
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 100,
      y: 70,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
      borderWidth: 1
   }  
   var plotOptions = {
      scatter: {
         marker: {
            radius: 5,
            states: {
               hover: {
                  enabled: true,
                  lineColor: 'rgb(100,100,100)'
               }
            }
         },
         states: {
            hover: {
               marker: {
                  enabled: false
               }
            }
         },
         tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x} cm, {point.y} kg'
         }
      }
   };
   
json.legend = legend;
json.plotOptions = plotOptions; 
json.chart = chart;
   $('#c6').highcharts(json);
var chart = {
      renderTo: 'container',
      type: 'column',
      margin: 75,
      options3d: {
         enabled: true,
         alpha: 15,
         beta: 15,
         depth: 50,
         viewDistance: 25
      }
   };
  
json.chart = chart;
$('#c2').highcharts(json);
  var chart = {      
      type: 'pie',     
      options3d: {
         enabled: true,
         alpha: 45,
         beta: 0
      }
   };
    var plotOptions = {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
             enabled: true,
             format: '{point.name}'
          }
      }
   };   
   var series= [{
         type: 'pie',
            name: 'Total loan amount',
            data: [
                ['Ags 1',   45.0],
                ['Ags 2',       26.8],
                
                ['Ags 3',    8.5],
                ['Ags 4',     6.2] 
   ]}];
json.plotOptions = plotOptions; 
   json.series = series;   
json.chart = chart;
$('#c3').highcharts(json);

 var chart = {      
      type: 'pie',     
      options3d: {
         enabled: true,
         alpha: 45         
      }
   };
  var plotOptions = {
      pie: {
         innerSize: 100,
         depth: 45
      }
   };  
json.chart = chart;

json.plotOptions = plotOptions; 
$('#c4').highcharts(json);
var chart = {
      type: 'bubble',
	  plotBorderWidth: 1,
      zoomType: 'xy'
   };
   

   var series= [{
           data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6,
            17.9, 14.3, 9.0, 3.9, 1.0],
            marker: {
                fillColor: {
                    radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                    stops: [
                        [0, 'rgba(255,255,255,0.5)'],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get('rgba')]
                    ]
                }
            }
        }, {
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 
            16.6, 14.2, 10.3, 6.6, 4.8],
            marker: {
                fillColor: {
                    radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                    stops: [
                        [0, 'rgba(255,255,255,0.5)'],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get('rgba')]
                    ]
                }
            }
      }
   ];     
      
   var json = {};   
   json.chart = chart; 
   json.title = title;   
   json.xAxis = xAxis;   
   json.yAxis = yAxis;      
   json.series = series;   
      
   $('#c5').highcharts(json);

    var chart = {
      type: 'areaspline'	  
   };
    
   var subtitle = {
      style: {
         position: 'absolute',
         right: '0px',
         bottom: '10px'
      }
   };
   var legend = {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 150,
      y: 100,
      floating: true,
      borderWidth: 1,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
   };
    
   var tooltip = {
       shared: true,
       valueSuffix: ' units'
   };
   var credits = {
       enabled: false
   }
   var plotOptions = {
      areaspline: {
         fillOpacity: 0.5
      }
   };   
       
      
   var json = {};   
   json.chart = chart; 
   json.title = title; 
   json.subtitle = subtitle; 
   json.xAxis = xAxis;
   json.yAxis = yAxis;
   json.legend = legend;   
   json.plotOptions = plotOptions;
   json.credits = credits;
   json.series = series;
   $('#c8').highcharts(json);
});