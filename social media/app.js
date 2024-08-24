$(document).ready(function(){

var options={
    series:[{
name:'series1',
data:[101,64,78,191,42,109,100,230]



    },{


        name:'series2',
        data:[41,32,85,23,99,20,87,23]

    }],
    chart:{
        height:300,
        type:'area',
        toolbar:{
            show:false,
        }


    },
    dataLabels:{
        enabled:false,
    }
    ,colors:['#1a73e8','#e91e63'],
    stroke:{
        curve:'smooth',
    },fill:{
        type:'gradient',
        gradient:{
            opacityFrom:0.6,
            opacityTo:0.8,
        }

    },
    tooltip:{
        theme:'dark',
    },
    xaxis:{
        categories:["january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october"
        ],
        labels:{
            style:{
                colors:'white'
            }
        },
    },
    yaxis:{
        labels:{
            style:{
                colors:'white'
            }
        }
    },
    legend:{
labels:{
    colors:'white'
},
    },


};

var chart = new ApexCharts(document.querySelector("#chLine"),options);
chart.render();


//doubnut charat

var options={
series:[44,55,17,34],
labels:['impressions','followers','likes','shares'],
chart:{
    type:'donut',
    height:250,
    plotoption:{
        pie:{
            expandObClick:true
        },

    },
},
colors:['#3a86ff','#3d348b','#ff006e','#ffbe0b'],
legend:{
    show:false
}
};
var chart= new ApexCharts(document.querySelector('#dobnutchart'),options)
chart.render();

})
