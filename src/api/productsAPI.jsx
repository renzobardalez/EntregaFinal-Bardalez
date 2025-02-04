export const getProducts = (category = null) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const products =[
                { id: 1, name: 'Grey Shirt', category: 2, description: 'Descripción del Item 1', price: 19.00, image: 'Polo_gris.jpg', alt:'Grey shirt women' },
                { id: 3, name: 'Black Shirt', category: 2, description: 'Descripción del Item 2',price: 19.00, image: 'Polo_negro.jpeg', alt:'Black shirt women' },
                { id: 5, name: 'Cherry Top', category: 2, description: 'Descripción del Item 2', price: 29.00,image: 'Top_guinda.jpeg', alt:'Cherry top' },
                { id: 2, name: 'Black Top', category: 2, description: 'Descripción del Item 2', price: 29.00,image: 'Top_negro.jpg', alt:'Black top' },
                { id: 4, name: 'Green Top', category: 2, description: 'Descripción del Item 2', price: 29.00,image: 'Tops_verdes.jpeg', alt:'Green tops' },
                { id: 8, name: 'Black Pant', category: 1, description: 'Descripción del Item 2', price: 39.00,image: 'black_pant_men.jpg', alt:'Black pant men' },
                { id: 9, name: 'Black Shirt', category: 1, description: 'Descripción del Item 2', price: 19.00,image: 'black_shirt_men.jpg', alt:'Black shirt for men' },
                { id: 10, name: 'Black Tank', category: 1, description: 'Descripción del Item 2', price: 19.00,image: 'black_tank_2_men.jpg', alt:'Black tank for men' },
            ];
            const filteredProducts = category ? products.filter(products => products.category === parseInt(category)) : products;
            resolve(filteredProducts);
            console.log(category);
        }, 2000);
    });
};