# js

# sleep

函数需要在async函数里面调用, 例如

```js
async function updateForever() {
    t = this 
    while (true) {
        if (window.location.pathname != "/" && t.hover) {
            t.fetch()
            await sleep(10)
        } else {
            await sleep(1)
        }
    }
}
```

# Url

例如

```javascript
// print(Url("https://stackoverflow.com/questions/3390396/how-can-i-check-for-undefined-in-javascript?a=b&c=d&e=f&k=9"))
{
  protocol: 'https:',
  username: '',
  password: '',
  host: 'stackoverflow.com',
  hostname: 'stackoverflow.com',
  port: '',
  path: '/questions/3390396/how-can-i-check-for-undefined-in-javascript',
  params: { a: 'b', c: 'd', e: 'f', k: '9' }
}
```