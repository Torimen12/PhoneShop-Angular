import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNewsComponent } from './phone-news.component';

describe('PhoneNewsComponent', () => {
  let component: PhoneNewsComponent;
  let fixture: ComponentFixture<PhoneNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
