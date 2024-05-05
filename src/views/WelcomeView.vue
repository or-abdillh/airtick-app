<template>
    <AppLayout :use-navbar="false">
        <main class="min-h-screen bg-primary-900">

            <!-- brand -->
            <header class="flex justify-center items-center gap-3 px-8 py-8 animate__animated animate__slideInDown">
                <!-- icon -->
                <div class="w-10 h-10 bg-white rounded-full grid place-items-center">
                    <i class="fa-solid fa-plane-departure text-primary-900"></i>
                </div>

                <p class="text-white text-2xl font-semibold">Airtick</p>
            </header>

            <!-- illustration -->
            <img src="/assets/airplane-illustration.png" class="w-full my-6 animate__animated animate__slideInUp"
                alt="">

            <!-- copywriting -->
            <section class="text-center px-8 mb-12 animate__animated animate__slideInUp">
                <h1 class="text-4xl mb-5 text-white font-semibold">An easy way to start traveling</h1>
                <p class="text-gray-200">
                    See where you can travel to right now and find the best deals across thousands of flights
                </p>
            </section>

            <section class="px-8 animate__animated animate__slideInUp">
                <button @click="handleGettingStarted"
                    class="w-full p-3 rounded-2xl bg-white mb-6 disabled:bg-primary-800 disabled:text-gray-100"
                    :disabled="isLoading">
                    <i v-if="isLoading" class="fa-solid fa-spinner me-2 fa-spin"></i>
                    Get
                    Started
                </button>

                <p class="text-center text-gray-300">Don't have an account? <strong>Sign Up</strong></p>
            </section>
        </main>
    </AppLayout>
</template>

<script setup lang="ts">

import AppLayout from '@/layouts/AppLayout.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// initials
const router = useRouter()
const isLoading = ref<boolean>(false)

const handleGettingStarted = (): void => {

    isLoading.value = true

    setTimeout(() => {

        router.push({
            name: "home"
        })

        isLoading.value = false
    }, 1000);
}


</script>