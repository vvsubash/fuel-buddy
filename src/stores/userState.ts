import { defineStore } from "pinia";

import { computed, ref } from "vue";

export const getUserState = defineStore('user', ()=> {
    let user = ref({})
    let userlogin = (userData: {}) => user.value = userData

    let userDisplayData = computed(()=> {
        return {
            email: user.value.email,
            id: user.value.uid
        }
    })
    return {user, userlogin,  userDisplayData}
})