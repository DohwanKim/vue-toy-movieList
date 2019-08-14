<template>
  <div class="container">
      <form @submit.prevent>
          <input type="text" placeholder="Search Moive Title" autofocus v-model="title" @keyup.enter.prevent="search">
          <button v-on:click.prevent="resetTitle" v-if="isBtnShow" type="reset" class="btn-reset" ></button>
      </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      isBtnShow: false
    }
  },
  watch: {
    title(nValue, oValue) {
      this.$emit('input', nValue);
      this.isBtnShow = !!nValue;
    }
  },
  methods: {
    resetTitle() {
      this.title = '';
    },
    search(){
      this.$emit('search')
    }
  },
}
</script>

<style>

</style>
