<template>
<div>
  <HeaderView v-if="visibleList.HeaderView"></HeaderView>
  <InputFormView @input="inputEvent" @search="searchMovie"></InputFormView>
  <div class="content">
    <TabView :selectTab="selectTab" v-if="visibleList.TabView" @change="changeTab"/>
    <RankView v-if="visibleList.RankView"/>
    <HistoryView v-if="visibleList.HistoryView"/>
    <ResultView v-if="visibleList.ResultView" :title="title"/>
  </div>
</div>
</template>

<script>
import HeaderView from '@/components/HeaderView';
import InputFormView from '@/components/InputFormView';
import TabView from '@/components/TabView';
import RankView from '@/components/RankView';
import HistoryView from '@/components/HistoryView';
import ResultView from '@/components/ResultView';

export default {
  data() {
    return {
      title: '',
      selectTab: 0,
      visibleList: {
        HeaderView : true,
        TabView : true,
        RankView : true,
        HistoryView : false,
        ResultView : false,
      },
    }
  },
  components: {
    HeaderView,
    InputFormView,
    TabView,
    RankView,
    HistoryView,
    ResultView
  },
  methods: {
    inputEvent(data) {
      this.title = data;
    },
    searchMovie(data){
      //Todo Search
      this.visibleList.ResultView = true;
    },
    changeTab(data){
      this.selectTab = data;
      this.visibleList.RankView = data===0
      this.visibleList.HistoryView = data===1
    },
  },
  watch: {
    title(nValue){  //입력하는 창의 데이터 확인
      if(nValue === ""){
        this.visibleList = {
          HeaderView : true,
          TabView : true,
          RankView : true,
          HistoryView : false,
          ResultView : false,
        }
        this.selectTab = 0;
      }else{
        this.visibleList = {
          HeaderView : false,
          TabView : false,
          RankView : false,
          HistoryView : false,
          ResultView : false,
        }
      }
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap');
body{
  margin: 0;
  padding: 0;
  font-family: 'Saira Stencil One', cursive;
}
ul {
  list-style: none;
}
img {
  width: 100%;
}

header {
  border-bottom: 1px #ccc solid;
  text-align: center;
  display: flex
}
input[type=text] {
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 15px 0 15px 0;
  padding: 10px 15px;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid #cccccc;

}
.container {
  margin: 0 25px 0 25px;
}
.content {
  border: 1px solid #ccc;
  margin: 0px 25px;
}
ul.tabs {
  display: flex;
}
.tabs li {
  display: inline-block;
  width: 50%;
  padding: 15px;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  background-color: #eee;
  color: #999;
}
.tabs li.active {
  background-color: black;
  color: #fff;
}
.list li {
  box-sizing: border-box;
  display: block;
  padding: 15px;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.list li:last-child {
  border-bottom: none;
}
.list li .number{
  margin-right: 15px;
  color: #ccc;
}
.list li .date{
  position: absolute;
  right: 50px;
  top: 15px;
  margin-right: 15px;
  color: #ccc;
}
.list li .btn-remove{
  position: absolute;
  right: 0px;
  top: 15px;
  margin-right: 15px;
}

form {
  position: relative;
}
.btn-reset,
.btn-remove {
  border-radius: 50%;
  background-color: #ccc;
  color: white;
  border: none;
  padding: 2px 5px;
}
.btn-reset {
  position: absolute;
  top: 12px;
  right: 10px;
}
.btn-reset::before,
.btn-remove::before {
  content: 'X'
}

#search-result li {
  display: flex;
  margin-bottom: 15px;
}
/* #search-result img {
  margin-left: 30px;
  width: 20%;
  height: 300px;
} */

@import url("https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap");
* {
  margin: 0;
  padding: 0;
}
.menuBar{
  width: 70%;
  height: 50px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.containerHeader {
  width: 30%;
  height: 50px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.containerHeader .box {
  width: 250px;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.containerHeader .box .title {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  height: 22px;
}
.containerHeader .box .title .block {
  width: 0%;
  height: inherit;
  background: #ffb510;
  position: absolute;
  animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  display: flex;
}
.containerHeader .box .title h1 {
  font-family: "Poppins";
  color: white;
  font-size: 22px;
  -webkit-animation: mainFadeIn 2s forwards;
  -o-animation: mainFadeIn 2s forwards;
  animation: mainFadeIn 2s forwards;
  animation-delay: 1.6s;
  opacity: 0;
  display: flex;
  align-items: baseline;
  position: relative;
}
.containerHeader .box .title h1 span {
  width: 0px;
  height: 0px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background: #ffb510;
  -webkit-animation: load 0.6s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  animation: popIn 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  animation-delay: 2s;
  margin-left: 5px;
  margin-top: -10px;
  position: absolute;
  bottom: 13px;
  right: -12px;
}
.containerHeader .box .role {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  height: 10px;
  margin-top: -10px;
}
.containerHeader .box .role .block {
  width: 0%;
  height: inherit;
  background: #e91e63;
  position: absolute;
  animation: secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  animation-delay: 2s;
  display: flex;
}
.containerHeader .box .role p {
  animation: secFadeIn 2s forwards;
  animation-delay: 3.2s;
  opacity: 0;
  font-weight: 600;
  font-family: "Lato";
  color: white;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 5px;
}

@keyframes mainBlock {
  0% {
    width: 0%;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}
@keyframes secBlock {
  0% {
    width: 0%;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}
@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes popIn {
  0% {
    width: 0px;
    height: 0px;
    background: #e9d856;
    border: 0px solid #ddd;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: #e9d856;
    opacity: 1;
    bottom: 45px;
  }
  65% {
    width: 7px;
    height: 7px;
    bottom: 0px;
    width: 15px;
  }
  80% {
    width: 10px;
    height: 10px;
    bottom: 20px;
  }
  100% {
    width: 7px;
    height: 7px;
    background: #e9d856;
    border: 0px solid #222;
    bottom: 13px;
  }
}
@keyframes secFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}
footer {
  width: 350px;
  height: 80px;
  background: #ffb510;
  position: absolute;
  right: 0;
  bottom: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: top 0.8s forwards;
  animation-delay: 4s;
}
footer span {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #232323;
  font-family: "Poppins";
}
footer span i {
  margin-right: 25px;
  font-size: 22px;
  color: #232323;
  animation: icon 2s forwards;
  animation-delay: 4s;
  opacity: 0;
}

@keyframes top {
  0% {
    opacity: 0;
    bottom: -80px;
  }
  100% {
    opacity: 1;
    bottom: 0px;
  }
}
@keyframes icon {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1.3) rotate(-2deg);
  }
  100% {
    opacity: 1;
    bottom: 0px;
  }
}

.posterContainer{
  margin-top: 15px;
  width: 100%;
  display: block;
}

.posterBox{
  background-color: white;
  margin:0px auto;
  display: block;
}
.posterLab{
  width:300px;
  margin:0px auto;
  display: block;
}
.poster{
  height:80%;
  width:100%;

  background-color:blue;
  -webkit-box-shadow: 21px 30px 13px 0px rgba(166,161,166,1);
  -moz-box-shadow: 21px 30px 13px 0px rgba(166,161,166,1);
  box-shadow: 21px 30px 13px 0px rgba(166,161,166,1);
}
.poster-title{
  text-align: center;
  width:100%;
  height:20%;
}
</style>
