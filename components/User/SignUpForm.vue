<template>
    <div class="container mx-auto p-4">
        <form @submit.prevent="signup">
            <div class="mb-4">
                <label for="username" class="block text-sm font-medium text-gray-600">Username</label>
                <input id="username" v-model="username" type="text" name="username" class="mt-1 p-2 w-full border rounded-md" />
            </div>
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
                <input id="email" v-model="email" type="email" name="email" class="mt-1 p-2 w-full border rounded-md" />
            </div>
            <div class="mb-4">
                <label for="phoneNumber" class="block text-sm font-medium text-gray-600">Phone Number</label>
                <input id="phoneNumber" v-model="phoneNumber" type="tel" name="phoneNumber" class="mt-1 p-2 w-full border rounded-md" />
            </div>
            <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
                <input id="password" v-model="password" type="password" name="password" class="mt-1 p-2 w-full border rounded-md" />
            </div>
            <button type="submit" class="bg-green-500 text-white p-2 rounded-md">Sign Up</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const email = ref('')
const phoneNumber = ref('')
const password = ref('')

const signup = () => {
    // Add your sign-up logic here
    // eslint-disable-next-line no-console
    console.log('Signing up with:', username.value, email.value, phoneNumber.value, password.value)
}
</script>
