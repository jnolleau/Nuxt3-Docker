<script setup>

useHead({
    title: 'My App',
    // or, instead:
    // titleTemplate: (title) => `My App - ${title}`,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ],
    bodyAttrs: {
        class: 'test'
    }
})

const { users } = await $fetch('/api/users')

</script>

<template>
    <div>
        <h1>Index page</h1>
        <NuxtLink to="/">Home page</NuxtLink>
        <div v-for="user in users" :key="user.id">
            <NuxtLink :to="/users/ + user.id">{{ user.name }}</NuxtLink>
        </div>
    </div>
</template>
