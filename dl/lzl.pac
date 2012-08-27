function FindProxyForURL(url, host) {
	if (shExpMatch(url, '*twitter*')) return 'SOCK5 127.0.0.1:1080';
	if (shExpMatch(url, '*github*')) return 'SOCK5 127.0.0.1:1080';
	if (shExpMatch(url, '*trello*')) return 'SOCK5 127.0.0.1:1080';
	if (shExpMatch(url, '*twimg*')) return 'HTTP 127.0.0.1:8087';
	if (shExpMatch(url, '*t.co*')) return 'HTTP 127.0.0.1:8087';
	if (shExpMatch(url, '*twitpic*')) return 'HTTP 127.0.0.1:8087';
	if (shExpMatch(url, '*tinypic*')) return 'HTTP 127.0.0.1:8087';
	if (shExpMatch(url, '*img.ly*')) return 'HTTP 127.0.0.1:8087';
	if (shExpMatch(url, '*yfrog*')) return 'HTTP 127.0.0.1:8087';
	if (shExpMatch(url, '*google*')) return 'HTTP 127.0.0.1:8087';
	if (shExpMatch(url, '*appspot*')) return 'HTTP 127.0.0.1:8087';
	if (shExpMatch(url, '*youtube*')) return 'HTTP 127.0.0.1:8087';
	if (shExpMatch(url, '*youtu.be*')) return 'HTTP 127.0.0.1:8087';
	if (shExpMatch(url, '*ytimg*')) return 'HTTP 127.0.0.1:8087';
	if (shExpMatch(url, '*vimeo*')) return 'HTTP 127.0.0.1:8087';
	if (shExpMatch(url, '*j.mp*')) return 'HTTP 127.0.0.1:8087';
	if (shExpMatch(url, '*bit.ly*')) return 'HTTP 127.0.0.1:8087';
	if (shExpMatch(url, '*cl.ly*')) return 'HTTP 127.0.0.1:8087';

	return 'DIRECT';
}