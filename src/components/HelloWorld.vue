<template lang="jade">
  .hello
    .ui.container.grid
      #poet.two.column.doubling.row
        .six.wide.column.ui.teal.segment
          h1 拾詩氏
          img(src = 'http://lorempixel.com/400/200/')
          .ui.list
            .item(v-for = "i in [1,2]")
              h2 {{ p('per') }}{{ p('vt') }}{{ p('a') }}
            .item
              h2 {{ p('c') }}
            .item(v-for = "i in [1,2,]")
              h2 {{ p('per') }}{{ p('vt') }}{{ p('a') }}
            .item
              h2 {{ p('a') }}{{ p('vi') }}、{{ p('vi') }}
            .item
              h2 只剩下{{ p('pla') }}
        .ten.wide.column.left.aligned.ui.black.segment
          h1 小道小報
          img(src = 'http://lorempixel.com/300/200/')
          .ui.bulleted.divided.list
            .item
              h3 {{ p('per') }}昨天在{{ p('pla') }}旁{{ p('vt') }}{{ p('a') }}，引來{{ p('num') }}人關注
            .item
              h3 {{ p('per') }}和{{ p('per') }}昨天竟然在{{ p('pla') }}旁{{p('vi')}}了{{ p('num') }} 分鐘，大家都覺得很神奇
            .item
              h3 昨天夜裡{{ p('per') }}和{{ p('per') }}在{{ p('pla') }}旁彼此{{p('vt')}}。他們相互{{p('vt')}}又{{p('vt')}}，最後決定一起{{p('vi')}}
            .item
              h3 {{ p('per') }}和{{ p('per') }}昨天在{{ p('pla') }}旁{{ p('vt') }}{{ p('a') }}，引來{{ p('num') }}人關注
            .item
              h3 {{ p('per') }}昨天竟然在{{ p('pla') }}旁{{p('vi')}}了{{ p('num') }} 分鐘，大家都覺得很神奇
            .item
              h3 昨天夜裡{{ p('per') }}和{{ p('per') }}在{{ p('pla') }}旁彼此{{p('vt')}}。他們相互{{p('vt')}}又{{p('vt')}}，最後決定一起{{p('vi')}}
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
        '睡著', '獨自漫歩', '靜坐', '自爆', '休息'],
      vt: ['毆打', '拍打', '載運', '推動', '舉起', '愛著',
        '移動', '衝擊', '包容', '擁抱', '親吻', '固定',
        '敲擊'],
      c: ['沒有人知道為什麼', '原來', '過了很久', '時光飛逝'],
      num: [1, 2, 3, 5, 10, 100, 200, 1000],
      per: ['和尚', '道士', '外星人', '剌客', '魔法師',
        '智者', '戰士', '修行人', '小偷', '工頭', '國王',
        '修女', '超人', '漁夫', '農婦', '小女孩', '小男孩']
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
a {
  color: #42b983;
}

#poet {
  font-family: 'Microsoft JhengHei', 'DFKai-SB', 'PMingLiU', 'Heiti TC', 'LiHei Pro', 'BiauKai';
}
</style>
