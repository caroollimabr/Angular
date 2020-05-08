import { TokenService } from "./token.service";

//SMOKE TEST: verifica o funcionamento das funções principais

describe('O serviço TokenService', ()=>{
    //preparação: declaração de variáveis que vão existir nos testes
     let token;
     let service;

     it('deve ser instanciado', ()=>{
         //avaliação
         expect(service).toBeTruthy();
     });

     it('deve guardar um token', ()=>{
         service.setToken(token);
         expect(service.hasToken()).toBeTruthy();
         expect(service.getToken()).toBe("testetoken");
     });

     it('deve remover um token', ()=>{

         service.setToken(token);
         service.removeToken();

         //avaliação
         expect(service.hasToken()).toBeFalsy();
         expect(service.getToken()).toBeFalsy();
     });

     afterEach(()=>{ //após a execução de cada teste
         localStorage.clear(); //limpar o que ficou no armazenamento
     });

     beforeEach(()=>{ //antes da execução de cada teste
        //preparação
         token = 'testetoken'; 
         service = new TokenService();

    });
});