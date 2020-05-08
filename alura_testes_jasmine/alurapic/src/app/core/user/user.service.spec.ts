import { UserService } from "./user.service"
import { TokenService } from "../token/token.service";
import { Token } from "@angular/compiler/src/ml_parser/lexer";
import { TestBed } from "@angular/core/testing";

//REQUISIÇÕES PARA O BACK END SEM A NECESSIDADE DE LIGÁ-LO, SIMULANDO O BACK END
describe('O serviço UserService', ()=>{
    let service:UserService;

    beforeEach(()=>{
        //criação de mini-módulo para teste com TestBed
        //simplifica a criação dos objetos para teste do Angular
        TestBed.configureTestingModule({
            providers:[UserService]
        });
        service = TestBed.get(UserService);
    });

    it('deve ser instanciado', ()=>{
        //avaliação
        expect(service).toBeTruthy();
    });

    //teste da funcionalidade 
    it("deve, através de um token, recuperar as informações do usuário", ()=>{
        
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTU4ODc2Njg3MywiZXhwIjoxNTg4ODUzMjczfQ._fYl3ma0VgAmq8ACcxUnEx5sbhZrZbOMJiILNY9hnUI";

        service.setToken(token);

        //avaliação
        expect(service.isLogged()).toBeTruthy();
        expect(service.getUserName()).toBe("flavio");
        service.getUser().subscribe(user => { //subscribe: consigo retirar o que tem lá dentro
           expect(user.name).toBe("flavio"); 
        });
    });

    it('deve limpar as informações no logout', ()=>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTU4ODc2Njg3MywiZXhwIjoxNTg4ODUzMjczfQ._fYl3ma0VgAmq8ACcxUnEx5sbhZrZbOMJiILNY9hnUI";
        
        service.setToken(token);
        service.logout();
        expect(service.isLogged()).toBeFalsy();
        expect(service.getUserName()).toBe('') //toBe('') é o mesmo que toBeFalsy()

    });
});