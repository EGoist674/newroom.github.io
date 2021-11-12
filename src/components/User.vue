<template>
<div>
    用户：{{$route.params.userId}}
    name:{{$route.params.name}}
    <router-link to='/User/11101/woshierzi/son'>son</router-link>
    <router-link to="/User/20102/woshidie/father">father</router-link>
    <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'User'
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
