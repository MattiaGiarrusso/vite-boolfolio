<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'ProjectList',
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: [],
            currentPage: 1,
            nextPageUrl: null,
            previousPageUrl: null
        };
    },
    methods: {
        getProjects(pageNumb) {
            axios.get('http://127.0.0.1:8000/api/projects', {
                params:{
                    page: pageNumb
                }
            })
            .then((response) => {
                if(response.data.success){
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.previousPageUrl = response.data.results.prev_page_url;
                    this.nextPageUrl = response.data.results.next_page_url;
                } else {
                    this.$router.push({name:'not-found'});
                }
            });
        }
    },
    mounted() {
        this.getProjects(this.currentPage);
    }
}
</script>

<template>

    <div class="container">
        <h1>I nostri progetti</h1>

        <div class="row row-cols-3">
            <div v-for="project in projects" :key="project.id" class="col">
                <ProjectCard :projectInfo="project"></ProjectCard>
            </div>            
        </div>

        <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <!-- <li class="page-item" v-if="previousPageUrl"> -->
                    <li class="page-item ms-cursor" :class="{ disabled: previousPageUrl === 1}">
                        <a class="page-link" @click="getProjects(currentPage-1)">Previous</a>
                    </li>
                    <li class="page-item" aria-current="page">
                        <a class="page-link">{{ currentPage }}</a>
                    </li>
                    <li class="page-item ms-cursor" v-if="nextPageUrl">
                        <a class="page-link" @click="getProjects(currentPage+1)">Next</a>
                    </li>
                </ul>
        </nav>
    </div>

</template>

<style scoped lang="scss">

</style>
