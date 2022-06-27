<template>
    <NuxtLayout name="default" :h1="h1">
        <ContactForm />
    </NuxtLayout>
</template>

<script setup>
    
const h1 = 'contact';

definePageMeta({
    layout: false
})

useHead({
    title: 'contact',
    meta: [
        { name: 'description', content: 'Contact page' }
    ],
})

</script>