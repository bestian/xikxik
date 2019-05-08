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
              h2 {{ p('animal') }}{{ p('vi') }}、{{ p('vi') }}
            .item
              h2 {{ p('blah') }}
            .item(v-for = "i in [1,2,]")
              h2 {{ p('natureS') }}{{ p('vt') }}{{ p('natureO') }}
            .item
              h2 {{ p('animal') }}{{ p('peaceVI') }}、{{ p('peaceVI') }}
            .item
              h2 只剩下{{ p('place') }}
        .ten.wide.column.left.aligned.ui.black.segment
          h1 小道小報 {{ (new Date().getYear()) + '年' + (new Date().getMonth()) + '月' + (new Date().getDate()) + '日'}}
          InArticleAdsense(data-ad-client="ca-pub-7209910540592367", data-ad-slot="8130621052")
          h2 (本報訊)
          .ui.bulleted.celled.list
            .item(v-for = "n in newsList")
              h3 {{ parse(n) }}
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
  props: ['xikxik', 'newsList'],
  methods: {
    p: function (k) {
      var list = this.xikxik[k]
      var r = Math.floor(Math.random() * list.length)
      return list[r]
    },
    parse: function (str) {
      var ans = str
      var list = Object.keys(this.xikxik).sort(function (a, b) { return b.length - a.length })
      for (var i = 0; i < list.length; i++) {
        var k = list[i]
        if (str.indexOf(k) > -1) {
          ans = ans.replace(k, this.p(k))
        }
      }
      var good = true
      for (var i$ = 0; i$ < list.length; i$++) {
        var j = list[i]
        if (str.indexOf(j) > -1) {
          good = false
        }
      }
      if (good) {
        return ans
      } else {
        return this.parse(ans)
      }
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
