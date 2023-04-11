import axios from "axios"
import { useState, useEffect } from "react"
import InputForm from "../components/InputForm"
import TodoList from "../components/TodoList"

const url = "https://63f757b2e8a73b486af5c406.mockapi.io/todos"

const Home = () => {
  const [todos, setTodos] = useState<Todotype[]>([])
  const getTodos = async () => {
    try {
      const { data } = await axios.get(url)
      setTodos(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getTodos()
  }, [])

  return (
    <>
      <InputForm />
      <TodoList todos={todos} />
    </>
  )
}

export default Home
