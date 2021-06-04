import falabella from './falabella'

describe('falabella', () => {

    it('should print an error message if it receive a number equal to or less than zero', () => {
        const expected = 'Error: The argument must be a number greater than zero'
        const result = falabella(0)

        expect(expected).toBe(result)
    })

    it('should print Falabella if it receive 3', () => {
        const expected = 'Falabella'
        const result = falabella(3)

        expect(expected).toBe(result)
    })

    it('should print Falabella if it receive a multiple of 3', () => {
        const expected = 'Falabella'
        const result = falabella(6)

        expect(expected).toBe(result)
    })

    it('should print IT if it receive 5', () => {
        const expected = 'IT'
        const result = falabella(5)

        expect(expected).toBe(result)
    })

    it('should print IT if it receive a multiple of 5', () => {
        const expected = 'IT'
        const result = falabella(10)

        expect(expected).toBe(result)
    })

    it('should print Integraciones if it receive a multiple of 3 and 5', () => {
        const expected = 'Integraciones'
        const result = falabella(15)

        expect(expected).toBe(result)
    })

})
