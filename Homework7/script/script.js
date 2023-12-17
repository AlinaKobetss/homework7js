// 1. Создайте новый элемент, добавьте ему текст и добавьте его после элемента с id "existingElement".
let elem = document.querySelector('#existingElement');

let block = document.createElement('div');
block.innerText = 'New div';
elem.after(block);

// 2. Создайте новый элемент , добавьте ему текст и вставьте его внутрь элемента с id "parentElement".

let elem1 = document.querySelector('#parentElement');

let block1 = document.createElement('div');
block1.innerText = 'New elem2';
elem1.prepend(block1);

// 3.Удалите элемент с классом "removeMe".

let removed= document.querySelector('.removeMe');
removed.remove();

//4. Создать множество карточек с товарами (на основе массива с объектами. У объекта свойства title, unit_price, count)

// let products = [
//         {
//             title: 'IPhone 12',
//             unit_price: '850',
//             count: '12'
//         },
//         {
//             title: 'IPhone 13',
//             unit_price: '900',
//             count: '8'
//         },
//         {
//             title: 'IPhone 14',
//             unit_price: '950',
//             count: '10'
//         },
//     ];

// for(let i=0; i<products.length; i++){
//     let card = document.createElement('div');
//     let card_prod1 = document.createElement('p');
//     card_prod1.innerText = products[i].title;
//     let card_prod2 = document.createElement('p');
//     card_prod2.innerText = products[i].unit_price;
//     let card_prod3 = document.createElement('p');
//     card_prod3.innerText = products[i].count;

//     card.style.padding = "10px";
//     card.style.border = "1px solid black";
//     card.style.margin = "4px";
//     card.style.width = "90px";

//     card.append(card_prod1, card_prod2, card_prod3);
//     document.body.append(card);
// }


//5.Написать скрипт, который выводит карточки с товарами в интерфейс (на основе массива с объектами. У объекта свойства title, unit_price, count), а внизу выводится итоговая сумма товаров и их количество.

let products = [
    {
        title: 'IPhone 12',
        unit_price: 850,
        count: 12
    },
    {
        title: 'IPhone 13',
        unit_price: 900,
        count: 8
    },
    {
        title: 'IPhone 14',
        unit_price: 950,
        count: 10
    },
];

let prod_sum = 0;
let prod_count = 0;

for(let i=0; i<products.length; i++){
let card = document.createElement('div');
let card_prod1 = document.createElement('p');
card_prod1.innerText = products[i].title;
let card_prod2 = document.createElement('p');
card_prod2.innerText = products[i].unit_price;
let card_prod3 = document.createElement('p');
card_prod3.innerText = products[i].count;

card.style.padding = "10px";
card.style.border = "1px solid black";
card.style.margin = "4px";
card.style.width = "90px";

card.append(card_prod1, card_prod2, card_prod3);
document.body.append(card);

prod_sum = prod_sum + products[i].unit_price;
prod_count = prod_count + products[i].count;
}
let cards_sum = document.createElement('p');
cards_sum.innerText = `The total sum is ${prod_sum} and the products count is ${prod_count}`;
document.body.append(cards_sum);

