<template lang="pug">
  .hello
    .ui.grid
      .ui.one.column.row
        .column.ui.segment
          .ui.list
            .item.ui.form
              .ui.input
                textarea(v-model = "myText" cols = "50" rows = "5")
                a.ui.green.button(@click = "addPoet(myList, myText)") +
      .ui.one.column.row
        .column.ui.segment
          .ui.horizontal.list
            a.item(v-for = "k in Object.keys(xikxik)" @click = "myText += k") {{ k }}
      .ui.one.column.row
        .column.ui.segment
            .item(v-for = "p in poet" v-if="p")
              h3 {{ p }}
                .ui.button.group
                  a.ui.green.button(@click = "myText = p") 複製
                  a.ui.red.button(@click = "delPoet(myList, p)") 刪除
      .ui.one.column.row
        .column.ui.segment
          a.ui.huge.teal.button(@click="resetPoet()") 重設!!

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      myText: ''
    }
  },
  props: ['xikxik', 'poet'],
  methods: {
    addPoet: function (n, i) {
      this.$emit('addPoet', n, i)
      this.myText = ''
    },
    delPoet: function (n, i) {
      this.$emit('delPoet', n, i)
    },
    resetPoet: function () {
      this.$emit('resetPoet')
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
