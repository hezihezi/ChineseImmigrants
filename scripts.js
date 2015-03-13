// I tried to put these three vars to the styles.css file. But then the numbers because undefined. Why?
var numberTextStyle = {
	fontName : 'Helvetica',
	fontSize : 12,
	bold : true,
	color : '#000000',
};

var annotationsTextStyle = {
	fontName : 'Helvetica',
	fontSize : 13,
	bold : true,
	color : '#406214',
};

var verticleTitleTextStyle = {
	title : 'Persons Obtaining Green Cards',
	titleTextStyle : {
		color : '#406214',
		fontSize : 14,
		italic : false
	}
};

// Load the Visualization API and the column chart package.
google.load('visualization', '1', {
	packages : ['corechart']
});
// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a time table,
// instantiates the column chart, passes in the data and
// draws it.
function drawChart() {

	var bigArray = [];

	for (var i = 0; i < ChineseGreenCardData.length; i++) {

		var smallArray = [];

		var everyTen = ChineseGreenCardData[i];

		smallArray.push(everyTen.years);
		smallArray.push(everyTen.persons);

		if (everyTen.years == "2010s") {
			smallArray.push('color: #6AA121;fill-opacity: 0.5')
		} else
			smallArray.push('color: #6AA121');

		// I know this is redundant, but I don't know how to include three keys in one if statement.
		if (everyTen.years == "1820s") {
			smallArray.push(everyTen.persons)
		} else
			smallArray.push(0);
		if (everyTen.years == "1830s") {
			smallArray.push(everyTen.persons)
		} else
			smallArray.push(0);
		if (everyTen.years == "1840s") {
			smallArray.push(everyTen.persons)
		} else
			smallArray.push(0);
		if (everyTen.years == "2010s") {
			smallArray.push("projected")
		} else
			smallArray.push("");

		bigArray.push(smallArray);

	}//end of for loop

	var data = new google.visualization.DataTable();
	data.addColumn('string', 'years');
	data.addColumn('number', 'persons');
	data.addColumn({
		type : 'string',
		role : 'style'
	})
	data.addColumn({
		type : 'number',
		role : 'annotation'
	})
	data.addColumn({
		type : 'number',
		role : 'annotation'
	})
	data.addColumn({
		type : 'number',
		role : 'annotation'
	})
	data.addColumn({
		type : 'string',
		role : 'annotation'
	})
	data.addRows(bigArray);

	var numberFormatter = new google.visualization.NumberFormat({
		fractionDigits : 0
	});
	numberFormatter.format(data, 1);

	var options = {
		title : "The Number of Chinese Getting Green Cards Is Growing Rapidly",
		annotations : {},
		legend : {
			position : 'none'
		},
		hAxis : {},
		vAxis : {}
	};

	options.hAxis.textStyle = numberTextStyle;
	options.vAxis = verticleTitleTextStyle;
	options.vAxis.gridlines = {
		count : 8
	};
	options.vAxis.textStyle = numberTextStyle;
	options.annotations.textStyle = annotationsTextStyle;
	//This is not working either.

	//options.annotations = true;// why this is not putting the annotation out of the bar?? (worked after I changed the gridlines, not because of this code)

	var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));

	chart.draw(data, options);
}
