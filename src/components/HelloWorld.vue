<template lang="jade">
  .hello
    .ui.container.grid
      .one.column.row
        .column
          a.ui.huge.green.button(onclick = "location.reload()") 再來！
      #poet.two.column.doubling.row
        .six.wide.column.ui.teal.segment
          h1 拾詩氏
          hr
          .ui.list
            .item(v-for = "i in [1,2]")
              h2 {{ p('per') }}{{ p('peaceVT') }}{{ p('natureO') }}
            .item
              h2 {{ p('a') }}{{ p('vi') }}、{{ p('vi') }}
            .item
              h2 {{ p('c') }}
            .item(v-for = "i in [1,2,]")
              h2 {{ p('natureS') }}{{ p('vt') }}{{ p('natureO') }}
            .item
              h2 {{ p('a') }}{{ p('peaceVI') }}、{{ p('peaceVI') }}
            .item
              h2 只剩下{{ p('pla') }}
        .ten.wide.column.left.aligned.ui.black.segment
          h1 小道小報 {{ (new Date().getYear()) + '年' + (new Date().getMonth()) + '月' + (new Date().getDate()) + '日'}}
          InArticleAdsense(data-ad-client="ca-pub-7209910540592367", data-ad-slot="8130621052")
          h2 (本報訊)
          .ui.bulleted.celled.list
            .item
              h3 昨日{{ p('per') }}被指控在{{ p('pla') }}放置{{ p('adj') }}{{ p('object') }}，他鄭重否認。告密者{{ p('per') }}表示，他已有充份證據，將於{{ p('num') }}日後公諸於世。
            .item
              h3 {{ p('per') }}昨天在{{ p('pla') }}旁{{ p('vt') }}{{ p('a') }}，引來{{ p('num') }}人關注
            .item
              h3 {{ p('per') }}和{{ p('per') }}昨天竟然在{{ p('pla') }}旁{{p('vi')}}了{{ p('num') }} 分鐘，大家都覺得很神奇
            .item
              h3 昨天{{ p('per') }}和{{ p('per') }}在{{ p('pla') }}旁彼此{{ p('vt') }}。他們相互{{ p('vt') }}了{{ p('num') }}分鐘，最後決定一起{{p('vi')}}
            .item
              h3 最近避不露面的{{ p('per') }}終於出現了，他對外表示，連續{{ p('num') }}日他都在{{ p('pla') }}{{ p('vi') }}
            .item
              h3 昨日{{ p('per') }}宣稱，他和{{ p('per') }}在遺傳上是接近的。對方表示，這種說法純粹是為了要繼承{{ p('adj') }}{{ p('object')}}。
      .one.column.row
        .column.ui.segment
          InArticleAdsense(data-ad-client="ca-pub-7209910540592367", data-ad-slot="8130621052")
      .one.column.row
        .column
          a.ui.huge.green.button(onclick = "location.reload()") 再來！
      .one.column.row
        .column
          .fb-comments(data-href="http://xikxik.bestian.tw" data-width="" data-numposts="5")
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  props: ['xikxik'],
  methods: {
    p: function (k) {
      var list = this.xikxik[k]
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
