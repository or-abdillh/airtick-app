<style scoped>
.track {
    background-position: bottom;
    background-size: 12px 1px;
    background-repeat: repeat-x;
}

.track--white {
    background-image: linear-gradient(to right, white 50%, rgba(255, 255, 255, 0) 0%);
}

.track--gray {
    background-image: linear-gradient(to right, gray 70%, rgba(255, 255, 255, .6) 0%);
}
</style>

<template>
    <AppLayout :use-navbar="false">
        <header class="py-6 bg-primary-900 rounded-b-[2rem] animate__animated animate__slideInUp">
            <!-- tools -->
            <section class="px-6 flex justify-between items-center mb-6">
                <button @click="$router.go(-1)">
                    <i class="fa-solid fa-chevron-left text-2xl text-white"></i>
                </button>
                <button>
                    <i class="fa-solid fa-sliders text-2xl text-white"></i>
                </button>
            </section>

            <!-- meta -->
            <section class="px-6 mb-10 animate__animated animate__slideInUp">
                <!-- places -->
                <div class="flex justify-between items-center text-gray-200 mb-2">
                    <p>Warsaw, Poland</p>
                    <p>Paris, France</p>
                </div>

                <!-- detail -->
                <div class="flex justify-between items-center text-white text-xl">
                    <strong>WAW</strong>

                    <!-- track -->
                    <div class="relative w-6/12 h-[.8px] track track--white">
                        <!-- start -->
                        <i
                            class="absolute left-0 bottom-2/4 translate-y-2/4 fa-solid fa-circle text-white text-[.5rem]"></i>
                        <!-- middle -->
                        <i class="absolute bottom-2/4 translate-y-2/4 left-2/4 -translate-x-2/4 fa-solid fa-plane"></i>
                        <!-- end -->
                        <i
                            class="absolute right-0 bottom-2/4 translate-y-2/4 fa-solid fa-circle text-white text-[.5rem]"></i>
                    </div>

                    <strong>PAR</strong>
                </div>
            </section>

            <!-- calendar -->
            <section class="flex justify-between gap-4 overflow-auto mb-3 animate__animated animate__slideInUp">
                <template v-for="day in 30" :key="day">
                    <button @click="activeDay = day" class="px-6 py-3 rounded-2xl duration-200 active:scale-95"
                        :class="activeDay === day ? 'bg-white text-primary-800' : 'bg-primary-800 text-white'">
                        <p class="text-2xl">{{ day }}</p>
                        <small class="font-medium">Jan</small>
                    </button>
                </template>
            </section>
        </header>

        <!-- content -->
        <main class="p-6">
            <!-- categories -->
            <section class="flex justify-between gap-2 animate__animated animate__slideInUp mb-6">
                <template v-for="category in categories" :key="category">
                    <button @click="activeCategory = category"
                        :class="activeCategory.title === category.title ? 'bg-primary-900 text-white' : 'bg-white'"
                        class="text-left rounded-2xl py-4 px-5 duration-200 active:scale-95 ">
                        <!-- title -->
                        <p class="font-medium">{{ category.title }}</p>
                        <!-- price -->
                        <p :class="activeCategory.title === category.title ? 'text-white' : 'text-primary-800'"
                            class="text-2xl font-semibold my-3">{{ category.price }}$</p>
                        <!-- duration -->
                        <p class="text-sm"
                            :class="activeCategory.title === category.title ? 'text-300' : 'text-gray-500'">
                            {{ category.duration }}</p>
                    </button>
                </template>
            </section>

            <!-- card -->
            <section class="flex flex-col gap-3">
                <template v-for="card in 4" :key="card">
                    <!-- card -->
                    <div class="p-5 rounded-2xl bg-white animate__animated animate__slideInUp">
                        <!-- header -->
                        <div class="flex justify-between items-center mb-6">
                            <!-- airline -->
                            <div class="flex items-center gap-3">
                                <!-- icon -->
                                <div
                                    class="w-10 h-10 bg-primary-700 rounded-full text-primary-800 grid place-items-center">
                                    <i class="fa-solid fa-plane-arrival"></i>
                                </div>

                                <p class="font-medium text-gray-900">Wzz Air</p>
                            </div>

                            <!-- label -->
                            <div class="px-6 py-2 rounded-full bg-green-100 font-semibold text-green-500">
                                Cheapest
                            </div>
                        </div>

                        <!-- first -->
                        <div class="mb-6">
                            <!-- track -->
                            <div class="flex justify-between items-center text-gray-900 text-xl mb-2">
                                <strong>06:30</strong>

                                <!-- track -->
                                <div class="relative w-6/12 h-[.8px] track track--gray">
                                    <!-- start -->
                                    <i
                                        class="absolute left-0 bottom-2/4 translate-y-2/4 fa-solid fa-circle text-white text-[.5rem]"></i>
                                    <!-- middle -->
                                    <i
                                        class="absolute bottom-2/4 translate-y-2/4 left-2/4 -translate-x-2/4 fa-solid fa-plane text-gray-300"></i>
                                    <!-- end -->
                                    <i
                                        class="absolute right-0 bottom-2/4 translate-y-2/4 fa-solid fa-circle text-white text-[.5rem]"></i>
                                </div>

                                <strong>09:00</strong>
                            </div>
                            <!-- places -->
                            <div class="flex justify-between items-center text-gray-900 font-semibold">
                                <P>WAW</P>
                                <p class="text-gray-400">2h 24min</p>
                                <P>PAR</P>
                            </div>
                        </div>

                        <!-- second -->
                        <div class="mb-6">
                            <!-- track -->
                            <div class="flex justify-between items-center text-gray-900 text-xl mb-2">
                                <strong>09:30</strong>

                                <!-- track -->
                                <div class="relative w-6/12 h-[.8px] track track--gray">
                                    <!-- start -->
                                    <i
                                        class="absolute left-0 bottom-2/4 translate-y-2/4 fa-solid fa-circle text-white text-[.5rem]"></i>
                                    <!-- middle -->
                                    <i
                                        class="absolute bottom-2/4 translate-y-2/4 left-2/4 -translate-x-2/4 fa-solid fa-plane text-gray-300"></i>
                                    <!-- end -->
                                    <i
                                        class="absolute right-0 bottom-2/4 translate-y-2/4 fa-solid fa-circle text-white text-[.5rem]"></i>
                                </div>

                                <strong>11:00</strong>
                            </div>
                            <!-- places -->
                            <div class="flex justify-between items-center text-gray-900 font-semibold">
                                <P>PAR</P>
                                <p class="text-gray-400">2h 24min</p>
                                <P>WAW</P>
                            </div>
                        </div>

                        <!-- ticket cutting area  -->
                        <div class="track track--gray h-1 mb-3"></div>

                        <!-- footer -->
                        <div class="flex justify-between items-center">
                            <p class="text-gray-500">Direct Flight</p>
                            <p class="text-gray-900 text-xl font-semibold">65$</p>
                        </div>
                    </div>
                </template>
            </section>
        </main>
    </AppLayout>
</template>

<script setup lang="ts">

import AppLayout from '@/layouts/AppLayout.vue';
import { reactive, ref } from 'vue';

type Category = { title: string, price: number, duration: string }

// initials
const activeDay = ref<number>(3)
const categories = reactive<Category[]>([
    {
        title: "Best",
        price: 65,
        duration: "2h 24min"
    },
    {
        title: "Cheapest",
        price: 65,
        duration: "2h 24min"
    },
    {
        title: "Fastest",
        price: 82,
        duration: "2h 10min"
    }
])

const activeCategory = ref<Category>(categories[0])

</script>