<template lang="pug">
  .hello
    .ui.grid
      .ui.two.column.row
        .column.ui.segment
          .ui.horizontal.list(v-for = "k in Object.keys(xikxik)")
            .item
              h3
                a.ui.big.button(@click = "myList = k", :class = "[myList !== k ? 'blue' : 'green']") {{ k }}
        .column.ui.segment
          .ui.horizontal.list
            .item.ui.form
              .ui.input
                input(v-model = "myText")
                a.ui.green.button(@click = "add(myList, myText)") +
            hr
            .item(v-for = "o in xikxik[myList]" v-if="o")
              h3 {{ o }}
                a.ui.red.button(@click = "del(myList, o)") x
      .ui.one.column.row
        .column.ui.segment
          a.ui.huge.teal.button(@click="reset()") 重設!!

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      myText: '',
      myList: 'animal'
    }
  },
  props: ['xikxik'],
  methods: {
    add: function (n, i) {
      this.$emit('add', n, i)
      this.myText = ''
    },
    del: function (n, i) {
      this.$emit('del', n, i)
    },
    reset: function () {
      this.$emit('reset')
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
