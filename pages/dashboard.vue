<script setup lang="ts">
const credentials = useFirebaseUser();
definePageMeta({
    middleware: "auth"
})
</script>
<template>
    <div>
        <client-only>
            <pre>
                {{ credentials }}
            </pre>
        </client-only>
    </div>
</template>