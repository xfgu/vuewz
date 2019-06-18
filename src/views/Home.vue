<template>
  <main>
    <cube-slide ref="slide" :data="items">
      <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
          <img class="w100" alt="" :src="item.image">
        </a>
      </cube-slide-item>
    </cube-slide>
    <article id="art1">
      <ul id="cate" class="grid bg-white">
        <li class="item text-center" v-for="item in 10" :key="item.id">
          <div class="text-c9">爆料站</div>
          <div>dsadad</div>
        </li>
      </ul>
      <div class="more bg-f9 fs-12  text-center">
        <a class="text-c3">收起</a>
      </div>
      <Card class="card" title="新闻资讯" icon="read" :items="list">
        <template #list="{cate}">
          <div class="nav-slider">
            <ul v-for="(item, index) in cate.items">
              <li :key="index" class="px17">
                <router-link class="nav-link flex-between fs-14 text-c2" to="to">
                  <span class="text-c46">[{{item.name}}]</span>
                  <span class="line">|</span>
                  <h6 class="flex-1 ell">{{item.title}}</h6>
                  <span class="">{{item.date}}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </template>
        <!--<component #items="item">-->
          <!---->
        <!--</component>-->
      </Card>
      <Card class="card" title="英雄列表" icon="menu">
        <div class="test">32222223</div>
      </Card>
      <Card class="card" title="精彩视频" icon="play">
        1111
      </Card>


      <a class="text-center" href="#" rel="internal">回到顶部</a>
      <!--<div class="flex  bg-info">-->
      <!--<div class="text-white ">1</div>-->
      <!--<div class="text-white ">1</div>-->
      <!--<div class="text-white ">1</div>-->
      <!--</div>-->
    </article>
  </main>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import ApolloExample from '@/components/ApolloExample.vue'
  import Card from '../components/Card'

  export default {
    components: { Card },
    data () {
      return {
        items: [
          {
            url: 'http://www.didichuxing.com/',
            image: 'http://ossweb-img.qq.com/upload/adw/image/20190615/d44b5b7e1875107721d422564554edab.jpeg'
          },
          {
            url: 'http://www.didichuxing.com/',
            image: 'http://ossweb-img.qq.com/upload/adw/image/20190614/915b483e361cd251d84eb17a30f7c0f2.jpeg'
          },
          {
            url: 'http://www.didichuxing.com/',
            image: 'http://ossweb-img.qq.com/upload/adw/image/20190614/f4b6da5558ebd2099a8a461c8441d9dc.jpeg'
          }
        ],
        list: [
          {
            name: '公告',
            items: [
              { name: '公告', title: '轮播图，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
              { name: '公告', title: '轮播图，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
              { name: '公告', title: '轮播图，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
              { name: '公告', title: '轮播图，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
            ]
          },
          {
            name: '新闻',
            items: [
              { name: '新闻', title: '新闻，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
              { name: '新闻', title: '新闻，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
              { name: '新闻', title: '新闻，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
              { name: '新闻', title: '新闻，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
            ]
          },
          {
            name: '公告',
            items: [
              { name: '公告', title: '轮播图，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
              { name: '公告', title: '轮播图，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
              { name: '公告', title: '轮播图，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
              { name: '公告', title: '轮播图，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
            ]
          },
          {
            name: '活动',
            items: [
              { name: '活动', title: '活动，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
              { name: '活动', title: '活动，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
              { name: '活动', title: '活动，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
              { name: '活动', title: '活动，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
            ]
          },
          {
            name: '赛事',
            items: [
              { name: '赛事', title: '赛事，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
              { name: '赛事', title: '赛事，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
              { name: '赛事', title: '赛事，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
              { name: '赛事', title: '赛事，提供了常见的轮播及 swipe 的功能.', date: '06/21' },
            ]
          },
        ]
      }
    }
  }
</script>
<style lang="stylus">
  @import "../assets/index.styl"
  .cube-slide-dots
    text-align right
    padding-right: m(8rem)
    padding-bottom: m(15rem)

    span
      background: colorList.white
      border-radius 2px
      width @padding-right
      height: @padding-right
      margin-right: @padding-right

  #art1
    //grid-template-columns m(17rem) 1fr m(17rem)
    border-bottom: 1px solid colorList.border
    border-top: @border-bottom

    #cate
      grid-template-columns repeat(4, 1fr)
      place-content center

      .item
        margin m(10rem) 0

        &:not(:nth-child(4n))
          border-right: 1px solid colorList.border

    .more
      height m(30rem)
      line-height @height

    .card
      .nav-slider
        margin-top: m(8rem)

        .nav-link
          line-height m(35rem)

          .flex-1
            padding-right: m(2rem)

          .line
            margin 0 m(3rem)

      .test
        width c(50)
        height: 50px
        background: #000
</style>
