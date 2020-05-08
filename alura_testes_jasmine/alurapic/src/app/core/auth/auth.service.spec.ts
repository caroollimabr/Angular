import { AuthService } from "./auth.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { UserService } from "../user/user.service";

//REQUISIÇÕES PARA O BACK END SEM A NECESSIDADE DE LIGÁ-LO, SIMULANDO O BACK END
describe('O serviço AuthService', ()=>{

    let service: AuthService;
    let httpMock: HttpTestingController;
    //início construção spy: "dublê" em um teste de outra classe. Serve para não ter que testar outra classe desnecessariamente.
    let userService: UserService;
    
    beforeEach(()=>{

        //criação de mini-módulo para teste com TestBed
        //simplifica a criação dos objetos para teste do Angular

            TestBed.configureTestingModule({
                imports:[HttpClientTestingModule],
                providers:[AuthService]
            });

            service = TestBed.get(AuthService);
            httpMock = TestBed.get(HttpTestingController);
            //2 passo construção spy
            userService = TestBed.get(UserService);

        });
    
    it('deve ser instanciado', ()=>{
        expect(service).toBeTruthy();

    });
    
    it('deve autenticar o usuário', fakeAsync(()=>{ //fakeAsync(() - fecha na penúltima chave): Realiza a simulação de assincronicidade (como a requisição http)
    //fakeAsync cria uma bolha que permite eu simular a passagem de tempo   
        const fakeBody = {
            id: 1,
            nome: "fulano",
            email: "fulano@detal.com"
        };

        //ESTE É O SPY
        const spy = spyOn(userService, "setToken").and.returnValue(null); //"dublê" em um teste de outra classe. Serve para não ter que testar outra classe desnecessariamente.

        service.authenticate("fulano", "1234").subscribe(response =>{ //subscribe: uma requisição http retorna um Observable no Angular. Para criar a avaliação expect de um Observable, é preciso usar subscribe.
            expect(response.body).toEqual(fakeBody);// toEqual: compara e avalia cada atributo do objeto
            expect(spy).toHaveBeenCalledWith("tokenTest");
        });

        const request = httpMock.expectOne((req)=>{ //expectOne(): avalia se algum método do teste executou uma chamada http
            return req.method === "POST";
        }); 

        request.flush(fakeBody, { //simula uma requisição ao servidor do back e assim, não precisamos dele nos testes unitários
            headers:{'x-access-token': "tokenTest"}
        });

        tick();//simula a passagem de tempo  
    }));
});