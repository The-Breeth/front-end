<template>
    <div>
        <div class="min-h-screen flex items-center justify-center bg-[#4c1d95]">
            <div class="max-w-md w-full space-y-8">
                <form class="mt-8 space-y-6 bg-white rounded-lg p-8 shadow-lg" @submit.prevent="signup">
                    <div class="text-center">
                        <div class="flex justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="h-12 w-12 text-white"
                            >
                                <path d="M20 8.54V4a2 2 0 1 0-4 0v3"></path>
                                <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1.93 1.93 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1c-1.7 0-3 1.3-3 3"></path>
                                <path d="M7.61 12.53a3 3 0 1 0-1.6 4.3"></path>
                                <path d="M13 16a3 3 0 0 1 2.24 5"></path>
                                <path d="M18 12h.01"></path>
                            </svg>
                        </div>
                        <h2 class="mt-6 text-center text-3xl font-extrabold text-white">Sign Up</h2>
                    </div>
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="email-address" class="sr-only"> Email address </label>
                            <input
                                id="email-address"
                                v-model="email"
                                class="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-none rounded-t-md"
                                autocomplete="email"
                                required="true"
                                placeholder="Email"
                                type="email"
                                name="email"
                            />
                        </div>
                        <div>
                            <label for="username" class="sr-only"> User Name </label>
                            <input
                                id="username"
                                v-model="username"
                                class="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-none"
                                autocomplete="username"
                                required="true"
                                placeholder="User Name"
                                type="text"
                                name="username"
                            />
                        </div>

                        <div>
                            <label for="password" class="sr-only"> Password </label>
                            <input
                                id="password"
                                v-model="password"
                                class="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-none rounded-b-md"
                                autocomplete="current-password"
                                required="true"
                                placeholder="Password"
                                type="password"
                                name="password"
                            />
                        </div>
                        <div>
                            <label for="country" class="sr-only"> Country </label>
                            <input
                                id="country"
                                class="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-none rounded-b-md"
                                autocomplete="current-country"
                                required="true"
                                placeholder="country"
                                type="country"
                                name="country"
                            />
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <button
                                id="remember-me"
                                type="button"
                                role="checkbox"
                                aria-checked="false"
                                data-state="unchecked"
                                value="on"
                                class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                            ></button>
                            <input
                                aria-hidden="true"
                                tabindex="-1"
                                type="checkbox"
                                value="on"
                                style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px"
                            />
                            <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
                        </div>
                        <div class="text-sm">
                            <a class="font-medium text-indigo-600 hover:text-indigo-500" href="#"> Forgot your password? </a>
                        </div>
                    </div>
                    <div>
                        <button
                            class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-[#9333ea] text-white"
                        >
                            Sign Up
                        </button>
                    </div>

                    <div class="mt-6">
                        <div class="relative">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-gray-300"></div>
                            </div>
                            <div class="relative flex justify-center text-sm">
                                <span class="px-2 bg-white text-gray-500">Create account with</span>
                            </div>
                        </div>
                        <div class="mt-6 grid grid-cols-4 gap-3">
                            <div>
                                <button
                                    class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-white text-gray-600 border-gray-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="h-5 w-5 text-blue-600"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <button
                                    class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-white text-gray-600 border-gray-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="h-5 w-5 text-red-600"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <circle cx="12" cy="12" r="4"></circle>
                                        <line x1="21.17" x2="12" y1="8" y2="8"></line>
                                        <line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
                                        <line x1="10.88" x2="15.46" y1="21.94" y2="14"></line>
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <button
                                    class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-white text-gray-600 border-gray-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="h-5 w-5 text-black"
                                    >
                                        <path
                                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                                        ></path>
                                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <button
                                    class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-white text-gray-600 border-gray-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="h-5 w-5 text-blue-400"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAppConfig } from 'nuxt/app'

const username = ref('')
const email = ref('')
const phoneNumber = ref('')
const password = ref('')

const signup = async () => {
    // Add your sign-up logic here
    // eslint-disable-next-line no-console

    const payload = {
        message: "Welcome back sssk! Let's get you logged in!",
        data: {
            existingUser: {
                email: email.value,
                password: password.value,
                userName: username.value,
                profilePic: 'dddd',
                country: 'India',
                emailComm: true,
                verified: true,
                contentPlatforms: ['youtube', 'faceboock', 'instagram', 'ticktok'],
                TermsAndConditionsAndPrivacyAndPolicies: true,
                entryType: 'general',
            },
        },
    }
    // Make the POST request
    const signupResponse = await useFetch('https://dev-be.thebreeth.com/auth/creator/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Make sure to set the content type if your API expects JSON
            // Add any other headers if needed
        },
        body: JSON.stringify(payload), // Convert the payload to a JSON string
    })
    console.log('Signing up with:', signupResponse)
}
</script>
