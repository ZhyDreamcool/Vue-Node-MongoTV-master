<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  name:'app',
  components:{
    Header,
    Footer
  }
}
</script>

<style scoped="scoped">
	#app{
		width: 100vw;
		height: 100vh;
		background-color: #f5f5f5;
	}
  @import './assets/css/public.css'
</style>
