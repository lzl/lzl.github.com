function FindProxyForURL(url, host) {
	if (shExpMatch(url, '*google.com*')) return 'SOCKS5 127.0.0.1:8080';
	if (shExpMatch(url, '*appspot.com*')) return 'SOCKS5 127.0.0.1:8080';
	if (shExpMatch(url, '*youtube.com*')) return 'SOCKS5 127.0.0.1:8080';
	if (shExpMatch(url, '*youtu.be*')) return 'SOCKS5 127.0.0.1:8080';
	if (shExpMatch(url, '*ytimg.com*')) return 'SOCKS5 127.0.0.1:8080';
	if (shExpMatch(url, '*twitter.com*')) return 'SOCKS5 127.0.0.1:8080';
	if (shExpMatch(url, '*twimg.com*')) return 'SOCKS5 127.0.0.1:8080';
	if (shExpMatch(url, '*t.co*')) return 'SOCKS5 127.0.0.1:8080';
	if (shExpMatch(url, '*twitpic.com*')) return 'SOCKS5 127.0.0.1:8080';
	if (shExpMatch(url, '*github.com*')) return 'SOCKS5 127.0.0.1:8080';
	if (shExpMatch(url, '*tinypic.com*')) return 'SOCKS5 127.0.0.1:8080';
	if (shExpMatch(url, '*img.ly*')) return 'SOCKS5 127.0.0.1:8080';
	if (shExpMatch(url, '*yfrog.com*')) return 'SOCKS5 127.0.0.1:8080';
	if (shExpMatch(url, '*tumblr.com*')) return 'SOCKS5 127.0.0.1:8080';
	if (shExpMatch(url, '*feedburner.com*')) return 'SOCKS5 127.0.0.1:8080';
	if (shExpMatch(url, '*wordpress.com*')) return 'SOCKS5 127.0.0.1:8080';
	if (shExpMatch(url, '*bit.ly*')) return 'SOCK5 127.0.0.1:8080';
	if (shExpMatch(url, '*cl.ly*')) return 'SOCK5 127.0.0.1:8080';
	if (shExpMatch(url, '*vimeo*')) return 'SOCK5 127.0.0.1:8080';
	if (shExpMatch(url, '*j.mp*')) return 'SOCK5 127.0.0.1:8080';
	
	return 'DIRECT';
}
