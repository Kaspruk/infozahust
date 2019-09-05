export default function(arr) {
    const rules = {};
    arr.forEach((field) => {
        const validation = field.validation;
        rules[field.code] = validation ? getRule(validation) : []
    });
    return rules;
}

function getRule(validation) {
    let ruleArr = [];
    for(let key in validation){
        if(validation[key]){
            switch(key){
                case 'required':
                    ruleArr.push({ required: true, message: 'Це поле являється обов\'язковим', trigger: 'blur' });
                    break;
                case 'email':
                    ruleArr.push({ type: 'email', message: 'Некоректна почта', trigger: 'blur' });
                    break;
                case 'pattern':
                    ruleArr.push({ pattern: validation[key], message: 'Некорректний номер телефону', trigger: 'blur' });
                    break;
                case 'min':
                    ruleArr.push({ type: 'number', min: validation[key], message: `Значення має бути не меньшим ніж ${validation[key]}`, trigger: 'change' });
                    break;
                case 'max':
                    ruleArr.push({ type: 'number', max: validation[key], message: `Значення має бути не меньшим ніж ${validation[key]}`, trigger: 'change' });
                    break;
                case 'minLength':
                    ruleArr.push({ min: validation[key], message: `Потрібно не меньше ніж ${validation[key]} символів`, trigger: 'blur' });
                    break;
                case 'maxLength':
                    ruleArr.push({ max: validation[key], message: `Потрібно не більше ніж ${validation[key]} символів`, trigger: 'blur' });
                    break;
            }
        }
    }
    return ruleArr;
}
