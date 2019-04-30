<template lang="jade">
  .hello
    .ui.container.two.column.grid
      .column
        h1 拾詩氏
        .ui.list
          .item(v-for = "i in [1,2,3]")
            h4 {{ p('n') }} {{ p('vt') }} {{ p('n') }}
          .item
            h4 {{ p('c') }}
          .item(v-for = "i in [1,2,3]")
            h4 {{ p('n') }} {{ p('vt') }} {{ p('n') }}
      .column
        h1 小道小報
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      n: ['天', '地', '水', '火', '風', '雷', '山',
        '澤', '湖', '雲', '嵐', '海'],
      vi: ['站', '坐', '躺著', '靜靜地'],
      vt: ['打', '拍', '載著', '走向', '舉著'],
      c: ['沒有人知道為什麼', '原來', '過了很久']
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
