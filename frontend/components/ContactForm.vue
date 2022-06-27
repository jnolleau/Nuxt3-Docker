<template>
    <section class="contact-container">
        <div class="card">
            <form @submit.prevent="submit" class="card-content">
            <o-field label="Nom:">
                <o-input type="text" v-model="name" icon-right="user"></o-input>
            </o-field>
            <o-field label="Email:">
                <o-input type="email" v-model="email" icon-right="envelope"></o-input>
            </o-field>
            <o-field label="Votre message:">
                <o-input type="textarea" v-model="message" rows="5" cols="30"></o-input>
            </o-field>
            <div class="tar">
                <o-button @click="submit" variant="primary" icon-left="paper-plane">envoyer</o-button>
            </div>
            <!-- <button label="envoyer" class="w-full">Envoyer</button> -->
            <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
        </form>
                </div>
    </section>
</template>

<script setup>
const files = ref([]);
const name = ref('');
const email = ref('');
const message = ref('');

const handleFileSelection = (event) => {
    let uploadedFiles = event.target.files;

    for (let i = 0; i < uploadedFiles.length; i++) {
        files.value.push(uploadedFiles[i]);
    }
}

async function submit() {
    // // TO SEND FILES, USE FormData
    // let formData = new FormData();
    // formData.append('name', name.value);
    // formData.append('email', email.value);
    // formData.append('message', message.value);
    // for (let i = 0; i < files.value.length; i++) {
    //     formData.append('images[' + i + ']', files.value[i]);
    // }

    const data = { name: name.value, email: email.value, message: message.value };
    console.log(data)
    // let res = await $fetch('/api/email', {
    //     method: 'POST',
    //     body: data
    // });
    // console.log(res)
}
</script>