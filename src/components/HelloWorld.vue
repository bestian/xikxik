<template lang="jade">
  .hello
    .ui.container.two.column.grid
      .column
        h1 拾詩氏
        img(src = 'http://lorempixel.com/400/200/')
        .ui.list
          .item(v-for = "i in [1,2,3]")
            h2 {{ p('a') }}{{ p('vt') }}{{ p('n') }}
          .item
            h2 {{ p('c') }}
          .item(v-for = "i in [1,2,]")
            h2 {{ p('a') }}{{ p('vt') }}{{ p('n') }}
          .item
            h2 {{ p('a') }}{{ p('vi') }}
      .column
        h1 小道小報
        img(src = 'http://lorempixel.com/300/200/')
        .ui.list
          .item
            h2 {{ p('a') }}昨天在{{ p('n') }}旁{{ p('vt') }}{{ p('a') }}，引來{{ p('num') }}人關注

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      a: ['海鷗', '貓', '狗', '鯨魚', '水獺', '烏龜',
        '地鼠'],
      n: ['天空', '大地', '河流', '大火', '風', '雷電', '高山',
        '湖泊', '浮雲', '山嵐', '大海', '石頭', '漩渦',
        '樹', '草', '花', '森林', '山脈', '海島', '平原', '沼澤'],
      vi: ['站著', '坐著', '躺著', '靜靜地'],
      vt: ['打著', '拍打', '載著', '走向', '舉著', '愛著'],
      c: ['沒有人知道為什麼', '原來', '過了很久'],
      num: [1, 2, 3, 5, 10, 100, 200, 1000]
    }
  },
  methods: {
    p: function (k) {
      var list = this[k]
      var r = Math.floor(Math.random() * list.length)
      return list[r]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
