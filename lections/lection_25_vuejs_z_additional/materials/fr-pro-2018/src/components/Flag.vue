<template>
    <div class="flag">
        {{ someValue }}
        <hr />
        <slot />
    </div>
</template>

<script>
export default {
    name: 'Flag',
    props: {
        someValue: Array
    }
}
</script>

<style>

</style>
