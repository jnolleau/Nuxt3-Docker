<template>
    <div>
        <o-button variant="primary">Primary</o-button>
        <o-button variant="link">Link</o-button>
        <o-button variant="success">Success</o-button>
        <o-button variant="danger">Danger</o-button>
        <o-button variant="warning">Warning</o-button>
        <o-button variant="info">Info</o-button>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "default",
})
useHead({
    title: 'Oruga page',
    meta: [
        { name: 'description', content: 'The Oruga test page.' }
    ]
})

</script>