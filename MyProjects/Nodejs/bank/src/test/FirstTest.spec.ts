import { User } from '../model/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Matheus'

  expect(user.name).toEqual('Matheus')
})
