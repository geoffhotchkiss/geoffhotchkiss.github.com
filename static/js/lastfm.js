var urlrss = "http://ws.audioscrobbler.com/2.0/user/geoff597/recenttracks.rss"

$.get(
	urlrss,
	function(data) {
		console.log("Worked!");
		tracks = data.getElementsByTagName("item");
		$.each(tracks, function(index, track) {
			var trackinfo = buildarray(track);
			$("#lastfmtracks").append("<li> <a href=\"" + trackinfo["link"] + "\">"  + trackinfo["title"] + "</a></li>");
		});
	},
	"xml");

function tdc(track, tag) {
	return track.getElementsByTagName(tag)[0].childNodes[0].nodeValue;
}

function buildarray(track) {
	return {
		"title": tdc(track, "title"),
		"link": tdc(track, "link"),
		"pubDate": tdc(track, "pubDate"),
		"guid": tdc(track, "guid"),
		"description": tdc(track, "description")
	}
}