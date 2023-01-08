// Use D3 library to read json files from URL provided
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it 
d3.json(url).then(function (data) {
    console.log(data)
});

console.log(data);

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.
var samples = data.samples
var metadata = data.metadata

var filterData = metadata.filter(bacteriaInfo => bacteriaInfo.id == patientID)[0]
var filterSample = samples.filter(bacteriaInfo => bacteriaInfo.id == patientID)[0]

// Create variables for chart 
var sample_values = filterSample.sample_values
var otu_ids = filterSample.otu_ids
var otu_labels = filterSample.otu_labels

let trace1 = {
    x: otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse(),
    y: otu_labels.slice(0, 10).reverse(),
    text: sample_values.slice(0, 10).reverse(),
    type: "bar"
};

let traceData = [trace1];

let layout = {
    title: 'The Top 10 OTUs Found'
};

Plotly.newPlot("bar", traceData, layout);
