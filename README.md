detect node engines and js enviroments directly from your scripts
# Install
```sh
npm install @daxplrer/isnode
# or
npm install --save @daxplrer/isnode
```
# Updates
- The execution speed was optimized! From 5 seconds to 3.5 seconds 🎉
# Examples

### detect if the node engine is v8
```js
import isnode from '@daxplrer/isnode'
// you can use require too
// const isnode = require('@daxplrer/isnode')

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
import isnode from '@daxplrer/isnode'
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