<template>
  <ul id="tabs" class="tabs">
    <li v-bind:class="{active: selectTab===0}" @click="selectEvt(0)">Recommend</li>
    <li v-bind:class="{active: selectTab===1}" @click="selectEvt(1)">Search History</li>
  </ul>
</template>

<script>
//탭뷰 변화 리슨 -> 부모가 다시 알림-> 탭뷰 변화
export default {
  props: {
    selectTab: Number
  },
  methods: {
    selectEvt(selNum){
      this.$emit('change', selNum)
    }
  }
}
</script>

<style>

</style>