// 1. Из скольких частей состоит основной цикл?
    // из 2, условие и тело

// 2. Какое количество уровней вложенности могут иметь циклы?
    // бесконечно...?

// 3. Если switch находится внутри функции, какая инструкция может использоваться для выхода из него?
    // с помощью break  или continue

// 4. Можно ли пропускать части for? Что получится, если написать for(;;)? 
    // Можно, если эти части были заданы в глобальной области или после тела, но для цикла нужно условие.
    // Например, можно записать цикл следующим образом
    let x = ['cat', 'dog', 'mouse'];
    let i = 0;
    for (; i < x.length;){
        console.log(x[i]);
        i++
    }

// 5. Самостоятельно разберитесь, как работает цикл while и приведите два примера кода с его использованием.
let number = 30;
while (number <= 90) {
    console.log(number);
    number += 30;
}

let u = 30;
while (u <= 100) {
    console.log(u);
    u+=20;
}

// 6. Как можно принудительно остановить выполнение цикла
    // используя метод break

// 7. При помощи цикла for выведите чётные числа от 2 до 10.
    for (i = 0; i <= 10; i++){
        if (i % 2 == 0) {
            console.log(i);
        }
    }
// 8. Если тело цикла состоит лишь из одной инструкции, мы можем опустить фигурные скобки {…}?
    // да

// 9. Что выведет цикл?
for (let i = 0; i < 3; i++) { 
    console.log(i);
}                     // 0, 1, 2 (решала не смотря в реальный консоль)

// 10. Оба цикла выводят в консоль одинаковые значения или нет?

/* let i = 0;
while (++i < 5) console.log(i); */

// и

/* let i = 0;
while (i++ < 5) console.log(i); */

    //  разное... это связано с тем, как работают префиксные и постфиксные инкременты 