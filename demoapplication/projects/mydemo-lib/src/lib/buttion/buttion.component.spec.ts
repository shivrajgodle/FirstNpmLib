import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtionComponent } from './buttion.component';

describe('ButtionComponent', () => {
  let component: ButtionComponent;
  let fixture: ComponentFixture<ButtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
