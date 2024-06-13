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
        <div class="card my-3 ms-card">
            <div class="card-body d-flex flex-column justify-content-between">
                <div>
                    <div v-if="projectInfo.name" class="my-1">
                        <h5 class="card-title"><strong>{{ projectInfo.name }}</strong></h5>
                    </div>

                    <div v-if="projectInfo.type_id" class="my-1">
                        <strong>Tipo di progetto</strong>: {{ projectInfo.type.name }}
                    </div>
    
                    <div v-if="projectInfo.technologies.length>0" class="my-1">
                        <strong>Tecnologie impiegate</strong>: <span v-for="technology in projectInfo.technologies">{{ technology.name }} &nbsp;</span>
                    </div> 

                    <div v-if="projectInfo.summary" class="my-1">
                        <p class="card-text"><strong>Descrizione: </strong>{{ truncateText(projectInfo.summary) }}</p>
                    </div>
                </div>

                <div class="my-1">
                    <router-link :to="{ name: 'single-project', params: {slug: projectInfo.slug } }" class="btn btn-primary">Visualizza</router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">

</style>