<template lang="jade">
  .hello
    .ui.container.grid
      .one.column.row
        .column
          a.ui.huge.green.button(onclick = "location.reload()") 再來！
    .ui.container.doubling.four.cards
      .ui.card(v-for="i in rand(12)")
        .ui.image
          img(:src="'http://lorempixel.com/400/200/animals/'+i")
    .ui.container.grid
      .one.column.row
        .column.ui.segment
          InArticleAdsense(data-ad-client="ca-pub-7209910540592367", data-ad-slot="8130621052")
      .one.column.row
        .column
          a.ui.huge.green.button(onclick = "location.reload()") 再來！
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      today: new Date()
    }
  },
  props: ['xikxik', 'newsList', 'poet'],
  methods: {
    rand: function (n) {
      var ans = []
      for (var i = 1; i <= n; i++) {
        ans.push('')
      }
      ans = ans.sort(function (a, b) { return Math.random() - 0.5 })
      return ans
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
