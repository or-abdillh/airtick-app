<template>
    <RouterView v-slot="{ Component }">
        <Transition name="slide">
            <component :is="Component" />
        </Transition>
    </RouterView>
</template>

<script setup lang="ts">

import { RouterView } from 'vue-router';

</script>