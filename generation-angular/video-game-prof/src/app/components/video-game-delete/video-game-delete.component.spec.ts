import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGameDeleteComponent } from './video-game-delete.component';

describe('VideoGameDeleteComponent', () => {
  let component: VideoGameDeleteComponent;
  let fixture: ComponentFixture<VideoGameDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoGameDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGameDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
