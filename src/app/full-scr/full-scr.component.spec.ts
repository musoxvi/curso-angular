import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScrComponent } from './full-scr.component';

describe('FullScrComponent', () => {
  let component: FullScrComponent;
  let fixture: ComponentFixture<FullScrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullScrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
