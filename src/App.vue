<template>
  <v-app class="grey lighten-3">
    <navbar></navbar>
  </v-app>
</template>

<script>
import navbar from '@/components/navbar'

export default {
  name: 'App',
  components:{
    navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
