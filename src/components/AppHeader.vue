<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav class="navbar bg-body-tertiary">
             <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="../img/logo.png" alt="Logo" width="300" height="100" class="d-inline-block align-text-top">
                    <h1>Yu-Gi-Oh Api</h1>
                </a>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">

.header {
    width: 100%;
    height: 100%;
    margin: auto;
    h1 {
        font-size: 50px;
        text-align: center;
    }
    img {
        width: 300px;
        
    }
}

</style>