<template lang="">
    <header>
        <div class="header_wrap type2 ">
            <h1>{{ title }}</h1>
            <ul class="main_menu2">
                <li>
                    <select>
                        <option>BW</option>
                        <option>TEST</option>
                        <option>CLOUD</option>
                        <option>ERP</option>
                        <option>DEFAULT</option>
                    </select>
                </li>
                <li>
                    <select>
                        <option>PDF</option>
                        <option>STE</option>
                    </select>
                </li>
                <li class="sch">
                    <button class="xi-calendar"></button>
                    <button class="xi-time-o"></button>
                    <input type="text" />
                    <i class="xi-search"></i>
                </li>
                <li>
                </li>
            </ul>
        </div>
    </header>
</template>
<script>
export default {
    props: {
        index: Number
    },
    data() {
        return {
        }
    },
    computed: {
    title() {
        switch (+this.index) {
            case 0:
                return 'DASHBOARD';
            case 1:
                return 'TIMELINE';
            case 2:
                return 'OPERATION';
            case 3:
                return 'SEARCH';
            case 4:
                return 'REPORT';
            case 5:
                return 'ALERT';
            case 6:
                return 'CONFIG';
            default:
                return '';
        }
    }
}
}
</script>
<style lang="scss" scoped>
</style>