import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydemoLibComponent } from './mydemo-lib.component';

describe('MydemoLibComponent', () => {
  let component: MydemoLibComponent;
  let fixture: ComponentFixture<MydemoLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydemoLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MydemoLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
