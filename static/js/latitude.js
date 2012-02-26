function doLatitude( id, elem ) {
	var url = "http://www.google.com/latitude/apps/badge/api";
	var data = $.param({
		user: id,
		type: "json"
	});
	var full_url = url + "?" + data;

	$.yql(
		"SELECT features.properties.reverseGeocode FROM json WHERE url=@url",
		{
			url: "http://www.google.com/latitude/apps/badge/api?" + $.param({
				user: id,
				type: "json"
			})
		},
		function( data ) {
			data = data.query.results;
			if( data == null ) return; // Location unavailable... do nothing
			elem.replaceWith(data.json.features.properties.reverseGeocode);
		},
		function( _, textStatus, errorThrown ) {
			elem.replaceWith(textStatus + ": " + errorThrown);
		}
	);
}