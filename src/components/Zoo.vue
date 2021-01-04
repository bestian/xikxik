<template lang="pug">
  .hello
    .ui.container.grid
      .one.column.row
        .column.ui.form
          select.ui.dropdown(v-model="myT")
            option(v-for = "t in types", :value = "t", :checked = "myT == t") {{ t.n }}
      .one.column.row
        .column
          a.ui.huge.green.button(@click = "reset()") 再來！
    .ui.container.doubling.stackable.two.cards
      .ui.card(v-for="i in [k, l, m, n]")
        .ui.image
          a(href = "http://lorempixel.com/" target="_blank")
            img(:src="'http://lorempixel.com/400/200/'+ myT.v +'/' + i")
    .ui.container.grid
      .one.column.row
        .column.ui.segment
          InArticleAdsense(data-ad-client="ca-pub-7209910540592367", data-ad-slot="8130621052")
      .one.column.row
        .column
          a.ui.huge.green.button(@click = "reset()") 再來！
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      k: 0,
      l: 1,
      m: 2,
      n: 3,
      myT: {n: '動物園', v: 'animals'},
      types: [
        {n: '動物園', v: 'animals'},
        {n: '公路', v: 'transport'},
        {n: '自然', v: 'nature'},
        {n: '運動', v: 'sports'}
      ]
    }
  },
  props: ['xikxik', 'newsList', 'poet'],
  methods: {
    rand: function (n) {
      var ans = []
      for (var i = 1; i <= n; i++) {
        ans.push(i)
      }
      ans = ans.sort(function () { return Math.random() - 0.5 })
      return ans
    },
    reset: function () {
      var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(function () { return Math.random() - 0.5 })
      if (this.myT.v === 'sports') { list = list.filter(function (n) { return n !== 4 }) }
      this.k = list.pop()
      this.l = list.pop()
      this.m = list.pop()
      this.n = list.pop()
      this.$forceUpdate()
    }
  },
  mounted () {
    this.reset()
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
