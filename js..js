google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Year', 'Visitors',],
        ['2008-2009', 1556162],
        ['2009-2010', 1459080],
        ['2010-2011', 1543232],
        ['2011-2012', 1660450],
        ['2012-2013', 1506274]
    ]);

    var options = {
        title: 'L.A. Zoo Attendence 2008-2013.',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Visitors.',
            minValue: 0
        },
        vAxis: {
            title: 'Year'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}