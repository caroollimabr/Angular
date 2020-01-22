import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGameNovoComponent } from './video-game-novo.component';

describe('VideoGameNovoComponent', () => {
  let component: VideoGameNovoComponent;
  let fixture: ComponentFixture<VideoGameNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoGameNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGameNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
