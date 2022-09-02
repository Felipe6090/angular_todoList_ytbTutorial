import { Component, OnInit } from '@angular/core';

import { Todo } from '../../models/Todos';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
    todosList: Todo[];

    inputTodo: string = '';

    constructor() {}

    ngOnInit(): void {
        this.todosList = [
            {
                content: 'First Todo',
                completed: false,
            },
            {
                content: 'Second Todo',
                completed: true,
            },
            {
                content: 'Third Todo',
                completed: false,
            },
        ];
    }

    toggleDone(id: number): void {
        this.todosList.map((todo, i) => {
            if (i === id) todo.completed = !todo.completed;

            return todo;
        });
    }

    deleteTodo(id: number): void {
        this.todosList = this.todosList.filter((todo, i) => i !== id);
    }

    addTodo(): void {
        this.todosList.push({
            content: this.inputTodo,
            completed: false,
        });

        this.inputTodo = '';
    }
}
