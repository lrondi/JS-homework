// from data.js

var tableData = data;

function BuildTable(dict){
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;
    for (var i = 0; i < dict.length; i++) {
      trow = tbody.append("tr");
      trow.append("td").text(dict[i]['datetime']);
      trow.append("td").text(dict[i]['city']);
      trow.append("td").text(dict[i]['state']);
      trow.append("td").text(dict[i]['country']);
      trow.append("td").text(dict[i]['shape']);
      trow.append("td").text(dict[i]['durationMinutes']);
      trow.append('td').text(dict[i]['comments']);
    }
}
BuildTable(tableData);

var submit = d3.select("#filter-btn");

submit.on("click", function() {

  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  var elmtTable = document.getElementById('table-body');
  var tableRows = elmtTable.getElementsByTagName('tr');
  var rowCount = tableRows.length;

  for (var x=rowCount-1; x>0; x--) {
     elmtTable.removeChild(tableRows[x]);
  }

   BuildTable(filteredData);
});
