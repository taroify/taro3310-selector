### Selector API 在支付宝小程序上存在一些问题

#### 不支持 boundingClientRect(cb) 回调

```tsx

useReady(() => {
  createSelectorQuery().select(".index")
    // 不支持这种方式回调
    .boundingClientRect(rect => console.log("boundingClientRect", rect))
    .exec()
})

useReady(() => {
  createSelectorQuery().select(".index")
    .boundingClientRect()
    // 只支持这种方式回调
    .exec(rect => console.log("boundingClientRect exec", rect))
})
```

#### fields() 为 undefined

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

