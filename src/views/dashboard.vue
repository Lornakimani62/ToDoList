<template>
    <div class="dashboard">
        <h1 class="subheading grey--text"><v-icon>dashboard</v-icon>Dashboard</h1>
            <v-container class="my-5"> 
                <v-card flat class="pa-5" v-for="project in projects" :key="project.title">
                    <!-- Using typescript 6 so as to give styling according to a property in the array i.e the status property  -->
                    <v-layout row wrap :class="`pa-3 project ${project.status}`"> 
                        <v-flex xs12 md6>
                           <div class="caption grey--text">Project Title</div>
                           <div>{{project.title}}</div>
                        </v-flex>
                        <v-flex xs6 sm4 md2>
                           <div class="caption grey--text">Person</div>
                            <div>{{project.person}}</div>
                        </v-flex>
                         <v-flex xs6 sm4 md2>
                           <div class="caption grey--text">Due By</div>
                            <div>{{project.due}}</div>
                        </v-flex>
                         <v-flex xs2 sm4 md2>
                           <div class="caption grey--text">Status</div>
                            <div>{{project.status}}</div>
                        </v-flex>
                    </v-layout>
                   
                </v-card>
            </v-container> 
    </div>
</template>

<script>
export default {
    data(){
    return {
      projects: [
        { title: 'Design a new website', person: 'Lorna Kimani', due: '1st Jan 2019', status: 'complete'},
        { title: 'Code up the homepage', person: 'Developer Barbie', due: '10th Jan 2019', status: 'overdue', },
        { title: 'Design video thumbnails', person: 'Barbie Element', due: '20th Dec 2019', status: 'ongoing', },
        { title: 'Create a community forum', person: 'Gakuyo', due: '20th Oct 2019', status: 'ongoing',},
      ]
    }
  }
}
</script>
<style>

.project.complete{
  border-left: 4px solid #3CD1C2;
}
.project.ongoing{
  border-left: 4px solid orange
}
.project.overdue{
  border-left: 4px solid tomato;
}
</style>