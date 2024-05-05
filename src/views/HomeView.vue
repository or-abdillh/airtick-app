<template>
    <AppLayout>
        <header class="p-6 bg-primary-900 rounded-b-[3rem] pb-32 animate__animated animate__slideInUp">
            <section class="flex justify-between items-center mb-8">
                <!-- copywriting -->
                <p class="text-2xl font-semibold text-white w-8/12">Where would you want to go?</p>

                <!-- avatar -->
                <div class="bg-gray-100 h-14 w-14 rounded-full overflow-hidden">
                    <img src="/assets/man.png" class="translate-y-2" alt="">
                </div>
            </section>

            <!-- pills -->
            <section class="flex justify-evenly gap-2 animate__animated animate__slideInUp">
                <template v-for="pil in pils" :key="pil">
                    <button @click="activePil = pil"
                        :class="activePil === pil ? 'bg-white text-primary-900' : 'bg-primary-800 text-white'"
                        class="duration-300 px-4 py-2 rounded-full text-sm flex justify-between items-center gap-2 truncate ...">
                        {{ pil }}
                        <i class="fa-solid fa-circle-chevron-right text-xs"></i>
                    </button>
                </template>
            </section>
        </header>

        <!-- wrapper: main panel -->
        <section class="px-6 -translate-y-24">
            <!-- card -->
            <section class="bg-white rounded-3xl p-5 animate__animated animate__slideInUp">
                <div class="relative mb-3">
                    <!-- field: location -->
                    <div class="flex flex-col bg-primary-700 rounded-2xl p-5 mb-3">
                        <label class="text-gray-400 font-semibold" for="location">From (location)</label>
                        <input v-model="form.location"
                            class="mt-1 bg-primary-700 outline-none py-1 text-xl font-semibold text-gray-900"
                            type="text" placeholder="Enter your location">
                    </div>

                    <!-- switcher -->
                    <div @click="switchValue"
                        class="cursor-pointer active:scale-90 active:shadow duration-200 rotate-90 w-16 h-16 bg-white rounded-full grid place-items-center absolute right-5 bottom-2/4 translate-y-2/4">
                        <i class="fa-solid fa-arrow-right-arrow-left text-2xl text-gray-700"></i>
                    </div>

                    <!-- field: destination -->
                    <div class="flex flex-col bg-primary-700 rounded-2xl p-5">
                        <label class="text-gray-400 font-semibold" for="destination">To (destination)</label>
                        <input v-model="form.destination"
                            class="mt-1 bg-primary-700 outline-none py-1 text-xl font-semibold text-gray-900"
                            type="text" placeholder="Enter your destination">
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-3 mb-3">
                    <!-- departure -->
                    <div class="flex flex-col bg-primary-700 rounded-2xl p-5">
                        <label class="text-gray-400 font-semibold" for="destination">Departure</label>
                        <input v-model="form.departure"
                            class="mt-1 bg-primary-700 outline-none py-1 text-xl font-semibold text-gray-900"
                            type="text" placeholder="Enter your destination">
                    </div>

                    <!-- departure -->
                    <div class="flex flex-col bg-primary-700 rounded-2xl p-5">
                        <label class="text-gray-400 font-semibold" for="destination">Return</label>
                        <input v-model="form.return"
                            class="mt-1 bg-primary-700 outline-none py-1 text-xl font-semibold text-gray-900"
                            type="text" placeholder="Enter your destination">
                    </div>
                </div>

                <!-- passengers -->
                <div class="flex justify-between items-center bg-primary-700 rounded-2xl p-5 mb-5">
                    <div class="flex flex-col">
                        <label class="text-gray-400 font-semibold" for="destination">Passengers</label>
                        <input v-model="form.passengers"
                            class="mt-1 bg-primary-700 outline-none py-1 text-xl font-semibold text-gray-900"
                            type="text" placeholder="Enter your destination">
                    </div>

                    <i class="fa-solid fa-user text-gray-300 text-xl"></i>
                </div>

                <!-- action -->
                <button @click="search" class="w-full bg-primary-900 py-3 rounded-2xl text-gray-50 font-semibold">
                    <template v-if="isSearching">
                        <i class="fa-solid fa-spinner fa-spin me-2"></i>
                        Searching ...
                    </template>

                    <template v-else>
                        Search Flight
                    </template>
                </button>
            </section>
        </section>
    </AppLayout>
</template>

<script setup lang="ts">

import AppLayout from '@/layouts/AppLayout.vue';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const pils: string[] = ["One way", "Round trip", "Multi city"]
const activePil = ref<string>(pils[0])
const isSearching = ref<boolean>(false)

// forms
const form = reactive<{ location: string, destination: string, departure: string, return: string, passengers: string }>(
    {
        location: "Warsaw, Poland",
        destination: "Paris, France",
        departure: "12 Jun",
        return: "18 Jun",
        passengers: "1 Adult"
    }
)

// handler: switch value between location and destination
const switchValue = (): void => {

    [form.location, form.destination] = [form.destination, form.location]
}

// handler: search 
const search = (): void => {

    isSearching.value = true

    setTimeout(() => {
        router.push({
            name: "ticket"
        })

        isSearching.value = false
    }, 1000)
}

</script>