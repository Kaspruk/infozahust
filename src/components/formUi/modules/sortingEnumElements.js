export default function (arr) {
    let newArr = [];

    arr.forEach((p) => {
        if(!p.parentId) newArr = [...newArr, ...getSameElById(p, arr)]
    });

    return newArr;
}

function getSameElById(el, arr, newArr = [], level = 1){
    el.level = level;
    (~newArr.indexOf(el)) || newArr.push(el);
    level++;
    arr.forEach((a) => {
        if(el.id === a.parentId) {
            a.level = level;
            newArr.push(a);
            const hasChild = arr.find(el => el.parentId === a.id);
            if(hasChild) getSameElById(a, arr, newArr, level)
        }
    });
    return newArr;
}

