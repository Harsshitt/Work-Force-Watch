'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const listEmployee = () => {

  const [employee, setEmployee] = useState([]);

  const employeeDetail = async (values) => {
    console.log(values);

    const res = await fetch("http://localhost:5000/employee/getall")
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setEmployee(data);

  }
  useEffect(() => {
    employeeDetail()
  }, [])

  const displayemployee = () => {
    return (
      <div>
        {
          employee.map((emp) => {
            return (
              <div>
                <p>{emp.name}</p>
                <p>{emp.email}</p>
                <p>{emp.designation}</p>
                <p>{emp.shift}</p>
              </div>
            )

          })
        }
      </div>
    )
  }
  return (
    <div>
      <h1 className='flex  justify-center text-xl  my-10'>User Details</h1>
      {
        displayemployee()
      }
      <div className='my-10'>
        <Link href={"/user/list-employee"} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add  Task
        </Link>
      </div>
    </div>
  )
}

export default listEmployee;