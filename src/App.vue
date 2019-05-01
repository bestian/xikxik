<template lang="jade">
  #app
    .ui.menu
      router-link.item(to = "/")
        i.home.icon
      .right.menu
        .item
          iframe(src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fxikxik.bestian.tw&layout=button_count&size=small&appId=485195848253155&width=64&height=20" width="64" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media")
    router-view
</template>

<script>
export default {
  name: 'App'
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
</style>
