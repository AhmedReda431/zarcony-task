<template>
    <div class="social">
        <span class="icon mx-3" data-aos="fade-right" data-aos-delay="700">
            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
        </span>

        <span class="icon mx-3" data-aos="fade-right" data-aos-delay="800">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
        </span>
        <span class="icon mx-3" data-aos="fade-right" data-aos-delay="800">
            <font-awesome-icon icon="fa-brands fa-instagram" />
        </span>

        <!-- <span class="icon mx-3" data-aos="fade-right" data-aos-delay="900">
            <font-awesome-icon icon="fa-brands fa-twitter" />
        </span> -->
    </div>
</template>

<script>
export default {

}
</script >

<style lang="scss" scoped>
.icon{
    transition: all .3s ease-in-out;
    cursor:pointer
}
.icon:hover{
    color: $social-color;
}
</style>