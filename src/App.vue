<style>
.scale-slide-enter-active,
.scale-slide-leave-active {
    position: absolute;
    transition: all 0.85s ease;
}

.scale-slide-enter-from {
    left: -100%;
}

.scale-slide-enter-to {
    left: 0%;
}

.scale-slide-leave-from {
    transform: translateX(0);
}

.scale-slide-leave-to {
    transform: translateX(-100%);
}
</style>

<template>
    <RouterView v-slot="{ Component }">
        <Transition name="scale-slide">
            <component :is="Component" />
        </Transition>
    </RouterView>
</template>

<script setup lang="ts">

import { RouterView } from 'vue-router';

</script>