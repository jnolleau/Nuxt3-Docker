<template>
  <NuxtLayout name="custom">
    <h1>{{ user.name }}</h1>
    <div>Hello ! My id is {{ user.id }}</div>
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()
const user = await $fetch(`/api/users?id=${route.params.id}`)
</script>
