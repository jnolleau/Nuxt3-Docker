<template>
    <div>
        <h2>{{ user.name }}</h2>
        <div>Hello ! My id is {{ user.id }}</div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: "default"
})

useHead({
    title: 'user',
    meta: [
        { name: 'description', content: 'User page' }
    ],
})


const route = useRoute()
const user = await $fetch(`/api/users?id=${route.params.id}`)
</script>
