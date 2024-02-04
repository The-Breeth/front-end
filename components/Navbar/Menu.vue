<template>
    <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center">
                <img src="/logo.png" alt="Logo" class="h-8 w-8 mr-2" />
                <span class="text-white text-lg font-semibold"><nuxt-link to="/">Breeth</nuxt-link></span>
            </div>

            <!-- Navigation Links -->
            <div class="hidden md:flex space-x-4">
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/about">About</nuxt-link>
                <nuxt-link to="/pricing">Pricing</nuxt-link>
                <nuxt-link to="/plans">Plans</nuxt-link>
            </div>

            <!-- Buttons -->
            <div class="hidden md:flex space-x-4">
                <button type="submit" class="bg-blue-500 text-white p-2 rounded-md">
                    <nuxt-link to="/login">Login</nuxt-link>
                </button>
                <button type="submit" class="bg-green-500 text-white p-2 rounded-md">
                    <nuxt-link to="/signup">Sign Up</nuxt-link>
                </button>
            </div>

            <!-- Mobile Menu (Hamburger Icon) -->
            <div class="md:hidden">
                <button class="text-white focus:outline-none" @click="toggleMobileMenu">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu (Dropdown) -->
            <div v-if="isMobileMenuOpen" class="md:hidden absolute top-16 right-0 bg-gray-800 p-4 space-y-2">
                <MobileNavLink to="/">Home</MobileNavLink>
                <MobileNavLink to="/about">About</MobileNavLink>
                <MobileNavLink to="/pricing">Pricing</MobileNavLink>
                <MobileNavLink to="/plans">Plans</MobileNavLink>
                <MobileButtonLink to="/login">Login</MobileButtonLink>
                <MobileButtonLink to="/signup">Signup</MobileButtonLink>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
}
</script>

<style>
/* Add your custom styles here */
</style>
