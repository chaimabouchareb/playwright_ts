// utils/test-data.ts

export const users = {
  standard: {
    username: 'standard_user',
    password: 'secret_sauce'
  },
  locked: {
    username: 'locked_out_user',
    password: 'secret_sauce'
  },
  problem: {
    username: 'problem_user',
    password: 'secret_sauce'
  }
};

export const checkoutData = {
  validUser: {
    firstName: 'Chaima',
    lastName: 'QA',
    postalCode: '60000'
  },
  emptyFields: {
    firstName: '',
    lastName: '',
    postalCode: ''
  }
};