const { getAllUsers } = require('./actions')

describe('getAllUsers', () => {
  beforeEach(() => (global.fetch = jest.fn()))

  afterEach(() => jest.restoreAllMocks())

  it('fetches successfully data from API', async () => {
    const mockData = [{ id: 1, name: 'John Doe', email: 'johndoe@doe.it' }]
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    })

    const result = await getAllUsers()

    expect(result).toEqual(mockData)
    expect(global.fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users'
    )
  })
})
