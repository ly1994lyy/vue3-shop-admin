<template>
    <div class="msite">
        <HeaderTop title="龙凤佳园">
            <span class="header_search" slot="left">
                <i class="iconfont icon-iconsearch"></i>
            </span>
            <span class="header_login" slot="right">
                <span class="header_login_text">登录|注册</span>
            </span>
        </HeaderTop>
        <nav class="msite_nav">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpeg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpeg" alt="">
                            </div>
                            <span>商超便利</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpeg" alt="">
                            </div>
                            <span>美食</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpeg" alt="">
                            </div>
                            <span>简餐</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpeg" alt="">
                            </div>
                            <span>新店特惠</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpeg" alt="">
                            </div>
                            <span>准时达</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpeg" alt="">
                            </div>
                            <span>预定早餐</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpeg" alt="">
                            </div>
                            <span>土豪推荐</span>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpeg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpeg" alt="">
                            </div>
                            <span>商超便利</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpeg" alt="">
                            </div>
                            <span>美食</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpeg" alt="">
                            </div>
                            <span>简餐</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpeg" alt="">
                            </div>
                            <span>新店特惠</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpeg" alt="">
                            </div>
                            <span>准时达</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpeg" alt="">
                            </div>
                            <span>预定早餐</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpeg" alt="">
                            </div>
                            <span>土豪推荐</span>
                        </a>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </nav>
        <div class="msite_shop_list">
            <div class="shop_header">
                <i class="iconfont icon-gengduo"></i>
                <span class="shop_header_title">附近商家</span>
                <ShopList/>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import ShopList from '../../components/ShopList/ShopList'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import Vue from 'vue'
export default {
  name: 'MSite',
  components: {
    HeaderTop,
    ShopList
  },
  mounted  () {
    let swiperbanner = new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      pagination: {
        el: '.swiper-pagination'
      }
    })
    Vue.use({swiperbanner})
  }
}
</script>

<style lang="stylus" scoped>
    @import '../../common/stylus/mixins.styl';
    .msite  //首页
        width 100%
        .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
                width 100%
                height 100%
                .swiper-wrapper
                    width 100%
                    height 100%
                    .swiper-slide
                        display flex
                        justify-content center
                        align-items flex-start
                        flex-wrap wrap
                        .link_to_food
                            width 25%
                            text-align center
                            .food_container
                                display block
                                width 100%
                                padding-bottom 10px
                                font-size 0
                                img
                                    display inline-block
                                    width 50px
                                    height 50px
                                span
                                    display block
                                    width 100%
                                    text-align center
                                    font-size 13px
                                    color #666
                .swiper-pagination
                    >span.swiper-pagination-bullet-active
                        background #02a774
        .msite_shop_list
                top-border-1px(#e4e4e4)
                margin-top 10px
                background #fff
                .shop_header
                    padding 10px 10px 0
                    .shop_icon
                        margin-left 5px
                        color #999
                    .shop_header_title
                        color #999
                        font-size 14px
                        line-height 20px
</style>
