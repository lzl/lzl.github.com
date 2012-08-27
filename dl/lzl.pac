function FindProxyForURL(url, host) {
	if (shExpMatch(url, '*twitter.com*')) return 'SOCKS5 127.0.0.1:1080';
	if (shExpMatch(url, '*twimg.com*')) return 'SOCKS5 127.0.0.1:1080';
	if (shExpMatch(url, '*t.co*')) return 'SOCKS5 127.0.0.1:1080';
	if (shExpMatch(url, '*twitpic.com*')) return 'SOCKS5 127.0.0.1:1080';
	if (shExpMatch(url, '*tinypic.com*')) return 'SOCKS5 127.0.0.1:1080';
	if (shExpMatch(url, '*img.ly*')) return 'SOCKS5 127.0.0.1:1080';
	if (shExpMatch(url, '*yfrog.com*')) return 'SOCKS5 127.0.0.1:1080';
	return 'DIRECT';
}