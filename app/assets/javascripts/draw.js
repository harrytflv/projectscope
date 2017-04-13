/**
 * Created by stevenwuyinze on 3/22/17.
 */


function parseChartParams(JSONStr) {
    var paramMap = JSONStr;
    if (JSONStr['chartType'] == "spline"){
      var chartParams = {
          chart: {
              type: paramMap['chartType'],
              spacingBottom: 0,
              spacingTop: 0,
              spacingLeft: 0,
              spacingRight: 0,
              height: 250
          },
          title: {
              text: paramMap['titleText']
          },
          subtitle: {
              text: paramMap['subtitleText']
          },
          xAxis: {
              title: {
                  margin: 0,
                  text: paramMap['xAxisTitleText']
              },
              // labels: {
              //     formatter: function () {
              //         return this.value + paramMap['xAxisUnit'];
              //     }
              // },
              maxPadding: 0.01,
              // showLastLabel: true
          },
          yAxis: {
              title: {
                  margin: 0,
                  text: paramMap['yAxisTitleText']
              },
              maxPadding: 0.01
              // labels: {
              //     formatter: function () {
              //         return this.value + paramMap['yAxisUnit'];
              //     }
              // },
              //lineWidth: 2
          },
          // legend: {
          //     enabled: false
          // },
          // tooltip: {
          //     headerFormat: '<b>{series.name}</b><br/>',
          //     pointFormat: '{point.x} km: {point.y}°C'
          // },
          // plotOptions: {
          //     spline: {
          //         marker: {
          //             enable: false
          //         }
          //     }
          // },
          series: [{
              data: paramMap['data']
          }]
      };
    }else if(JSONStr['chartType'] == "pie"){
      var chartParams = {
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: paramMap["chartType"]
          },
          title: {
              text: paramMap["titleText"]
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: false,
                      format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                      style: {
                          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                      }
                  }
              }
          },
          series: paramMap['data']
      };
    }else{
      debugger
    }

    return chartParams
}

function drawHighCharts(containerID, JSONStr) {
    Highcharts.chart(containerID, parseChartParams(JSONStr));
}
