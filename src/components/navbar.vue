<template>
    <nav>
        <!-- The toolbar is used to create a navigation bar dark specifies a prop used for stying and app makes the bar remain static -->
        <v-toolbar dark app> 
            <v-toolbar-side-icon dark @click='drawer=!drawer'></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase dark lighten-2">
                <span class="font-weight-light left">Todo</span>
                <span>Lorna</span>
            </v-toolbar-title>  
            <v-spacer></v-spacer>
                <v-btn flat lighten-2>
                    <span>Sign out</span>
                    <v-icon right>exit_to_app</v-icon>
                </v-btn>

        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="pink">

        </v-navigation-drawer>

    </nav>
</template>

<script>
export default{
     data(){
         return{
             drawer: false
         }
     }
}
</script>
