import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface TodoState {
    username: string;
    todos: [{ checked: boolean, text: string }];
}

const initialState: TodoState = { username: '', todos: [{ checked: false, text: '' }] }

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        incrementUser: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        incrementTodoList: (state, action: PayloadAction<string>) => {
            state.todos.push({ checked: false, text: action.payload })
        }
        
    }

})

export const { incrementUser, incrementTodoList } = todoSlice.actions

export default todoSlice.reducer