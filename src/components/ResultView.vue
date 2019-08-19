<template>
  <div id="search-result">
    <div>
      <div class="posterContainer">
        <div class="posterLab" v-for="item in movieData" :key="item.length">
          <div class="posterBox">
            <img class="poster" :src="getUrl(item.posterPath)" />
            <h3 class="poster-title">{{item.title}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import movieAPI from '../api/movieAPI'

export default {
  props: {
    title: String
  },
  data() {
    return {
      movieData: []
    }
  },
  created () {
    this.getMovieData();
  },
  methods: {
    async getMovieData() {
      var {data} = await movieAPI.searchMovie(this.title);
      this.movieData = data;
      console.log(this.movieData);
    },
    getUrl(param) {
      return "https://image.tmdb.org/t/p/w500/"+param
    }
  },
  search(){}
}
</script>

<style>

</style>