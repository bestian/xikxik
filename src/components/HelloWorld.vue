<template lang="jade">
  .hello
    .ui.container.grid
      .two.column.row
        .column.ui.segment
          h1 拾詩氏
          img(src = 'http://lorempixel.com/400/200/')
          .ui.list
            .item(v-for = "i in [1,2]")
              h2 {{ p('a') }}{{ p('vt') }}{{ p('a') }}
            .item
              h2 {{ p('c') }}
            .item(v-for = "i in [1,2,]")
              h2 {{ p('a') }}{{ p('vt') }}{{ p('a') }}
            .item
              h2 {{ p('a') }}{{ p('vi') }}、{{ p('vi') }}
            .item
              h2 只剩下{{ p('pla') }}
        .column.ui.segment
          h1 小道小報
          img(src = 'http://lorempixel.com/300/200/')
          .ui.list
            .item
              h3 {{ p('per') }}昨天在{{ p('pla') }}旁{{ p('vt') }}{{ p('a') }}，引來{{ p('num') }}人關注
            .item
              h3 {{ p('per') }}昨天竟然在{{ p('pla') }}旁{{p('vi')}}了{{ p('num') }} 分鐘，大家都覺得很神奇
      .one.column.row
        .column
          a.ui.huge.green.button(onclick = "location.reload()") 再來！

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      a: ['海鷗', '貓', '狗', '鯨魚', '水獺', '烏龜',
        '地鼠', '蝸牛', '蝙蝠', '大象', '獅子'],
      n: ['天空', '大火', '風', '雷電',
        '浮雲', '山嵐', '大海', '石頭', '漩渦',
        '樹', '草', '花'],
      pla: ['湖泊', '森林', '山脈', '海島', '平原',
        '沼澤', '高山', '大地', '河流'],
      vi: ['站著', '坐著', '躺著', '沉默', '停止', '持續轉動',
        '睡著', '獨自漫歩'],
      vt: ['打著', '拍打', '載著', '走向', '舉著', '愛著',
        '走向', '衝擊', '包容', '擁抱', '親吻'],
      c: ['沒有人知道為什麼', '原來', '過了很久', '時光飛逝'],
      num: [1, 2, 3, 5, 10, 100, 200, 1000],
      per: ['和尚', '道士', '外星人', '剌客', '魔法師',
        '智者', '戰士', '修行人', '小偷']
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
