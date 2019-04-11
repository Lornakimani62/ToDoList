<template>
        <div class="team">
           <h1 class="subheading grey--text"><v-icon>person</v-icon>Team</h1>
           <v-container class="my-5"> 
                <v-layout row wrap>
                    <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                        <v-card flat class="text-xs-centre ma-3" >
                            <v-responsive class="pt-4">
                                 <v-avatar size="100"  class="grey lighten--2 mx-5" >
                                    <img :src="person.avatar">
                                </v-avatar>
                            </v-responsive>
                            <v-card-text>     
                                <div class="subheading  mx-5">{{person.name}}</div>
                                <div class="class grey--text  mx-5">{{person.role}}</div>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn flat color="teal"  class="mx-4">
                                    <v-icon small left>message</v-icon>
                                    <span>Message</span>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>  
        </div>
</template>

<script>
export default {
    data() {
        return {
            team: [
                { name: 'Lorna Kimani', role: 'Web developer' , avatar:'/avatar-1.png'},
                { name: 'Developer Barbie', role: 'Graphic designer' , avatar:'/avatar-2.png'},
                { name: 'Barbie Element', role: 'Web developer' , avatar:'/avatar-3.png'},
                { name: 'Gakuyo', role: 'Social media maverick' , avatar:'/avatar-4.png'},
                { name: 'Yoshi', role: 'Sales guru', avatar:'/avatar-5.png'}
            ]
        }
  },
}
</script>