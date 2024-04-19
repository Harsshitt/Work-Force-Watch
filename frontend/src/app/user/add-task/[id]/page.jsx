'use client';
import { useFormik } from 'formik';
import { Akshar } from 'next/font/google';
import React from 'react'
import toast from 'react-hot-toast';

const AddTask = () => {

    const taskForm = useFormik({
        initialValues: {
          employee: '',
          name: '', 
          category: '',
          endDate: '',
          description: ""
        },
        onSubmit: (values) => {
          console.log(values);
          
          // sending request to client
    
          fetch('http://localhost:5000/task/add', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-Type' : 'application/json'
            }
          })
          .then((response) => {
            console.log(response.status);
            if(response.status === 200){
              toast.success('task added successfully');
            
            }else{
              toast.error('task added failed')
            }
          }).catch((err) => {
            console.log(err);
            toast.error('task added failed')
          });
    
        }
      })

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* text - start */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
        Add Task
      </h2>
     
    </div>
    {/* text - end */}
    {/* form - start */}
    <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2" onSubmit={taskForm.handleSubmit}>
    
      <div className="sm:col-span-2">
        <label
          htmlFor="company"
          className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
        >
          Name*
        </label>
        <input
        type='text'
          name="name"
          id='name'
          value={taskForm.values.name}
          onChange={taskForm.handleChange}
          className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="email"
          className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
        >
          Category*
        </label>
        <input
          name="category"
          id='category'
          value={taskForm.values.category}
          onChange={taskForm.handleChange}
          className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="subject"
          className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
        >
          Employee*
        </label>
        <input
          name="employee"
          id='employee'
          value={taskForm.values.employee}
          onChange={taskForm.handleChange}
          className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="subject"
          className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
        >
          End Date*
        </label>
        <input
        type='date'
          name="endDate"
          id='endDate'
          value={taskForm.values.endDate}
          onChange={taskForm.handleChange}
          className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
        >
          Description*
        </label>
        <textarea
          name="description"
          id='description'
          value={taskForm.values.description}
          onChange={taskForm.handleChange}
          className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          defaultValue={""}
        />
      </div>
      <div className="flex items-center justify-between sm:col-span-2">
        <button type='submit' className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
          Add Task
        </button>
       
      </div>
         </form>
    {/* form - end */}
  </div>
</div>

    </div>
  )
}

export default AddTask
