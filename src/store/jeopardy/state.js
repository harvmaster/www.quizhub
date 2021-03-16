export default function () {
  return {
    user: {
      username: '',
      uuid: ''
    },
    games: [
      {
        id: '01',
        name: 'test',
        topics: [
          {
            id: '001',
            name: 'test1',
            questions: [
              { id: '0001', value: 100, question: 'the sound a horse makes', answer: 'what is ney' },
              { id: '0002', value: 200, question: 'the sound a horse makes', answer: 'what is ney' },
              { id: '0003', value: 300, question: 'the sound a horse makes', answer: 'what is ney' },
              { id: '0004', value: 400, question: 'the sound a horse makes', answer: 'what is ney' },
              { id: '0005', value: 500, question: 'the sound a horse makes', answer: 'what is ney' }
            ]
          }
        ]
      }
    ]
  }
}
