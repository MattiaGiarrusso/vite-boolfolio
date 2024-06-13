<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header class="shadow mb-4 sticky-top">
        <nav class="navbar navbar-expand-lg bg-body-tertiary px-4">
            <div class="container-fluid">
                <router-link class="navbar-brand" :to="{ name: 'home' }">
                    <img src="../assets/img/logo.png" class="img-fluid ms-logo" alt="Project">
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" :to="{ name: 'home' }">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'projects' }">Projects</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>    
    </header>    
</template>

<style scoped lang="scss">

.ms-logo {
    width: 70px;
}
</style>