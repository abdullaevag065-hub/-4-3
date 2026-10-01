// 1

const usersJSON = `[
    {
        "id": 1,
        "name": "Иван",
        "age": 25,
        "address": {
            "city": "Бишкек",
            "street": "Чуй"
        },
        "hobbies": [
            "футбол",
            "музыка",
            "программирование"
        ]
    },
    {
        "id": 2,
        "name": "Анна",
        "age": 22,
        "address": {
            "city": "Ош",
            "street": "Ленина"
        },
        "hobbies": [
            "рисование",
            "чтение",
            "путешествия"
        ]
    }
]`;

function renderUsers(users) {
    const app = document.getElementById("app");

    app.innerHTML = "";

    users.forEach(user => {
        const userBlock = document.createElement("div");

        userBlock.innerHTML = `
            <h2>${user.name}</h2>
            <p>ID: ${user.id}</p>
            <p>Возраст: ${user.age}</p>
            <p>Город: ${user.address.city}</p>
            <p>Улица: ${user.address.street}</p>

            <h3>Хобби:</h3>

            <ul>
                ${user.hobbies
                    .map(hobby => `<li>${hobby}</li>`)
                    .join("")}
            </ul>

            <hr>
        `;

        app.appendChild(userBlock);
    });
}




try {
    const users = JSON.parse(usersJSON);

    renderUsers(users);

    console.log("Задание 1 выполнено успешно");

} catch (error) {
    console.error("Ошибка в задании 1:", error);
}


// 2

const usersWithOrdersJSON = `[
    {
        "id": 1,
        "name": "Иван",
        "age": 25,
        "address": {
            "city": "Бишкек",
            "street": "Чуй"
        },
        "hobbies": [
            "футбол",
            "музыка"
        ],
        "orders": [
            {
                "id": 101,
                "items": [
                    {
                        "name": "Ноутбук",
                        "price": 50000
                    },
                    {
                        "name": "Мышь",
                        "price": 1500
                    }
                ]
            },
            {
                "id": 102,
                "items": [
                    {
                        "name": "Клавиатура",
                        "price": 3000
                    },
                    {
                        "name": "Наушники",
                        "price": 4500
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "Анна",
        "age": 22,
        "address": {
            "city": "Ош",
            "street": "Ленина"
        },
        "hobbies": [
            "рисование",
            "чтение"
        ],
        "orders": [
            {
                "id": 103,
                "items": [
                    {
                        "name": "Телефон",
                        "price": 35000
                    },
                    {
                        "name": "Чехол",
                        "price": 1000
                    }
                ]
            }
        ]
    }
]`;

function renderUsersWithOrders(users) {
    const app = document.getElementById("app");

    app.innerHTML = "";

    users.forEach(user => {
        const userBlock = document.createElement("div");

        let ordersHTML = "";

        user.orders.forEach(order => {

            const total = order.items.reduce((sum, item) => {
                return sum + item.price;
            }, 0);

            const itemsHTML = order.items
                .map(item => {
                    return `
                        <li>
                            ${item.name} — ${item.price} сом
                        </li>
                    `;
                })
                .join("");

            ordersHTML += `
                <div>
                    <h4>Заказ №${order.id}</h4>

                    <ul>
                        ${itemsHTML}
                    </ul>

                    <p>
                        <strong>
                            Сумма заказа: ${total} сом
                        </strong>
                    </p>
                </div>
            `;
        });

        userBlock.innerHTML = `
            <h2>${user.name}</h2>

            <p>Возраст: ${user.age}</p>
            <p>Город: ${user.address.city}</p>

            <h3>Заказы:</h3>

            ${ordersHTML}

            <hr>
        `;

        app.appendChild(userBlock);
    });
}




try {
    const users = JSON.parse(usersWithOrdersJSON);

    renderUsersWithOrders(users);

    console.log("Задание 2 выполнено успешно");

} catch (error) {
    console.error("Ошибка в задании 2:", error);
}


// 3

const brokenJSON = `[
    {
        "id": 1,
        "name": "Иван,
        "age": 25
    }
]`;


try {
    const users = JSON.parse(brokenJSON);

    renderUsers(users);

} catch (error) {

    console.error("Ошибка в JSON:", error);

    const app = document.getElementById("app");

    app.innerHTML = `
        <h2>Не удалось загрузить пользователей</h2>
    `;
}
