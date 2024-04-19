'use client';
import React from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";


const Contact = () => {
  

  const contactForm = useFormik({
    initialValues: {
      email: '',
      fname: '',
      lname:"",
      number: '',
      message: '',
      company:""
    },
    onSubmit: (values) => {
      console.log(values);
      
      // sending request to client

      fetch('http://localhost:5000/contact/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      .then((response) => {
        console.log(response.status);
        if(response.status === 200){
          toast.success('contact added successfully');
          
        }else{
          toast.error('contact add failed')
        }
      }).catch((err) => {
        console.log(err);
        toast.error('contact add failed')
      });

    }
  })

  return (
    <div className="max-w-2xl mx-auto my-10">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Add Contact</h1>
      <form onSubmit={contactForm.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={contactForm.values.firstName}
            onChange={contactForm.handleChange}
            
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            value={contactForm.values.lastName}
            onChange={contactForm.handleChange}
            
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={contactForm.values.email}
            onChange={contactForm.handleChange}
        
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            id="number"
            name="number"
            type="number"
            autoComplete="tel"
            required
            value={contactForm.values.phone}
            onChange={contactForm.handleChange}
            
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="tel"
            required
            value={contactForm.values.company}
            onChange={contactForm.handleChange}
            
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            type="text"
            autoComplete="tel"
            required
            value={contactForm.values.message}
            onChange={contactForm.handleChange}
            
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
