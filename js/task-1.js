// Отримуємо список всіх категорій (елементів li.item)
const categoriesList = document.querySelectorAll('ul#categories li.item');

// Виводимо кількість категорій
console.log(`Кількість категорій: ${categoriesList.length}`);

// Для кожної категорії виводимо текст заголовка та кількість елементів у ній
categoriesList.forEach((category) => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItemsCount = category.querySelectorAll('li').length;
    console.log(`Категорія: ${categoryName}, Кількість елементів: ${categoryItemsCount}`);
});
