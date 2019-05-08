<template lang="jade">
  .hello
    .ui.grid
      .ui.one.column.row
        .column.ui.segment
          .ui.list
            .item.ui.form
              .ui.input
                textarea(v-model = "myText" cols = "50" rows = "5")
                a.ui.green.button(@click = "addNews(myList, myText)") +
            hr
            .item(v-for = "o in newsList" v-if="o")
              h3 {{ o }}
                a.ui.red.button(@click = "delNews(myList, o)") x
      .ui.one.column.row
        .column.ui.segment
          a.ui.huge.teal.button(@click="resetNews()") 重設!!

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      myText: ''
    }
  },
  props: ['newsList'],
  methods: {
    addNews: function (n, i) {
      this.$emit('addNews', n, i)
      this.myText = ''
    },
    delNews: function (n, i) {
      this.$emit('delNews', n, i)
    },
    resetNews: function () {
      this.$emit('resetNews')
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
