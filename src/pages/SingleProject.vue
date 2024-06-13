<script>
import axios from 'axios';
import { store } from '../store.js';
import Loader from '../components/Loader.vue';

export default {
    name: 'SingleProject',
    components: {
        Loader,
    },
    data() {
        return {
            store,
            project: null,
            isLoading: false
        };
    },
    methods: {
        getProjectDetails() {
            this.isLoading = true;

            axios.get(`${this.store.apiBaseUrl}/api/projects/${this.$route.params.slug}`)
            .then((response) => {
                if(response.data.success){
                    this.project = response.data.project;
                    this.isLoading = false; 
                } else {
                    this.$router.push({name:'not-found'});
                    this.isLoading = false; 
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
                    <strong>Cliente del progetto:</strong> {{ project.client_name }}
                </div>
    
                <div v-if="project.type">
                    <strong>Tipo di progetto:</strong> {{ project.type.name }}
                </div>
    
                <div v-if="project.technologies.lenght > 0">
                    <strong>Tipo di progetto:</strong><span class="badge text-bg-info mx-1"> {{ project.type.name }}</span>
                </div>
                
                <div v-if="project.summary" class="row mt-4">                
                    <strong>Descrizione del progetto</strong>
                    <p class="card-text">{{ project.summary }}</p>
                </div>
            </div>         
            
            <div v-if="project.cover_image">
                <img :src="`${this.store.apiBaseUrl}/storage/${project.cover_image}`" :alt="project.name">
            </div>            
        </div>        
    </div>

    <div v-else class="container text-center">
        <Loader></Loader>
    </div>
</div>

</template>


<style scoped lang="scss">




</style>