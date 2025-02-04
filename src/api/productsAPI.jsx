export const getProducts = (category = null) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const products =[
                { id: 1, name: 'Grey Shirt', category: 2, description: 'Cotton grey oversize shirt', price: 19.00, image: 'Polo_gris.jpg', alt:'Grey shirt women', stock: 5},
                { id: 3, name: 'Black Shirt', category: 2, description: 'Cotton black oversize shirt',price: 19.00, image: 'Polo_negro.jpeg', alt:'Black shirt women', stock: 6},
                { id: 5, name: 'Cherry Top', category: 2, description: 'Sythetic cherry top', price: 29.00,image: 'Top_guinda.jpeg', alt:'Cherry top', stock: 6},
                { id: 2, name: 'Black Top', category: 2, description: 'Sythetic black top', price: 29.00,image: 'Top_negro.jpg', alt:'Black top', stock: 8},
                { id: 4, name: 'Green Top', category: 2, description: 'Sythetic green top', price: 29.00,image: 'Tops_verdes.jpeg', alt:'Green tops', stock: 5},
                { id: 8, name: 'Black Pant', category: 1, description: 'Cotton black pant for daily use', price: 39.00,image: 'black_pant_men.jpg', alt:'Black pant men', stock: 9},
                { id: 9, name: 'Black Shirt', category: 1, description: 'Cotton black shirt', price: 19.00,image: 'black_shirt_men.jpg', alt:'Black shirt for men', stock: 5},
                { id: 10, name: 'Black Tank', category: 1, description: 'Synthetic tank top for men', price: 19.00,image: 'black_tank_2_men.jpg', alt:'Black tank for men', stock: 4},
                { id: 11, name: 'Black Tank Top', category: 2, description: 'Synthetic tank top + short', price: 39.00,image: 'black_top_women.jpg', alt:'Black tank for women', stock: 4},
                { id: 12, name: 'Black Pant', category: 2, description: 'Microfiber black pant', price: 19.00,image: 'blakc_pant_women.jpg', alt:'Black pant for women', stock: 9},
                { id: 13, name: 'Blue Outfit', category: 2, description: 'Cotton outfit for daily use', price: 49.00,image: 'conjunto_azul_women.jpg', alt:'Blue outfit for women', stock: 12},
                { id: 14, name: 'Pink Shirt', category: 1, description: 'Synthetic pink shirt', price: 19.00,image: 'pink_shirt_men.jpg', alt:'Pink shirt for men', stock: 10},
                { id: 15, name: 'Ramon Dino Shirt', category: 1, description: 'Ramon Dino Gym Shirt', price: 19.00,image: 'ramon_dino.jpg', alt:'Black Ramon Dino shirt for men', stock: 15}
            ];
            const filteredProducts = category ? products.filter(products => products.category === parseInt(category)) : products;
            resolve(filteredProducts);
            console.log(category);
        }, 2000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const products =[
                { id: 1, name: 'Grey Shirt', category: 2, description: 'Cotton grey oversize shirt', price: 19.00, image: 'Polo_gris.jpg', alt:'Grey shirt women' },
                { id: 3, name: 'Black Shirt', category: 2, description: 'Cotton black oversize shirt',price: 19.00, image: 'Polo_negro.jpeg', alt:'Black shirt women' },
                { id: 5, name: 'Cherry Top', category: 2, description: 'Sythetic cherry top', price: 29.00,image: 'Top_guinda.jpeg', alt:'Cherry top' },
                { id: 2, name: 'Black Top', category: 2, description: 'Sythetic black top', price: 29.00,image: 'Top_negro.jpg', alt:'Black top' },
                { id: 4, name: 'Green Top', category: 2, description: 'Sythetic green top', price: 29.00,image: 'Tops_verdes.jpeg', alt:'Green tops' },
                { id: 8, name: 'Black Pant', category: 1, description: 'Cotton black pant for daily use', price: 39.00,image: 'black_pant_men.jpg', alt:'Black pant men' },
                { id: 9, name: 'Black Shirt', category: 1, description: 'Cotton black shirt', price: 19.00,image: 'black_shirt_men.jpg', alt:'Black shirt for men' },
                { id: 10, name: 'Black Tank', category: 1, description: 'Synthetic tank top for men', price: 19.00,image: 'black_tank_2_men.jpg', alt:'Black tank for men' },
                { id: 11, name: 'Black Tank Top', category: 2, description: 'Synthetic tank top + short', price: 39.00,image: 'black_top_women.jpg', alt:'Black tank for women' },
                { id: 12, name: 'Black Pant', category: 2, description: 'Microfiber black pant', price: 19.00,image: 'blakc_pant_women.jpg', alt:'Black pant for women' },
                { id: 13, name: 'Blue Outfit', category: 2, description: 'Cotton outfit for daily use', price: 49.00,image: 'conjunto_azul_women.jpg', alt:'Blue outfit for women' },
                { id: 14, name: 'Pink Shirt', category: 1, description: 'Synthetic pink shirt', price: 19.00,image: 'pink_shirt_men.jpg', alt:'Pink shirt for men' },
                { id: 15, name: 'Ramon Dino Shirt', category: 1, description: 'Ramon Dino Gym Shirt', price: 19.00,image: 'ramon_dino.jpg', alt:'Black Ramon Dino shirt for men' }
            ];
            const product = products.find(product => product.id === parseInt(id));
            resolve(product);
        }, 1000);
    });
};