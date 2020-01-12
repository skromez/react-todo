import React, { Component } from 'react';
import './App.scss';
import TodoList from '../TodoList';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';

class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    filtered: '',
    status: 'all'
  };

  createTodoItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.maxId++
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  search(items, filtered) {
    if (filtered.length === 0) {
      return items;
    }

    return items.filter((item, i, arr) => {
      return item.label.toLowerCase().indexOf(filtered.toLowerCase()) > -1;
    });
  }

  onChange = (evt) => {
    this.setState({
      filtered: evt.target.value
    });
    console.log(this.state.filtered);
  };

  onFilterChange = (status) => {
    this.setState({status})
  };

  filter(items, status) {
    switch (status) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }


  render() {

    const { todoData, filtered, status } = this.state;

    const visibleItems = this.filter(this.search(todoData, filtered), status);
    const doneCount = todoData.filter((el) => el.done).length;

    const todoCount = todoData.length - doneCount;
    return (
      <div className="app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="wrapper">
          <SearchPanel onChange={this.onChange} />
          <ItemStatusFilter status={status} onFilterChange={this.onFilterChange} />
        </div>
        <TodoList
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
          todos={visibleItems}
          onDeleted={this.deleteItem}
        />
        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }
};

export default App;
