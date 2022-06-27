<template>
  <div class="main-container">
    <ul>
      <li>
        <NuxtLink to="/">Home page</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/users">Users</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/oruga">Oruga</NuxtLink>
      </li>
    </ul>
    <!-- <Menubar :model="items" /> -->

    <h1>{{ capitalizedH1 }}</h1>
    <slot />
    <div>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { capitalize } from 'vue';

// Pass h1 using props
// const props = defineProps(['h1'])
// const capitalizedH1 = computed(() => capitalize(props.h1))
// console.log(props.h1)

// Pass h1 using route path
const route = useRoute();
const capitalizedH1 = route.path == '/' ? "Index page" : capitalize(route.path.substring(1))


useHead({
  titleTemplate: (titleChunk) => {
    // h1.value = titleChunk ? capitalize(titleChunk) : 'Title';
    return titleChunk ? `${titleChunk} - My App` : 'My App';
  }
})

</script>