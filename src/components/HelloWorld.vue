<template lang="jade">
  .hello
    .ui.container.grid
      .one.column.row
        .column
          a.ui.huge.green.button(onclick = "location.reload()") 再來！
      #poet.two.column.doubling.row
        .six.wide.column.ui.teal.segment
          h1 拾詩氏
          img(src = 'http://lorempixel.com/400/200/')
          .ui.list
            .item(v-for = "i in [1,2]")
              h2 {{ p('per') }}{{ p('vt') }}{{ p('a') }}
            .item
              h2 {{ p('a') }}{{ p('vi') }}、{{ p('vi') }}
            .item
              h2 {{ p('c') }}
            .item(v-for = "i in [1,2,]")
              h2 {{ p('per') }}{{ p('vt') }}{{ p('a') }}
            .item
              h2 {{ p('a') }}{{ p('vi') }}、{{ p('vi') }}
            .item
              h2 只剩下{{ p('pla') }}
        .ten.wide.column.left.aligned.ui.black.segment
          h1 小道小報 {{ (new Date().getYear()) + '年' + (new Date().getMonth()) + '月' + (new Date().getDate()) + '日'}}
          img(src = 'http://lorempixel.com/300/200/')
          h2 (本報訊)
          .ui.bulleted.divided.list
            .item
              h3 {{ p('per') }}昨天在{{ p('pla') }}旁{{ p('vt') }}{{ p('a') }}，引來{{ p('num') }}人關注
            .item
              h3 {{ p('per') }}和{{ p('per') }}昨天竟然在{{ p('pla') }}旁{{p('vi')}}了{{ p('num') }} 分鐘，大家都覺得很神奇
            .item
              h3 昨天夜裡{{ p('per') }}和{{ p('per') }}在{{ p('pla') }}旁彼此{{p('vt')}}。他們相互{{p('vt')}}又{{p('vt')}}，最後決定一起{{p('vi')}}
            .item
              h3 最近避不露面的{{ p('per') }}終於出現了，他對外表示，連續{{ p('num') }}日他都在{{ p('pla') }}{{ p('vi') }}
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
      a: ['海鷗', '小貓', '小狗', '鯨魚', '水獺', '烏龜', '狼', '獾',
        '地鼠', '蝸牛', '蝙蝠', '大象', '獅子'],
      n: ['天空', '大火', '風', '雷電',
        '浮雲', '山嵐', '大海', '石頭', '漩渦',
        '樹', '草', '花', '磚牆', '竹籬', '碗',
        '陶窯', '泥土路', '紙船', '風箏', '馬車',
        '柏油路', '電線竿', '怪手', '磚牆', '竹籬',
        '碗', '紙船', '風箏', '馬車'],
      pla: ['湖泊', '森林', '山脈', '海島', '平原',
        '沼澤', '高山', '大地', '河流', '茅坑', '木屋', '稻田', '五角大廈', '金時堂',
        '迪士尼樂園', '恐怖谷', '鬼屋', '武道館', '下水道', '火車站', '雲端', '地獄', '天堂', '高速公路', '外太空', '星空下',
        '美好的夏夜',
        '午夜裡',
        '光天化日下',
        '大霧中',
        '火堆旁'],
      vi: ['站著', '坐著', '躺著', '沉默', '停止', '持續轉動',
        '睡著', '獨自漫歩', '靜坐', '自爆', '休息', '自爆',
        '狂吃拉麵',
        '原地轉圈',
        '表演單腳跳',
        '寫程式',
        '祈禱',
        '靜坐',
        '吹泡泡',
        '玩耍',
        '跳舞',
        '做實驗',
        '算數學'],

      vt: ['毆打', '拍打', '載運', '推動', '舉起',
        '移動', '衝擊', '包容', '擁抱', '輕撫', '親吻', '照顧', '安慰', '治癒',
        '喚醒', '擁抱', '扶起', '牽起', '保護',
        '溫暖', '呵護', '安撫', '深愛著', '固定',
        '敲擊', '抓緊', '踐踏', '踢', '撕裂', '壓倒',
        '撞破', '衝向', '搥打', '揉躪', '敲擊',
        '搖晃', '扭轉', '壓扁', '攻擊', '摔破'],
      c: ['沒有人知道為什麼', '原來', '過了很久', '時光飛逝', '風吹過之後'],
      num: [1, 2, 3, 5, 10, 100, 200, 1000],
      per: ['和尚', '道士', '外星人', '剌客', '魔法師',
        '智者', '戰士', '修行人', '小偷', '工頭', '國王', '詩人', '船長', '路人甲',
        '修女', '超人', '漁夫', '農婦', '小女孩', '小男孩',
        '小肥蟲',
        '外星人',
        '電漿生物',
        '變形蟲',
        '蜘蛛人',
        '神奇寶貝',
        'MIB探員',
        '秘密客',
        '宗教領袖',
        '幽靈',
        '政客',
        '知名藝人',
        '米老鼠',
        '白雪公主',
        '空空道人',
        '假面超人',
        '哈哈人',
        '魔術師',
        '小叮噹',
        '武林高手',
        '航海家',
        '數學家',
        '強盜',
        '幫派份子',
        '水果奶奶',
        '微生物',
        '黑傑克',
        '紅魔鬼',
        '黃飛鴻',
        '夜叉',
        '河童',
        '孫悟空',
        '豬八戒',
        '富豪',
        '恐怖份子',
        '宅男',
        '宅女']
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
a {
  color: #42b983;
}

#poet {
  font-family: 'Microsoft JhengHei', 'DFKai-SB', 'PMingLiU', 'Heiti TC', 'LiHei Pro', 'BiauKai';
}
</style>
