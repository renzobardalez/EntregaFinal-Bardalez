export const getProducts = (category = null) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const products =[
                { id: 1, name: 'Item 1', category: 1, description: 'Descripción del Item 1', image: 'Polo_gris.jpg', alt:'Grey t-shirt' },
                { id: 2, name: 'Item 2', category: 2, description: 'Descripción del Item 2', image: 'Top_guinda.jpeg', alt:'Red top' },
                { id: 3, name: 'Item 2', category: 2, description: 'Descripción del Item 2', image: 'Top_guinda.jpeg', alt:'Red top' },
                { id: 4, name: 'Item 2', category: 2, description: 'Descripción del Item 2', image: 'Top_guinda.jpeg', alt:'Red top' },
                { id: 5, name: 'Item 2', category: 2, description: 'Descripción del Item 2', image: 'Top_guinda.jpeg', alt:'Red top' },
                { id: 6, name: 'Item 2', category: 2, description: 'Descripción del Item 2', image: 'Top_guinda.jpeg', alt:'Red top' },
                { id: 7, name: 'Item 2', category: 2, description: 'Descripción del Item 2', image: 'Top_guinda.jpeg', alt:'Red top' },
                { id: 8, name: 'Item 2', category: 2, description: 'Descripción del Item 2', image: 'Top_guinda.jpeg', alt:'Red top' },
                { id: 9, name: 'Item 2', category: 2, description: 'Descripción del Item 2', image: 'Top_guinda.jpeg', alt:'Red top' },
                { id: 10, name: 'Item 2', category: 2, description: 'Descripción del Item 2', image: 'Top_guinda.jpeg', alt:'Red top' },
                { id: 11, name: 'Item 2', category: 2, description: 'Descripción del Item 2', image: 'Top_guinda.jpeg', alt:'Red top' },
                { id: 12, name: 'Item 2', category: 2, description: 'Descripción del Item 2', image: 'Top_guinda.jpeg', alt:'Red top' }
            ];
            const filteredProducts = category ? products.filter(products => products.category === parseInt(category)) : products;
            resolve(filteredProducts);
            console.log(category);
        }, 2000);
    });
};