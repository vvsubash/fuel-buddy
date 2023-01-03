<script setup lang='ts'>
import {getUserState} from "../stores/userState"


const userVal = getUserState()
</script>

<template>
    <div>
        <button>Logout</button>
        dashboard
        <p>{{ userVal.user }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>