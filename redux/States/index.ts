import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface TodoState {
    username: string;
    todos: [{ id: number; checked: boolean, text: string }];
}

let TodoId = 0

const initialState: TodoState = { username: '', todos: [{ id: TodoId, checked: false, text: '' }] }

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        incrementUser: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        incrementTodoList: (state, action: PayloadAction<string>) => {
            state.todos.push({ id: TodoId++, checked: false, text: action.payload })
        },
        incrementremoveTodo: (state, action: PayloadAction<number>) => {
            const todoId = state.todos.find(todo => todo.id === action.payload)

            state.todos.splice(state.todos.indexOf(todoId!), 1)

        },
    }
})

export const { incrementUser, incrementTodoList, incrementremoveTodo } = todoSlice.actions

export default todoSlice.reducer