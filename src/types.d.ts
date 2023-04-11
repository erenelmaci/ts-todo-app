interface Todotype {
  id: string | number
  task: string
  idDone: boolean
}
interface ITodoList {
  todos: Todotype[]
}
