<template>
    <main class="lg:w-4/12 lg:mx-auto min-h-screen bg-primary-600">
        <slot />
    </main>

    <nav v-if="props.useNavbar" class="fixed bottom-0 left-0 right-0">
        <!-- wrapper -->
        <section class="lg:w-4/12 lg:mx-auto px-12 py-6 bg-white border-t flex justify-between items-center gap-3">
            <template v-for="menu in menus" :key="menu">
                <button class="text-2xl duration-200" @click="activeMenu = menu">
                    <i class="fa-solid"
                        :class="[menu, menu === activeMenu ? 'text-primary-900' : ' text-slate-300']"></i>
                </button>
            </template>
        </section>
    </nav>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const props = withDefaults(
    defineProps<{ useNavbar: boolean }>(),
    {
        useNavbar: true
    }
)

const menus: string[] = [
    "fa-home", "fa-ticket", "fa-bell", "fa-gear"
]

const activeMenu = ref<string>(menus[0])

</script>