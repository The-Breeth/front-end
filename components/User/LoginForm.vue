<template>
    <div class="container mx-auto p-4">
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-600">Username</label>
          <input v-model="username" type="text" id="username" name="username" class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
          <input v-model="password" type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <button type="submit" class="bg-blue-500 text-white p-2 rounded-md">Login</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  

      const username = ref('');
      const password = ref('');
  
      const login = () => {
        // Add your login logic here
        console.log('Logging in with:', username.value, password.value);
      };
  

  </script>
  