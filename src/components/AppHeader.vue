<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header class="shadow mb-4">
        <nav class="navbar navbar-expand-lg bg-body-tertiary px-4">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="../assets/img/logo.png" class="img-fluid ms-logo" alt="Project">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" :to="">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="">Project</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="">About</router-link>
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