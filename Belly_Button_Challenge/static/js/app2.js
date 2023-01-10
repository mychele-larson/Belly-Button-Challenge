// Set up URL for data
const url =
    "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise pending for obtaining JSON data from URL
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function (data) {
    function createDropDown(data) {
        var names = data.names;
        var select = d3.select("#selDataset");

        names.forEach((name) => {
            select.append("option").text(name).property("value", name);
        });
    }
}
    // function init() {
    //     var firstName = data.names[0];
    //     getData(firstName)