const mongoose = require('mongoose');
const Product = require('./models/Product');
const connectDB = require('./config/db');

const initialProducts = [
  {
    id: 1,
    name: "Men's Green Shirt",
    category: "men",
    image: "/images/products/men-1.jpg",
    new_price: 85.0,
    old_price: 120.5,
    description: "High quality green shirt for men."
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    category: "women",
    image: "/images/products/women-1.jpg",
    new_price: 95.0,
    old_price: 150.5,
    description: "Beautiful summer dress for women."
  },
  {
    id: 3,
    name: "Kid's Blue T-Shirt",
    category: "kid",
    image: "/images/products/kid-1.jpg",
    new_price: 45.0,
    old_price: 80.5,
    description: "Comfortable blue t-shirt for kids."
  },
];

const importData = async () => {
  try {
    await connectDB();
    
    await Product.deleteMany({});
    
    await Product.insertMany(initialProducts);
    
    console.log('Data imported successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
importData(); 