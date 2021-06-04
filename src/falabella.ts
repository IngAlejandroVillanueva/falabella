function falabella(number: number) {

    if (number <= 0) {
        return 'Error: The argument must be a number greater than zero'
    }

    return (
        (divisible(number, 3) && divisible(number, 5) && 'Integraciones') ||

        (divisible(number, 3) && 'Falabella') ||

        (divisible(number, 5) && 'IT') ||

        number
    )
}

function divisible(dividend: number, divider: number) {
    return dividend % divider === 0
}

export default falabella