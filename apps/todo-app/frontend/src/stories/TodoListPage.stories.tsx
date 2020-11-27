import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import TodoList from '../pages/TodoListPage';
import Todo from '../models/Todo';

const todos: Todo[] = [
    {
        id: "1",
        title: "Do the dishes",
        completed: false
    },
    {
        id: "2",
        title: "Read the react documentation",
        completed: false
    },
    {
        id: "3",
        title: "Master storybook",
        completed: true
    }
]

const Template: Story<any> = (args) => <TodoList {...args} />;

export const EmptyList = Template.bind({});
EmptyList.args = {
    todos: []
}

export const LoadingList = Template.bind({});
LoadingList.args = {
    loading: true,
    todos
}

export const List = Template.bind({});
List.args = {
    todos
}

export default {
    title: 'Apps/Todo/EmptyList',
    component: TodoList,
} as Meta;
