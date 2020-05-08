import { isLowerCase } from "./lower-case.validator";

//preparação
describe('A função isLowerCase', ()=>{
    it('deve confirmar quando recebe um texto em caixa baixa', ()=>{
        const valor = 'mario';
        const resultado = isLowerCase(valor); 
        //avaliação
        expect(resultado).toBeTruthy(); //o que se espera que aconteça
        
    });

    it('deve validar quando o valor enviado não for caixa baixa', ()=>{
        expect(isLowerCase('Mario')).toBeFalsy();
    });
});