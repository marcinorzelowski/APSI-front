import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioAddComponent } from './scenario-add.component';

describe('ScenarioAddComponent', () => {
  let component: ScenarioAddComponent;
  let fixture: ComponentFixture<ScenarioAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
