import { TestBed, async } from "@angular/core/testing";
import { FooterComponent } from "./footer.component";
import { RouterTestingModule } from "@angular/router/testing";
import { UserService } from "../user/user.service";
import { of } from "rxjs";

describe("O componente Footer", ()=>{
let component: FooterComponent;

    //boas práticas: isolar o TestBed em um beforeEach assíncrono, especialmente quando há componentes muito complexos

    beforeEach(async(()=>{ //async: permite que os componentes sejam compilados de forma assíncrona
        TestBed.configureTestingModule({
            imports: [RouterTestingModule], //router link do html
            providers: [UserService],
            declarations: [FooterComponent]
        }).compileComponents();
    }));
    
    beforeEach(()=>{

        const userService = TestBed.get(UserService);

        spyOn(userService, "getUser").and.returnValue(of({
            email: "fulano@detal.com",
            name: "Fulano",
            id: 1
        }));

        const fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("deve ser instanciado", ()=>{
        expect(component).toBeTruthy();
    })
});