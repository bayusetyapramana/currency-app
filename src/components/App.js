import React, { Component } from 'react';
import { Container, Segment, Card,
  Divider, Select, Form, Button } from 'semantic-ui-react';
import CurrencyInput from './CurrencyInput';
import CurrencyList from './CurrencyList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCurrency } from '../actions/currencyActions';


  class App extends Component {
    static propTypes = {
      amount: PropTypes.number,
      currency: PropTypes.array,
      setCurrencies: PropTypes.func,
      latestCurrencies: PropTypes.array,
      setAmount: PropTypes.func,
      addCurrency: PropTypes.func,
      removeCurrency: PropTypes.func
    };

    componentDidMount() {
      this.props.fetchCurrency();
    }

    render() {
      const {
        currency,
        latestCurrencies,
        amount,
        setAmount,
        addCurrency,
        removeCurrency
      } = this.props;
      console.log('ini data', this.props.currencies);
      const listCurrency = [
        {text: 'IDR', value: 14000 },
        {text: 'GBN', Value: 8000 },
        {text: 'JPY', value: 9000 }
      ]
      const listCurrencies = this.props.currencies.rates;
      console.log('ini data dua', listCurrencies);
      return (
        <Container>
          <Segment padded>
            <div>
              <Divider horizontal />
            </div>
            <div>
              <CurrencyInput
              amount={amount}
              setAmount={setAmount}
              />
            </div>
            <div>
              <Divider horizontal>List Of Currency</Divider>
              <CurrencyList
                amount={amount}
                currency={currency}
                removeCurrency={removeCurrency} />
            </div>
            <Card centered>
            <Form>
              <Form.Field
                control={Select}
                options={listCurrency}
                placeholder='Add More Currency'
                search
                searchInput={{ id: 'form-select-control-gender' }}
                />
                <div className='ui two buttons'>
                <Button color='blue' >
                (+) Add More Currency
                </Button>
                </div>
            </Form>
            </Card>
            </Segment>

        </Container>
      );
    }
  }

  function mapStateToProps(state) {
    return {
        currencies : state.currencyStore.currencies,
    }
  }
  export default connect(mapStateToProps, {fetchCurrency}) (App);
