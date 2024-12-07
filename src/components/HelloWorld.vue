<template lang="pug">
  .hello
    .ui.container.grid
      #poet.two.column.doubling.row
        .six.wide.column.ui.blue.segment
          h1 拾詩氏
          img(src="https://picsum.photos/400/200", alt="Lorem")
          hr
          .ui.list
            .item
              button.ui.circular.icon.button(@click="speakPoem()")
                i.volume.up.icon
            .item(v-for = "(p, idx) in poet" v-bind:key = "p + idx")
              h2 {{ s(parse(p)) }}
        .ten.wide.column.left.aligned.ui.black.segment
          h1 小道小報 {{ today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() }}
          //InArticleAdsense(data-ad-client="ca-pub-7209910540592367", data-ad-slot="8130621052")
          h2 (本報訊)
          button.ui.circular.icon.button(@click="speakNews()")
            i.volume.up.icon
          .ui.bulleted.celled.list
            .item(v-for = "n in newsList" v-bind:key = "n")
              h3 {{ s(parse(n)) }}
      //.one.column.row
        .column.ui.segment
          InArticleAdsense(data-ad-client="ca-pub-7209910540592367", data-ad-slot="8130621052")
      .one.column.row
        .column
          a.ui.huge.black.button(@click = "reseter()") 再來一份小道小報
      .one.column.row
        .column
          .fb-comments(data-href="http://xikxik.bestian.tw" data-width="" data-numposts="5")
</template>

<script>
import {sify} from 'chinese-conv'

export default {
  name: 'HelloWorld',
  data () {
    return {
      today: new Date(),
      synth: window.speechSynthesis
    }
  },
  props: ['xikxik', 'newsList', 'poet', 'si'],
  methods: {
    reseter: function () {
      console.log('r')
      this.$emit('reseter')
    },
    s: function (t) {
      if (this.si) {
        return sify(t)
      } else {
        return t
      }
    },
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
        var j = list[i$]
        if (ans.indexOf(j) > -1) {
          good = false
        }
      }
      if (good) {
        return ans
      } else {
        return this.parse(ans)
      }
    },
    speakNews() {
      if (this.synth) {
        const newsElements = document.querySelectorAll('.ui.bulleted.celled.list h3');
        const fullNews = Array.from(newsElements)
          .map(el => el.textContent.trim())
          .join('，');
        
        const utterance = new SpeechSynthesisUtterance(fullNews);
        utterance.lang = 'zh-TW';
        utterance.rate = 0.8;
        this.synth.speak(utterance);
      }
    },
    speakPoem() {
      if (this.synth) {
        const poemElements = document.querySelectorAll('.six.wide.column h2');
        const fullPoem = Array.from(poemElements)
          .map(el => el.textContent.trim())
          .join('，');
        
        const utterance = new SpeechSynthesisUtterance(fullPoem);
        utterance.lang = 'zh-TW';
        utterance.rate = 0.8;
        this.synth.speak(utterance);
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

.ui.grid>.blue.column, .ui.grid>.blue.row, .ui.grid>.row>.blue.column {
  background-color: #009 !important;
}

#poet {
  font-family: 'Microsoft JhengHei', 'DFKai-SB', 'PMingLiU', 'Heiti TC', 'LiHei Pro', 'BiauKai';
}
</style>
