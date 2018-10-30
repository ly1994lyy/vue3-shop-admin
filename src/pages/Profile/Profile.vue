<template>
  <div>
    <HeaderTop title="我的"></HeaderTop>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  name: 'Profile',
  components: {
    HeaderTop
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixins.styl"
</style>
