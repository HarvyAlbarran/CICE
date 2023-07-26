
$(document).ready(function () {

    TraerWidgets();
    TraerGrafico();
});

function TraerWidgets() {

    $.ajax({
        url: '../../controller/home.php?op=report1',
        type: 'POST',
    }).done(function (data) {
        cadena = "";

        if (data.length > 0) {
            cadena +=
                '<div class="ibox bg-success color-white widget-stat">' +
                    '<div class="ibox-body">' +
                        '<h2 class="m-b-5 ml-4 font-strong">' + data[0] + '</h2>' +
                        '<div class="m-b-5 ml-4">REGISTRADO</div><i class="fa-light fa-cart-shopping"></i>' +
                        '<div></div>' +
                    '</div>' +
                '</div>';
            document.getElementById('div_widget1').innerHTML = cadena;
        }
    });

    $.ajax({
        url: '../../controller/home.php?op=report2',
        type: 'POST',
    }).done(function (data) {
        cadena = "";

        if (data.length > 0) {
            cadena +=
                '<div class="ibox bg-info color-white widget-stat">' +
                    '<div class="ibox-body">' +
                        '<h2 class="m-b-5 ml-4 font-strong">' + data[0] + '</h2>' +
                        '<div class="m-b-5 ml-4">ENVIADO</div><i class="ti-bar-chart widget-stat-icon"></i>' +
                        '<div></div>' +
                    '</div>' +
                '</div>';
            document.getElementById('div_widget2').innerHTML = cadena;
        }
    });

    $.ajax({
        url: '../../controller/home.php?op=report3',
        type: 'POST',
    }).done(function (data) {
        cadena = "";

        if (data.length > 0) {
            cadena += 
                '<div class="ibox bg-warning color-white widget-stat">' +
                    '<div class="ibox-body">' +
                        '<h2 class="m-b-5 font-strong ml-4">' + data[0] + '</h2>' +
                        '<div class="m-b-5 ml-4">APROBADO</div><i class="ti-bar-chart widget-stat-icon"></i>' +
                        '<div></div>' +
                    '</div>' +
                '</div>';
            document.getElementById('div_widget3').innerHTML = cadena;
        }
    });

    $.ajax({
        url: '../../controller/home.php?op=report4',
        type: 'POST',
    }).done(function (data) {
        cadena = "";

        if (data.length > 0) {
            cadena += 
                '<div class="ibox bg-danger color-white widget-stat">' +
                    '<div class="ibox-body">' +
                        '<h2 class="m-b-5 ml-4 font-strong">' + data[0] + '</h2>' +
                        '<div class="m-b-5 ml-4">RECHAZADO</div><i class="ti-bar-chart widget-stat-icon"></i>' +
                        '<div></div>' +
                    '</div>' +
                '</div>';
            document.getElementById('div_widget4').innerHTML = cadena;
        }
    });
}

function generarNumero(numero){
    return (Math.random()*numero).toFixed(0);
}

function colorRGB(red, green, blue){
    return "rgb(" + red + "," + green + "," + blue + ")";
}

var chartLicitacion;
var chartLicitacion1;
var chartLicitacion2;
var chartLicitacion3;

function TraerGrafico(){

    /********************** GRAFICO 1 *********************** */

    $.ajax({
        url: '../../controller/home.php?op=report1',
        type: 'POST',
    }).done(function (data) {
        
        var cadena='';

        if (data.length>0){
            
            var cantidad = new Array();
            var color1 = colorRGB(156,204,101);
            for (let index = 0; index < data.length; index++) {
                cantidad.push(data[index][0]);
            }
            var ctx = document.getElementById('myReportGeneral1').getContext('2d');
            if(chartLicitacion){
                chartLicitacion.reset();
                chartLicitacion.destroy();
            }
            chartLicitacion = new Chart(ctx,{
                type:'bar',
                data: {
                    labels:cantidad,
                    datasets: [{
                        label: 'REGISTRADO',
                        backgroundColor: color1,
                        borderColor: color1,
                        data: cantidad
                    }]
                },
                option:{
                    scales:{
                        xAxes:[{
                            stacked: true
                        }],
                        yAxes:[{
                            stacked:true
                        }]
                    }
                }
            });
        }else{
            var ctx = document.getElementById('myReportGeneral1').getContext('2d');
            if(chartLicitacion){
                chartLicitacion.reset();
                chartLicitacion.destroy();
            }
            chartLicitacion = new Chart(ctx,{
                type:'bar',
                data: {
                    labels:['NO HAY LICITACIONES'],
                    datasets: [{
                        label: 'TOP LICITACIONES',
                        data: [0]
                    }]
                },
                option:{}
            });
        }
    });

    /********************** GRAFICO 2 *********************** */

    $.ajax({
        url: '../../controller/home.php?op=report2',
        type: 'POST',
    }).done(function (data) {
        
        var cadena='';

        if (data.length>0){
            
            var cantidad = new Array();
            var color2 = colorRGB(38,198,218);
            for (let index = 0; index < data.length; index++) {
                cantidad.push(data[index][0]);
                
            }
            var ctx = document.getElementById('myReportGeneral2').getContext('2d');
            if(chartLicitacion1){
                chartLicitacion1.reset();
                chartLicitacion1.destroy();
            }
            chartLicitacion1 = new Chart(ctx,{
                type:'bar',
                data: {
                    labels:cantidad,
                    datasets: [{
                        label: 'ENVIADO',
                        backgroundColor: color2,
                        borderColor: color2,
                        data: cantidad
                    }]
                },
                option:{
                    scales:{
                        xAxes:[{
                            stacked: true
                        }],
                        yAxes:[{
                            stacked:true
                        }]
                    }
                }
            });
        }else{
            var ctx = document.getElementById('myReportGeneral2').getContext('2d');
            if(chartLicitacion1){
                chartLicitacion1.reset();
                chartLicitacion1.destroy();
            }
            chartLicitacion1 = new Chart(ctx,{
                type:'bar',
                data: {
                    labels:['NO HAY LICITACIONES'],
                    datasets: [{
                        label: 'TOP LICITACIONES',
                        data: [0]
                    }]
                },
                option:{}
            });
        }
    });


    /********************** GRAFICO 3 *********************** */

    $.ajax({
        url: '../../controller/home.php?op=report3',
        type: 'POST',
    }).done(function (data) {
        
        var cadena='';

        if (data.length>0){
            
            var cantidad = new Array();
            var color3 = colorRGB(255,202,40);
            for (let index = 0; index < data.length; index++) {
                cantidad.push(data[index][0]);
    
            }
            var ctx = document.getElementById('myReportGeneral3').getContext('2d');
            if(chartLicitacion2){
                chartLicitacion2.reset();
                chartLicitacion2.destroy();
            }
            chartLicitacion2 = new Chart(ctx,{
                type:'bar',
                data: {
                    labels:cantidad,
                    datasets: [{
                        label: 'APROBADO',
                        backgroundColor: color3,
                        borderColor: color3,
                        data: cantidad
                    }]
                },
                option:{
                    scales:{
                        xAxes:[{
                            stacked: true
                        }],
                        yAxes:[{
                            stacked:true
                        }]
                    }
                }
            });
        }else{
            var ctx = document.getElementById('myReportGeneral3').getContext('2d');
            if(chartLicitacion2){
                chartLicitacion2.reset();
                chartLicitacion2.destroy();
            }
            chartLicitacion2 = new Chart(ctx,{
                type:'bar',
                data: {
                    labels:['NO HAY LICITACIONES'],
                    datasets: [{
                        label: 'TOP LICITACIONES',
                        data: [0]
                    }]
                },
                option:{}
            });
        }
    });


    /********************** GRAFICO 2 *********************** */

    $.ajax({
        url: '../../controller/home.php?op=report4',
        type: 'POST',
    }).done(function (data) {
        
        var cadena='';

        if (data.length>0){
            
            var cantidad = new Array();
            var color4 = colorRGB(239,83,80);
            for (let index = 0; index < data.length; index++) {
                cantidad.push(data[index][0]);
                
            }
            var ctx = document.getElementById('myReportGeneral4').getContext('2d');
            if(chartLicitacion3){
                chartLicitacion3.reset();
                chartLicitacion3.destroy();
            }
            chartLicitacion3 = new Chart(ctx,{
                type:'bar',
                data: {
                    labels:cantidad,
                    datasets: [{
                        label: 'RECHAZADO',
                        backgroundColor: color4,
                        borderColor: color4,
                        data: cantidad
                    }]
                },
                option:{
                    scales:{
                        xAxes:[{
                            stacked: true
                        }],
                        yAxes:[{
                            stacked:true
                        }]
                    }
                }
            });
        }else{
            var ctx = document.getElementById('myReportGeneral4').getContext('2d');
            if(chartLicitacion3){
                chartLicitacion3.reset();
                chartLicitacion3.destroy();
            }
            chartLicitacion3 = new Chart(ctx,{
                type:'bar',
                data: {
                    labels:['NO HAY LICITACIONES'],
                    datasets: [{
                        label: 'TOP LICITACIONES',
                        data: [0]
                    }]
                },
                option:{}
            });
        }
    });
}