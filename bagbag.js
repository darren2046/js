function print(message) {
    console.log(message)
}

function int(obj) {
    return parseInt(obj)
}

function str(obj) {
    return String(obj)
}

function isUndefined(obj) {
    if (typeof obj !== 'undefined') {
        return false
    } 
    return true
}

function sleep(second) {
    return new Promise(resolve => setTimeout(resolve, second * 1000));
}

// ----------

function hasSubstringAt(str, substr, pos) {
    var idx = 0, len = substr.length;

    for (var max = str.length; idx < len; ++idx) {
        if ((pos + idx) >= max || str[pos + idx] != substr[idx])
            break;
    }

    return idx === len;
}

function trimWord(str, word) {
    var start = 0,
        end = str.length,
        len = word.length;

    while (start < end && hasSubstringAt(str, word, start))
        start += word.length;

    while (end > start && hasSubstringAt(str, word, end - len))
        end -= word.length

    return (start > 0 || end < str.length) ? str.substring(start, end) : str;
}

String.prototype.strip = function (substr) {
    if (isUndefined(substr)) {
        return this.trim()
    }
    return trimWord(this, substr)
};

// print(" aa,aa,a k \n\n".strip().strip("k").strip().split(",")) ==> [ 'aa', 'aa', 'a' ]

// -----------

function Url(url) {
    if (isUndefined(url)) {
        url = window.location.href
    } 
    uo = new URL(url)
    
    search = uo.search.substring(1)

    uj = {
        protocol: uo.protocol,
        username: uo.username,
        password: uo.password,
        host: uo.host, 
        hostname: uo.hostname, 
        port: uo.port, 
        path: uo.pathname,
        params: JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}'),
    }
    return uj
}

// print(Url("https://stackoverflow.com/questions/3390396/how-can-i-check-for-undefined-in-javascript?a=b&c=d&e=f&k=9"))
// {
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'stackoverflow.com',
//     hostname: 'stackoverflow.com',
//     port: '',
//     path: '/questions/3390396/how-can-i-check-for-undefined-in-javascript',
//     params: { a: 'b', c: 'd', e: 'f', k: '9' }
// }