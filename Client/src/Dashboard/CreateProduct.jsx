
import React, { useState } from 'react';
import { Form, Row, Button } from 'react-bootstrap';
import { Authcontext } from '../Context/AuthContext';
import { useContext } from 'react';
import axios from 'axios';

const CreateProduct = () => {
  const [newproduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: 0,
    items_left: 0,
    brand: '',
    image: null, // Holds the file object
  });

  const { baseurl } = useContext(Authcontext)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      image: file,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', newproduct.name);
    formData.append('category', newproduct.category);
    formData.append('price', newproduct.price);
    formData.append('items_left', newproduct.items_left);
    formData.append('brand', newproduct.brand);
    formData.append('image', newproduct.image);
    try {
      const response = await axios.post(`${baseurl}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      // Handle success, e.g., reset form or redirect
    } catch (error) {
      console.error('Error uploading data:', error);
      // Handle error, e.g., display an error message
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Row className="mb-3">
        {/* Other form fields */}
        <Form.Group controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            name="name"
            onChange={handleInputChange}
            value={newproduct.name}
          />

        </Form.Group>

        <Form.Group controlId="formGridEmail">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Enter category" name='category' onChange={handleInputChange} value={newproduct.category} />
        </Form.Group>

        <Form.Group controlId="formGridEmail">
          <Form.Label>price</Form.Label>
          <Form.Control type="number" placeholder="Enter Price" name='price' onChange={handleInputChange} value={newproduct.price} />
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Label>items left</Form.Label>
          <Form.Control type="number" placeholder="items left" name='items_left' onChange={handleInputChange} value={newproduct.items_left} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Brand</Form.Label>
          <Form.Control placeholder="Enter your Brand" name='brand' onChange={handleInputChange} value={newproduct.brand} />
        </Form.Group>


        {/* Image upload field */}
        <Form.Group controlId="formGridImage">
          <Form.Label>Upload Product Photo</Form.Label>
          <Form.Control type="file" name="image" onChange={handleImageChange} />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CreateProduct;

