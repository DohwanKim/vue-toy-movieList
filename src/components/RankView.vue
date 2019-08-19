<template>
  <div id="search-rank">
    <ul class="list" v-for="(item, index) in rankData" :key="index">
      <li class="history_query" data-title="${item.title}">
      {{index+1}}. {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import movieAPI from '@/api/movieAPI'
export default {
  data(){
    return {rankData: []}
  },
  created() { //처음 실행 할때만 실행되는 함수
    this.getMovieRank();
  },
  methods: {
    async getMovieRank() {
      var {data} = await movieAPI.getRank();
      this.rankData = data
    }
  },
}
</script>

<style>

</style>