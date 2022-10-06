<script setup lang="ts">
const credentials = useFirebaseUser();
definePageMeta({
    middleware: "auth"
});

console.log(credentials.value)

</script>
<template>
    <div>
        <client-only>
            <pre>
                {{ credentials }}
            </pre>
        </client-only>
        <button @click="signOutUser()">Sign Out</button>
    </div>
</template>