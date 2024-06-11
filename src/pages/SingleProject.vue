<script>
import axios from 'axios';

export default {
    name: 'SingleProject',
    data() {
        return {
            project: null
        };
    },
    methods: {
        getProjectDetails() {
            axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
            .then((response) => {
                this.project = response.data.project;
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
        <h1>{{ project.name }}</h1>

        <div v-if="project.cover_image">
            <img :src="`http://127.0.0.1:8000/storage/${project.cover_image}`" :alt="project.name">
        </div>

        <div class="row">
            <h5>{{ project.client_name }}</h5>
            <p class="card-text">{{ project.summary }}</p>
        </div>
    </div>
</template>