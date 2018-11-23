import React, { Component } from 'react';
import { Input, Label, Card
 } from 'semantic-ui-react';

class CurrencyInput extends Component {
  handleNumberChange = (e) => {
    const number = parseInt(e.target.value  || 0, 10);
    if (isNaN(number)) {
      return;
    }
    this.props.setAmount(number);
  }
  render() {
    const { amount } = this.props;
    return (
      <div>
      <Card centered>
        <Card.Content style={{color: '#3742fa'}}>
          <Card.Header style={{color: '#3742fa'}}>USD</Card.Header>
          <Card.Meta>USD - United State Dollars</Card.Meta>
          <Card.Description>
          <Input labelPosition='right' type='number' placeholder='Amount'>
              <Label basic style={{color: '#3742fa'}}>US$</Label>
              <input
              style={{color: '#3742fa'}}
              value={amount}
              onChange={this.handleNumberChange}
              />
              <Label style={{color: '#3742fa'}}>.00</Label>
            </Input>
          </Card.Description>
        </Card.Content>
      </Card>
      </div>
    );
  };
}

export default CurrencyInput;
