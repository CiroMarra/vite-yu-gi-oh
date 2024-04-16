<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
<header>
    <nav class="navbar">
         <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-auto">
                    <a class="navbar-brand" href="#">
                        <img src="../img/logo.png" alt="Logo" width="300" height="100" class="d-inline-block align-text-top">
                    </a>
                </div>
                <div class="col text-center"> 
                    <h1 class="mb-0">Yu-Gi-Oh Api</h1>
                </div>
            </div>
        </div>
    </nav>
</header>
</template>

<style scoped lang="scss">

.header {
    h1 {
        font-size: 50px;
        text-align: center;
    }
    img {
        width: 300px;
        
    }
}

</style>