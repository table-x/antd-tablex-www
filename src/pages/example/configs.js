export default [
  {
    title: 'ID',
    type: 'text',
    keyword: 'userId',
    predicates: ['$eq', '$gt', '$lt', '$lte', '$gte'],
    defaultPredicate: '$eq',
    defaultValue: ''
  },
  {
    title: 'name',
    type: 'text',
    keyword: 'name',
    predicates: ['$eq', '$like', '$notLike'],
    defaultPredicate: '$eq',
    defaultValue: ''
  },
  {
    title: 'mobile',
    type: 'text',
    keyword: 'mobile',
    predicates: ['$eq', '$like', '$notLike'],
    defaultPredicate: '$eq',
    defaultValue: ''
  },
  {
    title: 'createdAt',
    type: 'date',
    keyword: 'createdAt',
    predicates: ['$gt', '$lt', '$lte', '$gte'],
    defaultPredicate: '$lt',
    customProps: {
      showTime: true
    }
  },
  {
    title: 'email',
    type: 'text',
    keyword: 'email',
    predicates: ['$eq', '$like', '$notLike'],
    defaultPredicate: '$eq',
    defaultValue: ''
  },
  {
    title: 'city',
    type: 'text',
    keyword: 'city',
    predicates: ['$eq', '$ne', '$like', '$notLike'],
    defaultPredicate: '$eq',
    defaultValue: null
  },
  {
    title: 'amount',
    type: 'text',
    keyword: 'amount',
    predicates: ['$eq', '$gt', '$lt', '$lte', '$gte'],
    defaultPredicate: '$gt',
    defaultValue: null
  },
  {
    title: 'permission',
    type: 'select',
    keyword: 'permission',
    predicates: ['$eq'],
    customProps: {
      selectOptions: [
        {
          value: 'admin',
          name: 'admin'
        },
        {
          value: 'normal',
          name: 'normal'
        },
        {
          value: 'rich',
          name: 'rich'
        }
      ]
    },
    defaultPredicate: '$eq'
  }
];
