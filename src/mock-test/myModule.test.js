const mockOther = jest.fn();
jest.mock('./other', () => mockOther);
const { sayHello } = require('./myModule');

describe('say hello', () => {

  it('should return "abc"', () => {
    mockOther.mockReturnValue('abc');
    expect(sayHello()).toEqual('abc');
  });

  it('should return 123', () => {
    mockOther.mockReturnValue(123);
    expect(sayHello()).toEqual(123);
  });

});