function FindProxyForURL(url, host) {
	if (shExpMatch(url, '*twitter*')) return 'SOCK5 127.0.0.1:7070';
	if (shExpMatch(url, '*trello*')) return 'SOCK5 127.0.0.1:7070';
	if (shExpMatch(url, '*twimg*')) return 'SOCK5 127.0.0.1:7070';
	if (shExpMatch(url, '*t.co*')) return 'SOCK5 127.0.0.1:7070';
	if (shExpMatch(url, '*twitpic*')) return 'SOCK5 127.0.0.1:7070';
	if (shExpMatch(url, '*tinypic*')) return 'SOCK5 127.0.0.1:7070';
	if (shExpMatch(url, '*img.ly*')) return 'SOCK5 127.0.0.1:7070';
	if (shExpMatch(url, '*yfrog*')) return 'SOCK5 127.0.0.1:7070';
	if (shExpMatch(url, '*appspot*')) return 'SOCK5 127.0.0.1:7070';
	if (shExpMatch(url, '*youtube*')) return 'SOCK5 127.0.0.1:7070';
	if (shExpMatch(url, '*youtu.be*')) return 'SOCK5 127.0.0.1:7070';
	if (shExpMatch(url, '*ytimg*')) return 'SOCK5 127.0.0.1:7070';
	if (shExpMatch(url, '*vimeo*')) return 'SOCK5 127.0.0.1:7070';
	if (shExpMatch(url, '*j.mp*')) return 'SOCK5 127.0.0.1:7070';
	if (shExpMatch(url, '*bit.ly*')) return 'SOCK5 127.0.0.1:7070';
	if (shExpMatch(url, '*cl.ly*')) return 'SOCK5 127.0.0.1:7070';

	return 'DIRECT';
}