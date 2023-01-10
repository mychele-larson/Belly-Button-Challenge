// Set up URL for data
const url =
    "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise pending for obtaining JSON data from URL
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function (data) {
    console.log(data);
});



//     let selector = d3.select("#selDataset");
//     meta = data.metadata;
//     samples = data.samples;
//     data.names.forEach((id) => {
//         selector.append("option").text(id).property("value", id);
//     });
//     metaData(meta[0]);
//     hbarChart(samples[0]);
//     bubbleChart(samples[0]);
//     gaugeChart(meta[0]);

// });