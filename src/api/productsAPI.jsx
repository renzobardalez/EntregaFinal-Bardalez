export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Item 1', description: 'Descripción del Item 1', image: 'Polo_gris.jpg', alt:'Grey t-shirt' },
                { id: 2, name: 'Item 2', description: 'Descripción del Item 2', image: 'Top_guinda.jpeg', alt:'Red top' }
            ]);
        }, 2000);
    });
};