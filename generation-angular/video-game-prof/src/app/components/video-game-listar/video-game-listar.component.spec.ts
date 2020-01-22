import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGameListarComponent } from './video-game-listar.component';

describe('VideoGameListarComponent', () => {
  let component: VideoGameListarComponent;
  let fixture: ComponentFixture<VideoGameListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoGameListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGameListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
