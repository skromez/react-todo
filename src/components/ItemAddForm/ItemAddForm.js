import React, { Component } from 'react';
import './ItemAddForm.scss';

class ItemAddForm extends Component {

  render() {
    const { addItem } = this.props;
    return (
      <div className="item-add-form">
        <button onClick={() => addItem('Hello World')} type="button" className="btn item-add-button btn-outline-secondary">
          Add Item
        </button>
      </div>
    );
  }
}

export default ItemAddForm;
