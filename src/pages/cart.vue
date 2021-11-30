<template>
    <div>
        <order-header></order-header>
        cart
        <nav-header></nav-header>
    </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader.vue';
import NavHeader from '../components/NavHeader.vue';
export default {
    components:{
        OrderHeader,
        NavHeader,
    }
}
</script>