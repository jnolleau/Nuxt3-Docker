<template>
    <NuxtLayout>
        <!-- Markup shared across all pages, ex: NavBar -->
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - My App` : 'My App';
    },
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    bodyAttrs: {
        class: 'test'
    }
})
</script>

