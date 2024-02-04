<template>
    <footer class="flex bg-gray-800 text-white p-4">
        <div class="container mx-auto flex flex-col items-center">
            <!-- Navigation Links -->
            <nav class="mb-4">
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/about">About Us</FooterLink>
                <FooterLink to="/terms&conditions">Terms and Conditions</FooterLink>
                <FooterLink to="/privacy&policy">Privacy Policy</FooterLink>
            </nav>

            <!-- Copyright Notice -->
            <p class="mb-4">© 2023 Breeth. All rights reserved.</p>

            <!-- Scroll to Top Button -->
            <button class="bg-white text-gray-800 p-2 rounded-full focus:outline-none" @click="scrollToTop">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
            </button>
        </div>
    </footer>
</template>

<script setup lang="ts">
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style>
/* Add your custom styles here */
</style>
