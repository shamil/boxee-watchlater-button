// Boxee bookmarklet

var b = document.body;
if (b && !document.xmlVersion)
{
    void(z = document.createElement('script'));
    void(z.src = 'http://www.boxee.tv/queue/watchlaterloader?' + (new Date()).getTime().toString());
    void(b.appendChild(z));
}
else {}


