<template>
    <img src="@/assets/images/logo_white.png" alt="" class="logo_s" @click="TemPorary(0)">
    <ul class="main_menu2">
        <li>
            <i class="xi-layout-snb-o" @click="TemPorary(0)"></i>
        </li>
        <li>
            <i class="xi-clock-o" @click="TemPorary(2)"></i>
        </li>
        <li>
            <i class="xi-globus" @click="TemPorary(3)"></i>
        </li>
        <li>
            <i class="xi-document" @click="TemPorary(4)"></i>
        </li>
        <li>
            <i class="xi-eye" @click="TemPorary(5)"></i>
        </li>
        <li>
            <i class="xi-lock" @click="TemPorary(6)"></i>
        </li>
        <li>
            <i class="xi-trash" @click="TemPorary(1)"></i>
        </li>
        <li>
            <i class="xi-bell" @click="TemPorary(2)"></i>
        </li>
        <li>
            <i class="xi-user" @click="TemPorary(3)"></i>
        </li>
        <li>
            <i class="xi-cog" @click="TemPorary(4)"></i>
        </li>
    </ul>
</template>

<script>

export default {
    name: 'IconNode',
    methods: {
        TemPorary(index) {
            if(index === 0){
                this.$router.push({
                    path: `/main`,
                    query: {
                        myParam: index
                    }
                });
            }else{
                this.$router.push({
                    path: `/temp`,
                    query: {
                        myParam: index
                    }
                });
            }
        }
    }
}
</script>

<style>

</style>