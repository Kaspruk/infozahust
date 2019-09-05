<template>
    <el-form
            v-if="fields"
            ref="form"
            :model="formData"
            :validate-on-rule-change="false"
            label-position="left"
            label-width="170px">
        <el-row v-for="(field, index) in fields.attributes" :key="index">

            <template v-if="!field.multiple">
                <el-form-item
                        :label="field.title"
                        :prop="field.code"
                        :rules="rules[field.code]">
                    <component
                        :is="getComponentName(field.type).name"
                        v-model="formData[field.code]"
                        :field="field"
                        :type="getComponentName(field.type).type">
                    </component>
                </el-form-item>
            </template>

            <transition-group v-else name="el-zoom-in-top" mode="out-in" >
                <el-row type="flex" justify="end"  v-for="(element, index) in formData[field.code]" :key="index">
                    <el-col>
                        <el-form-item
                                :label="`${!index ? field.title : ''}`"
                                :prop="`${field.code}.${index}`"
                                :rules="rules[field.code]">
                            <component
                                :is="getComponentName(field.type).name"
                                v-model="formData[field.code][index]">
                            </component>
                        </el-form-item>
                    </el-col>
                    <el-button v-if="index === 0" type="success" @click="addNewItem(field.code)">+</el-button>
                    <el-button v-else type="danger" @click="deleteNewItem(field.code, index)">-</el-button>
                </el-row>
            </transition-group>

        </el-row>
        <el-button type="success" @click="submitForm()">Відправити</el-button>
    </el-form>
</template>

<script>
import ElMySelect from './fields/ElMySelect.vue'

import createValidateRules from './modules/createValidateRules'

export default {
    name: "FormUi",
    components: { ElMySelect },
    props: {
        fields: {
            type: Object,
            default: null,
        }
    },
    data(){
        return {
            formData: {},
            rules: {}
        }
    },
    methods: {
        createFormDataKeys() {
            this.fields.attributes.forEach((f) => {
                if (f.multiple) this.$set(this.formData, f.code, ['']);
                else this.$set(this.formData, f.code, '')
            })
        },
        getComponentName(type) {
            switch (type) {
                case 'date':
                    return { name: 'el-date-picker', type: 'date' };
                case 'enum':
                    return { name: 'el-my-select' };
                case 'int':
                    return { name: 'el-input-number', type: 'number' };
                case 'float':
                    return { name: 'el-input-number', type: 'number' };
                case 'boolean':
                    return { name: 'el-checkbox', type: 'checkbox' };
                default:
                    return { name: 'el-input', type: 'text' };
            }
        },
        submitForm() {
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    this.$store.commit('setFormData', this.formData);
                    this.$router.push({ name: 'result' })
                } else {
                    return false;
                }
            });
        },
        createRules() {
            this.rules = createValidateRules(this.fields.attributes);
        },
        addNewItem(key) {
            this.formData[key] = [...this.formData[key], ''];
        },
        deleteNewItem(key, ind) {
            this.formData[key].splice(ind, 1);
        },
    },
    created() {
        if(this.fields) {
            this.createFormDataKeys();
            this.createRules()
        }
    }
}
</script>

<style scoped>
    .el-form .el-row{
        margin-bottom: 20px;
    }
    .el-form .el-row .el-form-item{
        margin-bottom: 0;
    }
    .el-form .el-row .el-button{
        margin-left: 15px;
    }
</style>
