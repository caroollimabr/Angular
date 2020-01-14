import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsIdComponent } from './comments-id.component';

describe('CommentsIdComponent', () => {
  let component: CommentsIdComponent;
  let fixture: ComponentFixture<CommentsIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
