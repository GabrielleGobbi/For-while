describe('showSecondHighestValue', () => {
    test('deve retornar o segundo maior valor em array comum', () => {
        // Preparação dos dados
        const entrada = [10, 25, 3, 18];
        const esperado = 18;
        const resultado = showSecondHighestValue(entrada);
        expect(resultado).toBe(esperado);
        expect(resultado).toBeLessThan(25);
        expect(resultado).toBeGreaterThan(10);
    });

    test('deve lidar com números repetidos no topo', () => {
        const entrada = [5, 5, 5, 3];
        const esperado = 3;
        const resultado = showSecondHighestValue(entrada);
        expect(resultado).toBe(esperado);
    });

    test('array com dois elementos deve retornar o menor', () => {
        const entrada = [7, 10];
        const resultado = showSecondHighestValue(entrada);
        expect(resultado).toBe(7);
    });

    test('array grande deve retornar valor correto', () => {
        const entrada = [50, 100, 99, 80];
        const resultado = showSecondHighestValue(entrada);
        expect(resultado).toBe(99);
        expect(entrada).toHaveLength(4);
    });
});
function showSecondHighestValue(entrada: number[]) {
    throw new Error("Function not implemented.");
}

