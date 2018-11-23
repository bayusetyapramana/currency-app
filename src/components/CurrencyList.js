import React, { Component } from 'react';
import { Card, Button, Image } from 'semantic-ui-react';
import configCurrencies from '../config/currencies.json';

class CurrencyList extends Component {
  renderlistCurrencies = () => {
    const { currency, amount, removeCurrency } = this.props;
    const convertAmount = rate => (rate*amount).toFixed(2);
    return currency.map((item, index) =>
      <Card>
        <Card.Content>
        <Image floated='right' style={{fontSize: 18}}>
          {convertAmount(item.rate)}</Image>
          <Card.Header>{item.id}</Card.Header>
            <Card.Meta>
  						{`${item.id} - ${configCurrencies.description[item.id]}`}</Card.Meta>
            <Card.Description>
  						{`1 USD = ${item.id} ${item.rate} ` }
            </Card.Description>
        </Card.Content>
        <Card.Content>
        <div className='ui two buttons'>
        <Button basic color='red' onClick={()=> removeCurrency(item.id)} >
        Delete
        </Button>
        </div>
        </Card.Content>
      </Card>
  );


};
render() {
  return (
    <div class="ui two column centered grid">
    <div class="column">
      <Card.Group centered>
    {this.renderlistCurrencies()}
    </Card.Group>
    </div>
    </div>
  );
};
}

export default CurrencyList;
