import * as React from "react"
import { useForm } from "react-hook-form"
import './App.css'

export default function App() {
  const { register, handleSubmit, setFocus } = useForm()
  const onSubmit = (data) => console.log(data)



  React.useEffect(() => {
    setFocus("firstName")
  }, [setFocus])


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>setFocus Example</h2>
      <input {...register("firstName")} placeholder="First Name" />
      <button type="submit" style={{marginLeft:"100px"}}>Submit</button>
    </form>
  )
}