import {Text, View} from '@tarojs/components'
import {createSelectorQuery, useReady} from "@tarojs/taro";
import './index.scss'

export default function Index() {

  // useReady(() => {
  //   createSelectorQuery().select(".index")
  //     .boundingClientRect(value => console.log("boundingClientRect", value))
  //     .exec()
  // })
  //
  // useReady(() => {
  //   createSelectorQuery().select(".index")
  //     .boundingClientRect()
  //     .exec(value => console.log("boundingClientRect exec", value))
  // })

  // useReady(() => {
  //   createSelectorQuery().select(".index")
  //     .fields({
  //       rect: true,
  //       node: true,
  //       computedStyle: ["width", "height"]
  //     }, value => console.log("fields", value))
  //     .exec()
  // })
  //
  // useReady(() => {
  //   createSelectorQuery().select(".index")
  //     .fields({
  //       rect: true,
  //       node: true,
  //       computedStyle: ["width", "height"]
  //     })
  //     .exec(value => console.log("fields exec", value))
  // })

  // useReady(() => {
  //   createSelectorQuery().select(".index")
  //     .scrollOffset(value => console.log("scrollOffset", value))
  //     .exec()
  // })
  //
  // useReady(() => {
  //   createSelectorQuery().select(".index")
  //     .scrollOffset()
  //     .exec(value => console.log("scrollOffset exec", value))
  // })

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

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}
