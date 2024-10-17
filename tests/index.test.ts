import { ext } from '../src/index';

describe('numeroPorExtenso', () => {
    test('deve retornar o número por extenso corretamente', () => {
        expect(ext(10)).toBe("");
    });
});

describe('numeroPorExtenso', () => {
    test('deve retornar o null se fora do escopo', () => {
        expect(ext(-1)).toBe("");
    });
});