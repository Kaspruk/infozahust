import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        dynamicForm: {
            code: 'Person',
            attributes: [
                {
                    title: 'Ім\'я',
                    code: 'firstName',
                    validation: {
                        required: true
                    }
                },
                {
                    title: 'Прізвище',
                    code: 'lastName',
                    validation: {
                        required: true
                    }
                },
                {
                    title: 'Вік',
                    code: 'age',
                    type: 'int',
                },
                {
                    title: 'Email',
                    code: 'email',
                    validation: {
                        email: true
                    }
                },
                {
                    title: 'Важливість',
                    code: 'importance',
                    type: 'enum',
                    enumType: 'ImportanceValue',
                },
                {
                    title: 'Посада',
                    code: 'jobPosition',
                    type: 'enum',
                    enumType: 'JobPositionValue',
                },
                {
                    title: 'Дата виходу на роботу',
                    code: 'startJobAt',
                    type: 'date',
                },
                {
                    title: 'Телефон',
                    code: 'phone',
                    multiple: true,
                    validation: {
                        pattern: '^\\+38 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}$'
                    }
                }
            ]
        },
        importanceValue: [
            { id: 1, title: 'Важливо' },
            { id: 2, title: 'Нормально' },
            { id: 3, title: 'Дуже важливо' },
        ],
        jobPositionValue: [
            { id: 1, title: 'Аграрний сектор' },
            { id: 2, title: 'Тракторист', parentId: 1 },
            { id: 7, title: 'Проджект менеджер', parentId: 6 },
            { id: 5, title: 'Програміст', parentId: 4 },
            { id: 8, title: 'Офіс менеджер', parentId: 6 },
            { id: 3, title: 'Фермер', parentId: 1 },
            { id: 4, title: 'IT' },
            { id: 6, title: 'Менеджмент', parentId: 4 },
        ],
        formData: {},
    },
    getters: {
      getDynamicForm(state) {
          return state.dynamicForm
      },
      getImportanceValue(state) {
          return state.importanceValue
      },
      getJobPositionValue(state) {
          return state.jobPositionValue
      },
      getFormData(state) {
          return state.formData
      },
    },
    mutations: {
        setFormData(state, payload) {
            state.formData = payload
        }
    },
    actions: {}
});
