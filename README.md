## Selector API 在支付宝小程序上存在一些问题

### 不支持 boundingClientRect(cb) 回调

```tsx

useReady(() => {
  createSelectorQuery().select(".index")
    // 不支持这种方式回调
    .boundingClientRect(value => console.log("boundingClientRect", value))
    .exec()
})

useReady(() => {
  createSelectorQuery().select(".index")
    .boundingClientRect()
    // 只支持这种方式回调
    .exec(value => console.log("boundingClientRect exec", value))
})
```

### fields is not a function

```tsx
useReady(() => {
  createSelectorQuery().select(".index")
    .fields({
      rect: true,
      node: true,
      computedStyle: ["width", "height"]
    }, fields => console.log("fields", fields))
    .exec()
})

useReady(() => {
  createSelectorQuery().select(".index")
    .fields({
      rect: true,
      node: true,
      computedStyle: ["width", "height"]
    })
    .exec(fields => console.log("fields exec", fields))
})
```
调用 fields() 方法时，报错：

![fields](https://raw.githubusercontent.com/taroify/taro3310-selector/main/images/fields.png)

### 不支持 scrollOffset(cb) 回调

```tsx
useReady(() => {
  createSelectorQuery().select(".index")
    // 不支持这种方式回调
    .scrollOffset(value => console.log("scrollOffset", value))
    .exec()
})

useReady(() => {
  createSelectorQuery().select(".index")
    .scrollOffset()
    // 只支持这种方式回调
    .exec(value => console.log("scrollOffset exec", value))
})
```

### node is not a function

```tsx
  useReady(() => {
  createSelectorQuery().select(".index")
    .node(value => console.log("node", value))
    .exec()
})

useReady(() => {
  createSelectorQuery().select(".index")
    .node()
    .exec(value => console.log("node exec", value))
})
```
调用 node() 方法时，报错：

![node](https://raw.githubusercontent.com/taroify/taro3310-selector/main/images/node.png)
