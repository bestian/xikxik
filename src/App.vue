<template lang="jade">
  #app
    .ui.labeled.icon.menu
      router-link.item(to = "/")
        i.home.icon
        | 首頁
      router-link.item(to = "/custom")
        i.pencil.alternate.icon
        | 自訂元素
      router-link.item(to = "/editPoet")
        i.random.icon
        | 自訂小詩
      router-link.item(to = "/editnews")
        i.copy.icon
        | 自訂小報
      router-link.item(to = "/zoo")
        i.universal.access.icon
        | 動物園
      .right.menu
        a.item(href="https://github.com/bestian/xikxik/" target="_blank")
          i.github.icon
          | 專案網址
        .item
          iframe(src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fxikxik.bestian.tw&layout=button_count&size=small&appId=485195848253155&width=70&height=20" width="70" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media")
    router-view(:xikxik = "$localStorage.xikxik", :newsList = "$localStorage.newsList", :poet = "$localStorage.poet", @add="add", @del = "del", @reset = "reset", @addNews="addNews", @delNews = "delNews", @resetNews = "resetNews", @addPoet="addPoet", @delPoet = "delPoet", @resetPoet = "resetPoet")
</template>

<script>

var dat = {
  animal: ['海鷗', '小貓', '小狗', '鯨魚', '水獺', '烏龜', '狼', '獾',
    '地鼠', '蝸牛', '蝙蝠', '大象', '獅子'],
  noun: ['天空', '大火', '風', '雷電',
    '浮雲', '山嵐', '大海', '石頭', '漩渦',
    '樹', '草', '花', '磚牆', '竹籬', '碗',
    '陶窯', '泥土路', '紙船', '風箏', '馬車',
    '柏油路', '電線竿', '怪手', '磚牆', '竹籬',
    '碗', '紙船', '風箏', '馬車'],
  natureS: ['天', '雲', '海', '山', '月亮',
    '風', '大雨', '太陽', '雷', '閃電',
    '雲豹', '老虎', '黑熊', '山豬', '飛鼠',
    '巫師', '神仙'],
  place: ['湖泊', '森林', '山脈', '海島', '平原',
    '沼澤', '高山', '大地', '河流', '茅坑', '木屋', '稻田', '五角大廈', '金時堂',
    '迪士尼樂園', '恐怖谷', '鬼屋', '武道館', '下水道', '火車站', '雲端', '地獄', '天堂', '高速公路', '外太空', '星空下', '美好的夏夜',
    '午夜裡', '光天化日下',
    '大霧中', '火堆旁'],
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
  peaceVI: ['等待', '沉默', '凝結', '睡去', '微笑',
    '祈禱'],
  violenceVI: ['崩潰', '倒下', '碎裂', '死了', '破了',
    '消失無蹤'],
  vt: ['毆打', '拍打', '載運', '推動', '舉起',
    '移動', '衝擊', '包容', '擁抱', '輕撫', '親吻', '照顧', '安慰', '治癒',
    '喚醒', '擁抱', '扶起', '牽起', '保護',
    '溫暖', '呵護', '安撫', '深愛著', '固定',
    '敲擊', '抓緊', '踐踏', '踢', '撕裂', '壓倒',
    '撞破', '衝向', '搥打', '揉躪', '敲擊',
    '搖晃', '扭轉', '壓扁', '攻擊', '摔破'],
  peaceVT: ['輕撫', '親吻', '照顧', '安慰', '治癒',
    '喚醒', '擁抱', '扶起', '牽起', '保護',
    '溫暖', '呵護', '安撫', '深愛著'],
  violenceVT: ['拍打', '踐踏', '踢', '撕裂', '壓倒',
    '撞破', '衝向', '搥打', '揉躪', '敲擊',
    '搖晃', '扭轉', '壓扁', '攻擊', '摔破'],
  blah: ['沒有人知道為什麼', '原來', '過了很久', '時光飛逝', '風吹過之後', '這就是，世界的夢囈', '於是，我們也生生不息', '無常，還是無常', '喔喔喔', '妙哉，善哉'],
  num: [1, 2, 3, 5, 10, 20, 30, 50, 100, 200, 500],
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
    '宅女'],
  adj: ['不起眼的',
    '爆笑的',
    '詭異的',
    '愚蠢的',
    '引人省思的',
    '意義深遠的',
    '巨大的',
    '寶貴的',
    '奇特的'],
  object: [ '雞蛋',
    '釘子',
    '小刀',
    '骨頭',
    '定時炸彈',
    '水晶球',
    '原子筆',
    '絲巾',
    '符咒',
    '電子計算機',
    '電腦',
    '地球儀',
    '綿被',
    '掃把',
    '鋤頭',
    '石頭',
    '石油',
    '玩偶',
    '滑鼠',
    '啟蒙導師牌',
    '竹筒飯',
    '香蕉',
    '花'
  ],
  natureO: ['石頭', '土地', '湖', '小溪', '雲', '沖積扇',
    '荔枝', '高麗菜', '野薑花', '相思樹', '芒草',
    '柳樹', '毛毛蟲', '蚯蚓', '蟑螂', '烏龜',
    '斑馬', '貓', '黃牛', '水牛', '綿羊'],
  civilO: ['磚牆', '竹籬', '茅坑', '木屋', '稻田', '碗',
    '陶窯', '泥土路', '紙船', '風箏', '馬車',
    '柏油路', '電線竿', '怪手', '磚牆', '竹籬',
    '茅坑', '木屋', '稻田', '碗']
}

var news = [
  '昨日per被指控在place放置adjobject，他鄭重否認。告密者per表示，他已有充份證據，將於num日後公諸於世。',
  '昨日per宣稱，他和per在遺傳上是接近的。對方表示，這種說法純粹是為了要繼承adjobject。',
  '最近避不露面的per終於出現了，他對外表示，連續num日他都在placevi',
  '昨天per和per在place旁彼此vt。他們相互vt了num分鐘，最後決定一起vi',
  'per和per昨天竟然在place旁violenceVI了num分鐘，大家都覺得很神奇',
  'per昨天在place旁vtanimal，引來num人關注'
]

var poetry = [
  'blah',
  'perpeaceVTnatureO',
  'perpeaceVTnatureO',
  'animalvi、vi',
  'blah',
  'natureSvtnatureO',
  'natureSvtnatureO',
  'animalpeaceVI、peaceVI',
  '只剩下place'
]

export default {
  name: 'App',
  localStorage: {
    xikxik: {
      type: Object,
      default: dat
    },
    newsList: {
      type: Object,
      default: news
    },
    poet: {
      type: Object,
      default: poetry
    }
  },
  data () {
    return {
    }
  },
  methods: {
    add: function (n, i) {
      this.addItem('xikxik', n, i)
    },
    del: function (n, i) {
      this.delItem('xikxik', n, i)
    },
    reset: function () {
      this.$localStorage.set('xikxik', dat)
      this.$forceUpdate()
    },
    addNews: function (n, i) {
      this.addItem('newsList', n, i)
    },
    delNews: function (n, i) {
      this.delItem('newsList', n, i)
    },
    resetNews: function () {
      this.$localStorage.set('newsList', news)
      this.$forceUpdate()
    },
    addPoet: function (n, i) {
      this.addItem('poet', n, i)
    },
    delPoet: function (n, i) {
      this.delItem('poet', n, i)
    },
    resetPoet: function () {
      this.$localStorage.set('poet', poetry)
      this.$forceUpdate()
    },
    addItem: function (t, n, i) {
      var p = this.$localStorage[t]
      p.push(i)
      this.$localStorage.set(t, p)
      this.$forceUpdate()
    },
    delItem: function (t, n, i) {
      var l = this.$localStorage[t]
      l = l.filter(function (x) { return x !== i })
      this.$localStorage.set(t, l)
      this.$forceUpdate()
    }
  },
  mounted () {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a, button {
  cursor: pointer;
}
</style>
