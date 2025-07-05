// Функция для создания задержки
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

// Основная функция с использованием async/await
async function main() {
    try {
        // Получаем список пользователей
        const users = await fetchData('users');
        console.log('Получен список пользователей:', users);
        
        // Добавляем задержку между запросами
        await delay(1000);
        
        // Получаем детали первого пользователя
        const userDetails = await fetchData(`user/${users[0].id}`);
        console.log('Детали первого пользователя:', userDetails);
    } catch (error) {
        console.error('Произошла ошибка:', error.message);
    }
}

// Запускаем основную функцию
main(); 