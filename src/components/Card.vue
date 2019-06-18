<template>
  <section class="card">
    <div class="tit flex">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <h3 class="text-c2 flex-1 fs-16">{{title}}</h3>
      <i class="iconfont icon-sandian"></i>
    </div>
    <div>
      <ul class="nav px17">
        <li v-for="(i,index) in items" :key="index">
          <h6 :class="{ active: index === active}" @click="$refs.list.swiper.slideTo(index)">
            {{i.name}}
          </h6>
        </li>
      </ul>
      <swiper ref="list" @slide-change="()=> active = $refs.list.swiper.realIndex">
        <swiper-slide v-for="item in items">
          <slot name="list" :cate="item"></slot>
        </swiper-slide>

      </swiper>
      <!--<cube-slide ref="slide" :data="items" :showDots="false" :auto-play="false" :initial-index="active">-->
      <!--&lt;!&ndash;<cube-slide-item v-for="(item, index) in items" :key="index" @change="()=> active = index ">&ndash;&gt;-->
      <!--<cube-slide-item v-for="(item, index) in items" :key="index" @change="change">-->
      <!--<slot name="list" :cate="item"></slot>-->
      <!--</cube-slide-item>-->
      <!--</cube-slide>-->
    </div>

  </section>
</template>

<script>
  export default {
    name: 'Card',
    data () {
      return {
        active: 0
      }
    },
    props: {
      title: {
        type: String,
        default: '英雄'
      },
      icon: {
        type: String,
        default: ''
      },
      items: {
        type: Array,
        default () {
          return {}
        }
      }
    },
    methods: {
      change (e) {
        this.active = e
      }
    },
  }
</script>

<style scoped lang="stylus">
  @import "../assets/index.styl"
  .tit
    padding m(12rem) m(17rem)
    margin-bottom m(8rem)

    .text-c2
      margin-left: m(5rem)

</style>
