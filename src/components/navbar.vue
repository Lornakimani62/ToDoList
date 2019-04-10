<template>
    <nav>
        <!-- The toolbar is used to create a navigation bar dark specifies a prop used for stying and app makes the bar remain static -->
        <v-toolbar color="grey darken-3" dark app> 
            <v-toolbar-side-icon dark @click='drawer=!drawer'></v-toolbar-side-icon>
            <v-toolbar-title class="text dark lighten-2">
                <span class="font-weight-light left">Todo</span>
                <span>Lorna</span>
            </v-toolbar-title>  
            <v-spacer></v-spacer>
                <v-btn flat lighten-2>
                    <span>Sign out</span>
                    <v-icon right>exit_to_app</v-icon>
                </v-btn>

        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="teal darken-2">
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text"  :to="link.route">
                <v-list-tile-action>
                    <v-icon class="white--text">{{link.icon}}</v-icon>
                </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>

<script>
export default{
     data(){
         return{
             drawer: false,
             links:[
                 {icon:'home', text:'Home', route:'/'},
                 {icon:'folder_open', text:'Projects', route:'/projects'},
                 {icon:'person', text:'Team', route:'/team'},
             ]
         }
     }
}
</script>
