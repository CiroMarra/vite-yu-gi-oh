<script>
export default {
    name: 'CharacterCard',
    props: {
        cardInfo: Object
    }
}
</script>

<template>

<div class="container-fluid card-box">
    <div class="container">
        <div class="pt-3 py-3">
        <div class="image">
            <img :src="cardInfo.card_images[0].image_url" :alt="cardInfo.name">
        </div>
        <h5 class="text-white">{{ cardInfo.name }}</h5>
        <p class="text-white">{{ cardInfo.race}}</p>
   </div>
    </div>
 
</div>

</template>

<style scoped lang="scss">
.test {
    overflow-y: hidden;
}
.card-box {
    background-color: orange;
    width: calc((100% / 5) - 10px);
    text-align: center;
    margin: 10px 5px;

    .image {
        img {
            width: 100%;
        }
    }
}
</style>