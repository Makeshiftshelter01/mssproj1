

var mainScreenCanvas = document.getElementById('mainChart');


function lineChart(canvas, labelArray, desc1,desc2, dataArray1, dataArray2) {
    var basicLineChart = new Chart(canvas, {
        type : 'line',
        data : {
            labels : labelArray,
            datasets : [
                {
                    label : desc1,
                    data : dataArray1,
                    fill : false,
                    backgroundColor :'#5580A0',
                    borderColor : '#5580A0',
                    pointHoverBorderWidth :10,
                    lineTension : 0
                }, 
                {
                    label : desc2,
                    data : dataArray2,
                    fill : false,
                    backgroundColor :'#C43E3C',
                    borderColor : '#C43E3C',
                    pointHoverBorderWidth :10
                }

            ]
        },
        options : {
           title : {
               display: true,
               text : '문재인 대통령 국정 수행 지지도',
               fontSize : 25
           },
           scales :{
               yAxes: [{
                   ticks : {
                       suggestedMin : 40,
                       suggestedMax: 50
                   }
               }]
           }
    
        }
    });

    return basicLineChart;

}





var moonPopLabel = ['18-12 1주', '18-12 2주', '18-12 3주', '19-01 2주', '19-01 3주', '19-01 4주', '19-01 5주', '19-02 2주', '19-02 3주', '19-02 4주', '19-03 1주', '19-03 2주']

var moonValue1 = [49, 45, 45, 48, 47, 46, 47, 47, 45, 49, 46, 44]

var moonValue2 = [41, 44, 46, 44, 44, 45, 44, 44, 45, 42, 45, 46]

var moonPopDesc1 = '긍정적 응답 (%)'

var moonPopDesc2 = '부정적 응답 (%)'

var mainChart = lineChart(mainScreenCanvas, moonPopLabel , moonPopDesc1,moonPopDesc2, moonValue1, moonValue2);