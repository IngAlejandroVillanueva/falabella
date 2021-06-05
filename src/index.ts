import falabella from './falabella'

function falabellaIterations(iterations: number): void {
    for (let i = 1; i <= iterations; i++) {
        console.log(falabella(i))
    }
}

falabellaIterations(100)