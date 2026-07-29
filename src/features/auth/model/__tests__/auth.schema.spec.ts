import { authSchema } from "@/features/auth/model/auth.schema";


describe('auth schema', () => {
  test('should parse with correct data', async () => {
    const mockData = {
      email: 'test@mail.com',
      password: 'mock-password',
    }

    const result = authSchema.safeParse(mockData);

    expect(result).toEqual({data: mockData, success: true})
  })

  test('should parse with incorrect email format', async () => {
    const mockData = {
      email: 'test-mail.com',
      password: 'mock-password',
    }
    const result = authSchema.safeParse(mockData);

    expect(result).toEqual(expect.objectContaining({success: false}))
  })

  test('should parse with empty string email', async () => {
    const mockData = {
      email: '',
      password: 'mock-password',
    }
    const result = authSchema.safeParse(mockData);

    expect(result).toEqual(expect.objectContaining({success: false}))
  })

  test('should parse with missed password', async () => {
    const mockData = {
      email: 'test@mail.com',
      password: '',
    }
    const result = authSchema.safeParse(mockData);

    expect(result).toEqual(expect.objectContaining({success: false}))
  })
})