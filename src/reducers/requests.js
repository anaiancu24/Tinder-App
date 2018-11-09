const initialState=[
  {
  id: 1,
  date: 20181001,
  from: 'Sjaak',
  subject: 'Request for rent',
  body: 'I would like to rent your appartment, from 12 June until 25 June. Can I?'
  },
  {
  id: 2,
  date: 20181012,
  from: 'Piet',
  subject: 'Request for rent',
  body: 'I would like to rent your appartment next week. Can I?'
  },
  {
  id: 3,
  date: 20181025,
  from: 'Kees',
  subject: 'Request for rent',
  body: 'In week 52 and 53, I would like to rent your appartment. Can I?'
  }
]

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  default:
    return state
  }
}

export default reducer
