<template>
    <div>
        <ul>
            <li v-for="user in users" :key="user.id">
                <NuxtLink :to="/users/ + user.id">{{ user.name }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>

definePageMeta({
    layout: "default",
})
useHead({
    title: 'user page',
    // or, instead:
    // titleTemplate: (title) => `My App - ${title}`,
    meta: [
        { name: 'description', content: 'The index page.' }
    ]
})

const { users } = await $fetch('/api/users')

</script>
