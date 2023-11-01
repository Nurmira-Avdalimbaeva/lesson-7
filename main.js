            // 1) На forEach:
            // - Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел

// const arraynumber = [1, 2, 3, 4, 5];
// const newarray = [];
// arraynumber.forEach(function(number) {
//     newarray.push(number * number);
// });
// console.log(newarray);

            // - Дан массив с числами. Найдите сумму этих чисел.

// const arrayofnumbers = [1, 2, 3, 4, 5];
// const summa = arrayofnumbers.reduce(function(pervy, vtoroy) {
//   return pervy + vtoroy;
// }, 0);
// console.log(summa); 



            // 2) На map:
            // - Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.

// let arrchisel = [1, 2, 3, 4, 5];
// let newarray = arrchisel.map(function(numbers) {
//   return numbers * numbers;
// });
// console.log(newarray);



            // 3) На reverse:
            // - Дан массив с днями недели ['Понедельник', 'Вторник'...]. 
            // Сделайте так, что он начинался с воскресенья и заканчивался понедельником

// let dninedeli = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// dninedeli = dninedeli.reverse();
// console.log(dninedeli);



            // 4) На split и join:
            // - C помощью метода join превратить массив [3, 2, 1] в строку "3 больше, чем 2 больше, чем 1"

// const array = [3, 2, 1];
// const strr = array.map(function(number) {
//   return number + " больше, чем ";
// });
// const result = strr.join("");
// console.log(result); 

             // - Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

// const stroka = 'я учу javascript!';
// const arrstrok = stroka.split(' ');
// console.log(arrstrok); 

            // - В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

// const data = '2025-12-31';
// const element = data.split('-');
// const newdata = element[2] + '.' + element[1] + '.' + element[0];
// console.log(newdata); 



            // 5) На filter:
            // - Дан массив с числами. Оставьте в нем только отрицательные числа. В отдельную переменную положите количество отрицательных чисел в этом массиве.
    
// const numbers = [1, -2, -3, -4, 4,5]
// let str = numbers.filter((numbers) => numbers <0);
// console.log(str)
// let strka = numbers.filter ((numbers) => numbers>0);
// console.log(strka)

 
            // - Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

// let stroka = ["ruchka", "penal", "karandash", "tetrad", "telefony"];
// let filterstroka = stroka.filter((stroka) => stroka.length>5) 

// console.log(filterstroka)




