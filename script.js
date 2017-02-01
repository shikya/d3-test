var canvas = d3
    .select('body')
    .append('svg')
    .attr('width',700).attr('height',700);

var rectangle = canvas
    .append('rect')
    .attr('x',100).attr('y',100)
    .attr('width',300)
    .attr('height',300)
    .attr('fill','green');


var circle = canvas
    .append('circle')
    .attr('cx',300).attr('cy',100)
    .attr('r',50)
    .attr('fill','blue');

var line = canvas
    .append('line')
    .attr('x1',250).attr('y1',250)
    .attr('x2',300).attr('y2',100)
    .attr('stroke','white')
    .attr('stroke-width',3);    