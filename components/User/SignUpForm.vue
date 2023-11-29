<template>
    <div class="container mx-auto p-4">
      <form @submit.prevent="signup">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-600">Username</label>
          <input v-model="username" type="text" id="username" name="username" class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
          <input v-model="email" type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div class="mb-4">
          <label for="phoneNumber" class="block text-sm font-medium text-gray-600">Phone Number</label>
          <input v-model="phoneNumber" type="tel" id="phoneNumber" name="phoneNumber" class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
          <input v-model="password" type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <button type="submit" class="bg-green-500 text-white p-2 rounded-md">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  

      const username = ref('');
      const email = ref('');
      const phoneNumber = ref('');
      const password = ref('');
  
      const signup = () => {
        // Add your sign-up logic here
        console.log('Signing up with:', username.value, email.value, phoneNumber.value, password.value);
      };
  

  </script>
  