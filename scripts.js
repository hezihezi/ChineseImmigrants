    // Load the Visualization API and the column chart package.
    google.load('visualization', '1', {packages: ['corechart']});
    // Set a callback to run when the Google Visualization API is loaded.
    google.setOnLoadCallback(drawChart);

	// Callback that creates and populates a time table,
    // instantiates the column chart, passes in the data and
    // draws it.
    function drawChart() {
    	
      var bigArray = [];
      
      for (var i=0; i<ChineseGreenCardData.length; i++){
      		
      		var smallArray = [];
      		
      		var everyTen = ChineseGreenCardData[i];
      		
      		smallArray.push(everyTen.years);
      		smallArray.push(everyTen.persons);
      		
      		if (everyTen.years == "2010s"){
      		smallArray.push('color: #6AA121;fill-opacity: 0.2')
      	}else
      		smallArray.push('color: #6AA121');		
      		
      		bigArray.push(smallArray);
      	
      }//end of for loop

      
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'years');
      data.addColumn('number', 'persons');
      data.addColumn({type:'string', role:'style'})
      data.addRows(bigArray);
      
      var numberFormatter = new google.visualization.NumberFormat({fractionDigits:0});
      numberFormatter.format(data,1);

      var options = {
        hAxis: {},
        vAxis: {}
      };

		options.hAxis
		options.vAxis.title = "persons obtaining green cards in the given decade"
		
		
      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }
      