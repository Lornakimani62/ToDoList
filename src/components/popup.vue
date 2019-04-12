<template>
    <v-dialog max-width="600px" max-height="1200px" v-model="dialog">
       <v-chip flat slot="activator" class="teal darken-3 white--text">Add new Project</v-chip>
        <v-card>
            <v-card-title>
                <h2>Add a new Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form  ref="form">
                    <v-text-field label="Project Title" :rules="inputrules" v-model="title" prepend-icon="folder"></v-text-field>
                     <v-textarea v-model="content" :rules="inputrules"             label="Project Details" prepend-icon="edit"></v-textarea>
                        <v-menu>
                            <v-text-field   :value="formattedDate" slot="activator" label="Due date" prepend-icon="date_range"></v-text-field>
                                <v-date-picker v-model="due"></v-date-picker>
                            
                        </v-menu>
                        <v-spacer></v-spacer>
                        <v-btn flat @click="submit" :loading="loading" class="teal mx-5 mt-3">Add Project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>

import format from 'date-fns/format'
import db from '@/fb'

export default {
    data(){
        return{
            title:'',
            content:'',
            due: null,
            inputrules:[
                v => v.length >= 8 || 'Minimum length is 8 character'
            ],
            loading: false,
            dialog:false
    }  
},
  methods: {
        submit(){
            if(this.$refs.form.validate()){
                this.loading=true;

                const project ={
                    title:this.title,
                    content:this.content,
                    due:format(this.due,'Do MMMM YYYY'),
                    person: 'Lorna Kimani',
                    status: 'ongoing'


                }

                db.collection('Projects').add(project).then(()=>{

                    this.loading=false;
                    this.dialog=false;
                    this.$emit('projectadded')
                })
            }
            
        },
    },
    computed:{
        formattedDate(){
            
            return this.due ? format(this.due, 'Do MMM YYYY'):''
        }
    }
}
</script>

