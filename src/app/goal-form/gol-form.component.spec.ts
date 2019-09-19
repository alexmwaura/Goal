import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolFormComponent } from './gol-form.component';

describe('GolFormComponent', () => {
  let component: GolFormComponent;
  let fixture: ComponentFixture<GolFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
