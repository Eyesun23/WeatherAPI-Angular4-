import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SJComponent } from './sj.component';

describe('SJComponent', () => {
  let component: SJComponent;
  let fixture: ComponentFixture<SJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
