# Array

### 数组去重

```JS
    // ES5
    function arrFn(arr) {
      let res = arr.filter(function(item, index, array){
          return array.indexOf(item) === index
      })
      return res
    }
    //ES6
    let arrFn1 = arr => [...new Set(arr)]

    let arrFn2 = Array.from(new Set(arrList))

    let rs = new Map()
    array.filter(a => !rs.has(a) && rs.set(a, 1))
```

### 数组扁平化

```JS
    Array.prototype.flat() -->  Array.flat(2)

    //ES5递归
    function arrayFn(arr){
        var result = []
        for(var i = 0, len = arr.length;i<len;i++){
            if(Array.isArray(arr[i])){
                result = result.concat(arrayFn(arr[i]))
            }else{
                result.push(arr[i])
            }
        }
        return result
    }

```
