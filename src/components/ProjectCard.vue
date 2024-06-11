<script>
export default {
    name: 'ProjectCard',
    props: {
        projectInfo: Object
    },
    methods: {
        truncateText(text) {
            if(text.length > 50) {
                return text.substr(0, 49) + '...';
            }
        return text;
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card my-3">
            <div class="card-body">
                <h5 class="card-title">{{ projectInfo.name }}</h5>
                <div v-if="projectInfo.type_id">
                    <strong>Tipo di progetto</strong>: {{ projectInfo.type.name }}
                </div>

                <div v-if="projectInfo.technologies.length>0">
                    <strong>Tecnologie impiegate</strong>: <span v-for="technology in projectInfo.technologies">{{ technology.name }} &nbsp;</span>
                </div> 
                <p v-if="projectInfo.summary" class="card-text">{{ truncateText(projectInfo.summary) }}</p>
                <router-link :to="{ name: 'single-project', params: {slug: projectInfo.slug } }" class="btn btn-primary">Visualizza</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>