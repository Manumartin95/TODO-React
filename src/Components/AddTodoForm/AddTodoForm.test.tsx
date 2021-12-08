import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {fireEvent, render, RenderResult} from '@testing-library/react'
import { AddTodoForm } from "./AddTodoForm";


describe('<AddTodoForm /> Tests', () => {
    
    let component: RenderResult;
    const mockAddTodo = jest.fn()
    
    beforeEach(() => {
        component = render(<AddTodoForm addTodo={mockAddTodo}/>)
    })

    test('renders content', () =>{
        component.getByText('Add Todo');
    })
    
    test('addTodo should be called 1 time when button is pressed', () => {
        const button = component.getByRole('button')
        fireEvent.click(button)
    
        expect(mockAddTodo).toHaveBeenCalledTimes(1);
    })

})
