<template>
    <main class="flex flex-col items-center justify-center h-screen md:flex-row md:flex-row-reverse md:justify-evenly">
  
        <div class="md:bg-gray-100 md:h-screen md:flex md:flex-col md:items-center md:justify-center">
  
            <img src="../assets/asset-1.png" class="w-24 my-4 md:w-full " alt="hero-img">
        </div>
        <div>
            <div class="text-center  w-full font-semibold">
            <h1 class="text-2xl">Welcome back</h1>
            <p class="text-xs text-gray-400 mt-2 mb-4">Welcome back! please enter your details</p>
        </div>
        <div >
        <fieldset class="my-2">
            <label for="email" class="m-2 text-xs w-full font-medium" >Email</label>
            <input class="border ml-2 w-full p-1 text-sm rounded font-medium" type="text" placeholder="Enter your email" v-model="userEmail">
        </fieldset>
        <fieldset class="my-2">
            <label for="email" class="m-2 text-xs w-full font-medium">Password</label>
            <input class="border ml-2 w-full p-1 text-sm rounded font-medium" type="password" placeholder="*********" v-model="userPassword">
        </fieldset>
        <fieldset class="my-4 flex flex-wrap items-center">
            <input type="checkbox" name="radio" id="radio" class="ml-2">
            <label for="radio" class="text-xs ml-2"> Remeber me for 30 days</label>
            <RouterLink to="" class="text-xs text-purple-600 ml-8">Forgot Password</RouterLink>
        </fieldset>
        <div class="my-2">
            <button type="submit" class="mx-2 mb-4 p-2 block w-full bg-purple-500 text-white text-sm font-medium rounded" @click="emailLogin">Sign
                Up</button>
              
        </div>
        <div class="text-center text-sm pt-1 text-gray-400 font-semibold">
  
        </div>
      </div>
        </div>
       
  
    </main>
  
  
  </template>
  
  <script setup lang="ts">
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { ref } from "vue";
  
  const auth = getAuth()
  const userEmail = ref('')
  const userPassword = ref('')
  const emailLogin = () => {
    createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  
  }
  const googleAuthLogin = ()=> console.log("google auth login")
  </script>