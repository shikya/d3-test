var orangedata = [10, 30 ,50 ,100];

var canvas = d3
    .select('.orangecontainers')
    .append('svg')
    .attr('width',1024).attr('height',768);

var orange = canvas
    .selectAll('circle')
    .data(orangedata)
    .enter()
        .append('circle')
        .attr('fill','orange')
        .attr('cx',function(d, i){
            return d+ i*100;
        })
        .attr('cy',function(d,i){
            return d
        })
        .attr('r',function(d, i){
            return d;
        })