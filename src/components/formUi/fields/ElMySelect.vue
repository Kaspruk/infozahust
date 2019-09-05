<template>
    <el-select placeholder="Виберіть ваш варіант" v-model="localValue" value="">
        <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.title"
                :value="item.id"
                :class="`pl-${item.level}`">
        </el-option>
    </el-select>
</template>

<script>
import sortingEnumEl from '../helpers/sortingEnumElements.js'

export default {
    name: "ElMySelect",
    props: {
        field: {
            type: Object,
            default: null
        },
        value: {}
    },
    data: () => ({
        options: [],
    }),
    computed: {
        localValue: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit('input', value)
            }
        }
    },
    created(){
        const selectElements = this.$store.getters[`get${this.field.enumType}`];
        this.options = this.field.enumType === 'JobPositionValue' ? sortingEnumEl(selectElements) : selectElements;
    },
}
</script>

<style scoped>
    .pl-1{
        padding-left: 20px;
    }
    .pl-2{
        padding-left: 30px;
    }
    .pl-3{
        padding-left: 40px;
    }
</style>
