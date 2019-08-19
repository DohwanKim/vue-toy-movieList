<template>
  <div id="search-history">
    <ul class="list history">
      <li class="history_query" data-title="${parse[1]}" v-for="item in historyData" :key="item.length">
        <span class="movieTitle">{{item.title}}</span>
        <span class="date">{{item.time}}</span>
        <button class="btn-remove"></button>
      </li>
      <li class="resetHistory">Reset</li>
    </ul>
  </div>
</template>

<script>
// import historyDB from '../api/historyDB'

export default {
//   data() {
//     return {
//       historyData: [
//         {title: "test", time: "20190816"},
//         {title: "test2", time: "20190856"}
//       ]
//     }
//   },
//   created(){
//     this.insertData("Fuck");
//     console.log(historyDB.getHistory())
//   },
//   methods: {
//     insertData(title){
//       historyDB.insertHistory("20190816", title)
//     }
//   },
}
</script>

<style>
.resetHistory{
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}
.resetHistory:hover{
  background-color: rgb(143, 143, 143);
  color: rgb(255, 255, 255);
}
</style>