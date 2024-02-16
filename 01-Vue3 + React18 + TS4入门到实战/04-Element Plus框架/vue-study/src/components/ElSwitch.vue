<template>
    <div :class="switchClass" @click="$emit('update:state', !state)">
        <div class="switch__handle"></div>
    </div>
</template>

<script>
    export default {
        name: 'ElSwitch',
        props: {
            state: {
                type: Boolean,
                default: false,
            },
        },
        emits: ['update:state'],
        computed: {
            switchClass() {
                return {
                    switch: true,
                    'switch--closed': !this.state,
                };
            },
        },
    };
</script>

<style scoped>
    .switch {
        width: 28px;
        height: 16px;
        border-radius: 100px;
        background: #1890ff;
        cursor: pointer;
    }
    .switch--closed {
        background: rgba(0, 0, 0, 0.25);
    }
    .switch--closed .switch__handle {
        left: 14px;
    }
    .switch__handle {
        width: 12px;
        height: 12px;
        background: white;
        border-radius: 50%;
        position: relative;
        left: 2px;
        top: 2px;
        transition: 0.2s;
    }
</style>
