import { generateId } from './index'

const STORAGE_KEY = 'todos-mpx'

// fetch todos from storage
export function fetch () {
  let todos
  try {
    todos = wx.getStorageSync(STORAGE_KEY)
  } catch (error) { }
  todos = todos || []
  todos.forEach(todo => {
    todo.id = generateId()
  })
  return todos
}

// save todos to storage
export function save (todos) {
  wx.setStorage({
    key: STORAGE_KEY,
    data: todos
  })
}
