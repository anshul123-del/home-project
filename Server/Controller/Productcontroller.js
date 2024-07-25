const Product = require("../Models/product");
// const initialdata = require("../initialdata/initialdata");
const uploadOnCloudinary = require("../Utils/Imageupload")
const productcontroller = {
  initialdata: async (req, res) => {
    try {
      // await Product.deleteMany({});
      // await Product.insertMany(initialdata.data);
      const data = await Product.find();
      res.status(200).json({
        data: data,
        message: "data fetched successfullly",  
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        
      });
    }
  },

  addproduct: async (req, res) => {
    try {
      const { name, price, category, items_left, brand } = req.body;

      if (!(name && price && category && items_left && brand)) {
        return res.status(400).json({
          message: "Fill in all fields",
        });
      }
      const imageUrl = req.file?.path;
      if (!imageUrl) {
        return res.status(400).json({
          message: "Image not provided",
        });
      }
      const image = await uploadOnCloudinary(imageUrl);
      const newProduct = await Product.create({
        name: name,
        image: image.url,
        price: price,
        category: category,
        slug: name,
        items_left: items_left,
        brand: brand,
      });

      const savedProduct = await newProduct.save();

      res.status(201).json({
        data: savedProduct,
        message: "Product added successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  oneproduct: async (req, res) => {
    try {
      const { id } = req.params;
      const single = await Product.findOne({ _id: id });
      res.status(200).json({
        data: single,
        message: "data got",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error,
      });
    }
  },

  deleproduct: async (req, res) => {
    try {
      const id = req.body;
      const delted = await Product.deleteOne({ _id: id });
      res.status(200).json({
        message: "data_deleted",
        data: delted,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "server side Error",
      });
    }
  },

  searchproduct: async (req, res) => {
    try {
      const { keyword } = req.params;
      const result = await Product.find({
        $or: [
          { name: { $regex: keyword, $options: "i" } },
          { brand: { $regex: keyword, $options: "i" } },
        ],
      });
      res.status(200).json(result
      );
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  },
};

module.exports = productcontroller;
