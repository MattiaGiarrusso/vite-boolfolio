<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: null,
            // loading: false,
        };
    },
    methods: {
        getProjectDetails() {
            axios.get(`${this.store.apiBaseUrl}/api/projects/${this.$route.params.slug}`)
            .then((response) => {
                if(response.data.success){
                    this.project = response.data.project;
                    // this.loading = true;
                } else {
                    this.$router.push({name:'not-found'});
                }
            });
        }
    },
    mounted() {
        this.getProjectDetails();
    }
};

</script>

<template>

<div class="container">    
    <div v-if="project">
        <h2>{{ project.name }}</h2>

        <div class="mt-4 d-flex justify-content-between">
            <div>
                <div v-if="project.client_name">
                    <strong>Cliente del progetto:</strong>{{ project.client_name }}
                </div>
    
                <div v-if="project.type">
                    <strong>Tipo di progetto:</strong> {{ project.type.name }}
                </div>
    
                <div v-if="project.technologies.lenght > 0">
                    <strong>Tipo di progetto:</strong><span class="badge text-bg-info mx-1">{{ project.type.name }}</span>
                </div>
                
                <div v-if="project.summary" class="row">                
                    <h6>Descrizione del progetto</h6>
                    <p class="card-text">{{ project.summary }}</p>
                </div>
            </div>         
            
            <div v-if="project.cover_image">
                <img :src="`${this.store.apiBaseUrl}/storage/${project.cover_image}`" :alt="project.name">
            </div>            
        </div>        
    </div>
</div>

</template>


<style scoped lang="scss">




</style>