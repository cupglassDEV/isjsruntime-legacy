check the [new repo](https://github.com/cupglass/isjsruntime) if you want to use it <br>
which includes
- jsr support
- support deno, bun, and other runtime
- no dependecies required (or if you are in nodejs, you must install the typescript package)
- natively using esm
- no nested objects
<hr>
detect node engines and js enviroments directly from your scripts
# Install
```sh
npm install @cupglassdev/isnode
# or
npm install --save @cupglassdev/isnode
```
# Updates
- The execution speed was optimized! From 5 seconds to 3.5 seconds 🎉
# Examples

### detect if the node engine is v8
```js
import isnode from '@cupglassdev/isnode'

function isusingv8() {
// check using the engine() function
if (isnode.engine()==='v8') return true
else return false;

}

// send the output to the console
console.log(isusingv8())
```

### detect if the js enviroment is in jxcore
```js
import isnode from '@cupglassdev/isnode'
async function run(){
if (await isnode.env()==='jx'){ 
  console.log('you are in jxcore')
} else {
  throw new Error('it looks like you are using another js enviroment')
}
}
run()
```
# Source code
 [github repo](https://github.com/daxplrer/isnode)
