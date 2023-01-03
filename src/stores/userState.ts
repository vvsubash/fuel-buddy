import { defineStore } from "pinia";

import { ref } from "vue";

export const getUserState = defineStore('user', ()=> {
    let user = ref('')
    let userlogin = () => user.value = 'subash'

    return {user, userlogin}
})