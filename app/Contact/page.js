"use client"
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject:'',
        message: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/Contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message); // Show the welcome message from the server
            } else {
                // Handle error cases
                console.error('Server response error');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value,
      });
  };

  return (
    <div>
      <h2 className='text-2xl font-bold text-center p-4'>Let's work together</h2>
        <form className='max-w-[600px] m-auto' onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-2'>
            <input
              className='border shadow-lg p-3'
              type="text"
              id="name"
              placeholder='Name'
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              className='border shadow-lg p-3'
              type="email"
              id="email"
              placeholder='Email'
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <input
            className='border shadow-lg p-3 w-full my-2'
            id="subject"
            name="subject"
            placeholder='Subject'
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
          <textarea
            className='border shadow-lg p-3 w-full'
            cols="30"
            rows="10"
            id="message"
            placeholder='Message'
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required></textarea>
          <button className='border shadow-lg p-3 w-full mt-2 bg-green-700' type="submit">Submit</button>
        </form>
    </div>
  );
};

export default Contact;



