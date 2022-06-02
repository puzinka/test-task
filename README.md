# Тестовое задание от NewGen Vision.

## Условие задачи:

На сайте [niPage](https://www.unipage.net/) есть подборка языковых курсов. У каждого курса есть цена, которая является диапазоном.

Например:

+ от 100 до 200₽;
+ от 500₽;
+ до 400₽.

## Цель:

Необходимо реализовать функцию на JavaScript для фильтрации списка курсов, чтобы выдались только подходящие по цене.

## Входные данные:

```
    // Список курсов
    let courses = [
        { name: "Courses in England", prices: [0, 100] }, 
        { name: "Courses in Germany", prices: [500, null] }, 
        { name: "Courses in Italy", prices: [100, 200] }, 
        { name: "Courses in Russia", prices: [null, 400] },
        { name: "Courses in China", prices: [50, 250] },
        { name: "Courses in USA", prices: [200, null] },
        { name: "Courses in Kazakhstan", prices: [56, 324] },
        { name: "Courses in France", prices: [null, null] },
    ];

    // Варианты цен (фильтры), которые ищет пользователь
    let requiredRange1 = [null, 200];
    let requiredRange2 = [100, 350];
    let requiredRange3 = [200, null];
```

## Реализация:

Данный код осуществляет вариант фильтрации курсов, при котором выдаются все варианты, цена которых пересекается с выбранным диапазоном (фильтром).

Файл **tests.js** можно использовать для автоматического тестирования. Для этого необходимо вызвать функцию **solutionTests()** в консоли браузера.

В файле **filter.js** находится функция-предикат, отвечающая за фильтрацию курсов.

Файл **solution.js** отвечает за вывод подходящих курсов для каждого варианта фильтра.

## Ссылка на GitHub Pages

https://puzinka.github.io/githubio/test-task/src/index.html