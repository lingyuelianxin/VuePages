// 防抖  防止抖动，单位时间内事件触发会被重置，避免事件被误伤触发多次。代码实现重在清零 clearTimeout
// 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖
// 调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖
// 文本编辑器实时保存，当无任何更改操作一秒后进行保存
export function debounce(fn, duration = 100) {
    let timer;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, duration)
    }
}

// 节流 控制流量，单位时间内事件只能触发一次。代码实现重在开锁关锁 timer=timeout; timer=null。
// scroll 事件，每隔一秒计算一次位置信息等
// 浏览器播放事件，每个一秒计算一次进度信息等
// 懒加载、滚动加载、加载更多或监听滚动条位置；
// input 框实时搜索并发送请求展示下拉列表，每隔一秒发送一次请求 (也可做防抖)
export function throttle(fn, duration = 100) {
    let timer
    return (...args) => {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn(...args)
            timer = null
        }, duration)
    }
}

export function flatten(arr) {
    return arr.reduce((result, item) => {
      return result.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}


export function deepClone(obj) {
    if (!obj || typeof obj !== "object") return;
    let newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
      }
    }
    return newObj;
}

export function newfunction() {
    let arr = [{newLine:true},{newLine:false},{newLine:true},{newLine:false},{newLine:false},{newLine:true},{newLine:false}]
    var newArr = [];
    arr.forEach((item,index)=> {
        if(item.newLine===true){
            newArr.push([item])
        }else{
            let len = newArr.length-1
            if(len>=0){
                newArr[len].push(item)
            }else{
                newArr.push([item])
            }
        }
    })
  console.log(newArr);
}