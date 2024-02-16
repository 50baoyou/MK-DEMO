<template>
    <span>{{ value }}</span>
    <ul class="rate">
        <li
            v-for="index in max"
            :key="index"
            @mouseenter="$emit('update:value', index)"
            @mouseleave="$emit('update:value', initValue)"
            @click="initValue = index"
        >
            <i :class="rateClass(index)"></i>
        </li>
    </ul>
</template>

<script>
    import '@/assets/iconfont/iconfont.css';

    export default {
        name: 'ElRate',
        props: {
            max: {
                type: Number,
                default: 5,
            },
            value: {
                type: Number,
                default: 0,
            },
        },
        emits: ['update:value'],
        methods: {
            rateClass(index) {
                return {
                    iconfont: true,
                    'icon-xingxing': true,
                    'i--active': this.value >= index,
                };
            },
        },
        data() {
            return {
                initValue: this.value,
            };
        },
    };
</script>

<style scoped>
    .rate {
        display: flex;
        list-style: none;
    }

    .rate i {
        font-size: 30px;
        color: #ccc;
    }

    .i--active {
        color: indianred !important;
    }
</style>
