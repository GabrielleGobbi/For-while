describe('mediaNotas', () => {
    test('caso [8, 7, 9], [5, 6, 5], [3, 4, 2]', () => {
        const esperado = [
            "Aluno 1: Passou",
            "Aluno 2: Recuperação",
            "Aluno 3: Reprovado"
        ];
        const resultado = mediaNotas([8, 7, 9], [5, 6, 5], [3, 4, 2]);
        expect(resultado).toEqual(esperado);
        expect(resultado).toHaveLength(3);
        expect(resultado[0]).toContain("Passou");
    });
    test('caso [9, 8, 7], [6, 5, 4], [2, 3, 2]', () => {
        const esperado = [
            "Aluno 1: Passou",
            "Aluno 2: Recuperação",
            "Aluno 3: Reprovado"
        ];
        const resultado = mediaNotas([9, 8, 7], [6, 5, 4], [2, 3, 2]);
        expect(resultado).toEqual(esperado);
        expect(resultado[2]).toBe("Aluno 3: Reprovado");
    });
    test('caso [7, 7, 7], [4, 4, 4], [10, 9, 8]', () => {
        const esperado = [
            "Aluno 1: Passou",
            "Aluno 2: Recuperação",
            "Aluno 3: Passou"
        ];
        const resultado = mediaNotas([7, 7, 7], [4, 4, 4], [10, 9, 8]);
        expect(resultado).toEqual(esperado);
        expect(resultado[1]).toContain("Recuperação");
        expect(resultado[2]).toMatch(/Passou$/);
    });
});
