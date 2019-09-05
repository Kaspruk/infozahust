<template>
    <el-header>
        <el-menu class="el-menu-demo" mode="horizontal" :router="true" :default-active="$route.name">
            <el-menu-item index="home" :route="{ name: 'home' }">Home</el-menu-item>
            <el-menu-item index="result" :route="{ name: 'result' }">Result</el-menu-item>
        </el-menu>
    </el-header>
</template>

<script>
    export default {
        name: "HeaderUi"
    }
</script>

<style scoped>

</style>
