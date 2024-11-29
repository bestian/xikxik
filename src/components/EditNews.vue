<template lang="pug">
  .hello
    .ui.grid
      .ui.one.column.row
        .column.ui.segment
          .ui.list
            .item.ui.form
              .ui.input
                textarea(v-model = "myText" cols = "50" rows = "5")
                a.ui.green.button(@click = "addNews(myList, myText)") +
      .ui.one.column.row
        .column.ui.segment
          .ui.horizontal.list
            a.item(v-for = "k in Object.keys(xikxik)" @click = "myText += k") {{ k }}
      .ui.one.column.row
        .column.ui.segment
            .item(v-for = "o in newsList" v-if="o")
              h3 {{ o }}
                .ui.button.group
                  a.ui.green.button(@click = "myText = o") 複製
                  a.ui.red.button(@click = "delNews(myList, o)") 刪除
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
  props: ['xikxik', 'newsList'],
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
