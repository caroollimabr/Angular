import { TestBed } from '@angular/core/testing';

import { VideoGameService } from './video-game.service';

describe('VideoGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoGameService = TestBed.get(VideoGameService);
    expect(service).toBeTruthy();
  });
});
