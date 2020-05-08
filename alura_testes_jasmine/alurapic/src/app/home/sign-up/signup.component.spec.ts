import { async, TestBed } from "@angular/core/testing";
import { SignUpComponent } from "./signup.component";
import { SignUpService } from "./signup.service";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { VMessageModule } from "src/app/shared/componets/vmessage/vmessage.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { of, throwError } from "rxjs";

describe("O formulário SignUp", ()=>{

    let component: SignUpComponent;
    let router: Router;
    let signUpService: SignUpService;

    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations:[SignUpComponent],
            providers:[SignUpService, UserNotTakenValidatorService],
            imports:[
                HttpClientTestingModule,
                VMessageModule,
                ReactiveFormsModule,
                RouterTestingModule.withRoutes([])
            ]
        }).compileComponents;
    }));

    beforeEach(()=>{
        router = TestBed.get(Router);
        signUpService = TestBed.get(SignUpService);
        //criação de variável de instalação de novo componente
        const fixture = TestBed.createComponent(SignUpComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("deve ser instanciado", ()=>{
        expect(component).toBeTruthy();
    });

    it("deve cadastrar um usuário", ()=>{

        const navigateSpy = spyOn(router, "navigate");
        spyOn(signUpService, "signup").and.returnValue(of(null));

        //simulação da digitação dos campos do formulário pelo usuário

        component.signupForm.get("email").setValue("fulano@detal.com");
        component.signupForm.get("fullName").setValue("Fulano");
        component.signupForm.get("userName").setValue("fulano");
        component.signupForm.get("password").setValue("123");
        component.signUp();

        expect(navigateSpy).toHaveBeenCalledWith([""]);

    });

    it("deve realizar o log caso ocorra algum erro", ()=>{

        spyOn(signUpService, "signup").and.returnValue(throwError("Erro de servidor")); //throwError não é uma exceção (senão o teste paralisaria), ele retorna um Observable com estado de erro

        //simulação da digitação dos campos do formulário pelo usuário

        component.signupForm.get("email").setValue("fulano@detal.com");
        component.signupForm.get("fullName").setValue("Fulano");
        component.signupForm.get("userName").setValue("fulano");
        component.signupForm.get("password").setValue("123");
        
        const spyLog = spyOn(console, "log");

        component.signUp();

        expect(spyLog).toHaveBeenCalledWith("Erro de servidor");

    });
});