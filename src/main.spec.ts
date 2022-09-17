import { getHello } from './main'

describe('test main moduke', () => {
	it('should be return hello world', () => {
		const sut = getHello

		expect(sut()).toBe('hello world')
	})
})
