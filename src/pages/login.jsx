import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Login() {
  const [formData, setFormData] = useState({ name: '', email: '', })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value, })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address')
      return
    }

    console.log('Form submitted:', formData)
    localStorage.setItem('user', JSON.stringify(formData))
  }
  return (
    <div className='flex-column margin-5vw'>
    <Form onSubmit={handleSubmit} className='flex-column'>
      <Form.Label> Name: <Form.Control  type="text" name="name" value={formData.name} onChange={handleChange} required /></Form.Label>
      <br />
      <Form.Label> Email: <Form.Control  type="email" name="email" value={formData.email} onChange={handleChange} required /> </Form.Label>
      <br />
      <div className=''>
      <Button type="submit" className='margin-half-vw'>Submit</Button>
      <Link to={'/cart'}><Button type="submit" className='margin-half-vw'>Go To Cart</Button></Link>
      </div>
    </Form>
    </div>
  )
}
