import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCInputBoxComponent } from './ccinput-box.component';

describe('CCInputBoxComponent', () => {
  let component: CCInputBoxComponent;
  let fixture: ComponentFixture<CCInputBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCInputBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
