const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const sort = req.query.sort || '';
    const category = req.query.category || '';
    
    const skip = (page - 1) * limit;
    
    const filter = {};
    if (category) {
      filter.category = category;
    }
    
    let sortOption = {};
    switch (sort) {
      case 'price-asc':
        sortOption = { new_price: 1 };
        break;
      case 'price-desc':
        sortOption = { new_price: -1 };
        break;
      case 'newest':
        sortOption = { created_at: -1 };
        break;
      case 'popular': 
        sortOption = { id: -1 }; 
        break;
      default:
        sortOption = { id: 1 };
    }
    
    const totalItems = await Product.countDocuments(filter);
    
    const products = await Product.find(filter)
      .sort(sortOption)
      .skip(skip)
      .limit(limit);
      
    res.status(200).json({
      products,
      totalItems,
      currentPage: page,
      totalPages: Math.ceil(totalItems / limit)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findOne({ id: productId });
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRandomProducts = async (req, res) => {
  try {
    const count = parseInt(req.query.count) || 8;
    
    const products = await Product.aggregate([
      { $sample: { size: count } }
    ]);
    
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    
    const skip = (page - 1) * limit;
    
    const totalItems = await Product.countDocuments({ category });
    
    const products = await Product.find({ category })
      .skip(skip)
      .limit(limit);
      
    res.status(200).json({
      products,
      totalItems,
      currentPage: page,
      totalPages: Math.ceil(totalItems / limit)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updates = req.body;
    
    updates.updated_at = Date.now();
    
    const updatedProduct = await Product.findOneAndUpdate(
      { id: productId }, 
      updates, 
      { new: true, runValidators: true }
    );
    
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findOneAndDelete({ id: productId });
    
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
