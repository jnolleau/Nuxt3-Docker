<template>
    <NuxtLayout name="default" :h1="h1">
        <o-carousel>
            <o-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section class="ex-slide" :style="{ 'background-color': carousel.color }">
                    <h1>{{ carousel.text }}</h1>
                </section>
            </o-carousel-item>
        </o-carousel>
    </NuxtLayout>
</template>

<script setup>

const h1 = 'index page';

const carousels = [
    { text: 'Slide 1', color: '#445e00' },
    { text: 'Slide 2', color: '#006724' },
    { text: 'Slide 3', color: '#b60000' },
    { text: 'Slide 4', color: '#f4c300' },
    { text: 'Slide 5', color: '#005c98' }
]

definePageMeta({
    layout: false,
})
useHead({
    title: 'index page',
    // or, instead:
    // titleTemplate: (title) => `My App - ${title}`,
    meta: [
        { name: 'description', content: 'The index page.' }
    ]
})

</script>
