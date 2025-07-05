// Функция для имитации задержки
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Функция для получения данных с задержкой
const fetchData = async (url) => {
    await delay(2000); // Задержка 2 секунды
    
    // Имитация API-запроса
    if (url === 'users') {
        return [
            { id: 1, name: 'John Doe', email: 'john@example.com' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
        ];
    } else if (url.startsWith('user/')) {
        const userId = url.split('/')[1];
        return {
            id: userId,
            name: 'John Doe',
            email: 'john@example.com',
            details: {
                age: 30,
                city: 'New York'
            }
        };
    }
    throw new Error('Invalid URL');
};

// Цепочка Promise с обработкой ошибок
fetchData('users')
    .then(users => {
        console.log('Получен список пользователей:', users);
        return fetchData(`user/${users[0].id}`);
    })
    .then(userDetails => {
        console.log('Детали первого пользователя:', userDetails);
    })
    .catch(error => {
        console.error('Произошла ошибка:', error.message);
    }); 