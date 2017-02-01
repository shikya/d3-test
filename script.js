
var width = 200,
    height = 200,
    data = [10, 15, 50, 56, 140, 150, 200, 220]

console.log(d3);

var scaling = d3.scaleLinear()
    .domain([0, 220])
    .range([0, width]);

var canvas = d3
    .select('.barchart')
    .append('svg')
    .attr('width',width).attr('height',height);

var chart = canvas
        .selectAll('rec')
        .data(data)
        .enter()
            .append('rect')
            .attr('x',0)
            .attr('y',function(d, i){
                return 10+ i*20
            })
            .attr('width',function(d, i){
                // return d;
                return scaling(d);
            })
            .attr('height',10)
            .attr('fill','red')