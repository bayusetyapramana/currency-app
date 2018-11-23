const defaultState = {
  currencies: [],
  loading: false
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_CURRENCY_FULFILLED': {
      return {
        ...state,
        currencies: action.payload.data,
        loading: false,
        errors: {}
      }
    }

    case 'FETCH_CURRENCY_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {}
      }
    }

    case 'FETCH_CURRENCY_REJECTED': {
      return {
        ...state,
        loading: false,
        errors: { global: action.payload.message }
      }
    }

    default:
      return state;
  }
}
