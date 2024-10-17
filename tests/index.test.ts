import { ext } from '../src/index';

describe('numeroPorExtenso', () => {
    test('deve retornar o número por extenso corretamente', () => {
        expect(ext(0)).toBe("Zero");
    });
});

describe('numeroPorExtenso', () => {
    test('deve retornar o null se fora do escopo', () => {
        expect(ext(-1)).toBe("");
    });
    test('deve retornar o null se fora do escopo', () => {
        expect(ext(10)).toBe("");
    });
});