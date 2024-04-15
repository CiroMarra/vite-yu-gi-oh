<script>
export default {
    name: 'CharacterCard',
    props: {
        cardInfo: Object
    }
}
</script>

<template>
    <div class="card-box">
        <div class="image">
            <img :src="cardInfo.card_images[0].image_url" :alt="cardInfo.name">
        </div>

        <h2>{{ cardInfo.name }}</h2>
        <div>{{ cardInfo.race}}</div>
    </div>
</template>

<style scoped lang="scss">
.card-box {
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