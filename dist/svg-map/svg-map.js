$(document).ready(function(){
	var chart = am4core.create("svg-map", am4maps.MapChart);
	chart.geodata = am4geodata_canadaHigh;

	// Set projection
	chart.projection = new am4maps.projections.Miller();

	// Create map polygon series
	var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

	// Make map load polygon (like country names) data from GeoJSON
	polygonSeries.useGeodata = true;
	polygonSeries.properties.fillOpacity =1;
	polygonSeries.propertyFields.fill = "color";


	// Configure series
	var polygonTemplate = polygonSeries.mapPolygons.template;
	polygonTemplate.tooltipText = "{name}";
	polygonTemplate.fill = am4core.color("#cdcecf");

	// Create hover state and set alternative fill color
	var hs = polygonTemplate.states.create("hover");
	hs.properties.fill = am4core.color("#F73B5D");

	// Remove Antarctica

	var polygonTemplate = polygonSeries.mapPolygons.template;
	polygonSeries.data = [
		{
			id: "CA-AB",
			name: "Alberta",
			value: 4447
		},{
			id: "CA-BC",
			name: "British Columbia",
			value:3214
		},{
			id: "CA-MB",
			name: "Manitoba",
			value:4234
		},{
			id: "CA-NB",
			name: "New Brunswick",
			value:2134
		},{
			id: "CA-NL",
			name: "Newfoundland and Labrador",
			value:12425
		},{
			id: "CA-NS",
			name: "Nova Scotia",
			value:32
		},{
			id: "CA-NT",
			name: "Northwest Territories",
			value:8132
		},{
			id: "CA-NU",
			name: "Nunavut",
			value:3141
		},{
			id: "CA-ON",
			name: "Ontario",
			value:21321
		},{
			id: "CA-PE",
			name: "Prince Edward Island",
			value:5453
		},{
			id: "CA-QC",
			name: "Quebec",
			value:1233
		},{
			id: "CA-SK",
			name: "Saskatchewan",
			value:1441
		},{
			id: "CA-YT",
			name: "Yukon",
			value:5532
		}
	]
	var tooltip = '{name}: {value} Brokers'
	var polygonTemplate = polygonSeries.mapPolygons.template;
	polygonTemplate.tooltipText = tooltip;
	polygonTemplate.nonScalingStroke = true;
	polygonTemplate.strokeWidth = 0.5;
	polygonSeries.heatRules.push({
	  property: "fill",
	  target: polygonSeries.mapPolygons.template,
	  min: chart.colors.getIndex(0).darkColor(),
	  max: chart.colors.getIndex(00000).brighten(-0.3)
	});
	console.log(polygonSeries.heatRules)

})
