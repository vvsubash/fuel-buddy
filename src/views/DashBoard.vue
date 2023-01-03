<script setup lang='ts'>
import { getAuth, signOut } from "firebase/auth";
import { getUserState } from "../stores/userState"

import { useRouter } from 'vue-router'
 const router = useRouter()

const auth = getAuth();
const userVal = getUserState()
const logout = () => {
    signOut(auth).then(() => {
        router.push("/")
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}
</script>

<template>
    <div v-if="userVal.userDisplayData.email">
        <h1 class="text-center text-xl">

            Dashboard
        </h1>
        <br />
        <button class="w-64 bg-purple-500 m-4 p-2 text-white rounded" @click="logout">Logout</button>

        <p>Emai: {{ userVal.userDisplayData.email }}</p>
        <p>User Id: {{ userVal.userDisplayData.id }}</p>

    </div>
    <div class="mx-auto my-4 container " v-if="!userVal.userDisplayData.email">
        <RouterLink  class="w-64 bg-purple-500 m-4 p-2 text-white rounded " to="/">Go to Login Page</RouterLink>
    </div>
</template>

<style lang="scss" scoped>

</style>