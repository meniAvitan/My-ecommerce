import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'meni',
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('admin', 8),
            isAdmin: true,
        },

        {
            name: 'john',
            email: 'user.example@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
      
    ],
    products : [
        {
         
            name: 'Nike slim shirts',
            category: 'Shirts',
            image: '/images/product-1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 2.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
           
            name: 'Adidas Fit shirts',
            category: 'Shirts',
            image: '/images/product-2.jpg',
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
          
            name: 'Lacost Free shirts',
            category: 'Shirts',
            image: '/images/product-3.jpg',
            price: 20,
            countInStock: 5,
            brand: 'Lacost',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
          
            name: 'Nike slim Pant',
            category: 'Pants',
            image: '/images/product-4.jpg',
            price: 80,
            countInStock: 50,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {
          
            name: 'Puma slim pant',
            category: 'Pants',
            image: '/images/product-5.jpg',
            price: 110,
            countInStock: 0,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            
            name: 'Adidas slim Pant',
            category: 'Pants',
            image: '/images/product-6.jpg',
            price: 131,
            countInStock: 3,
            brand: 'Adidas',
            rating: 5.0,
            numReviews: 25,
            description: 'high quality product',
        },
      
    ],
};

export default data;