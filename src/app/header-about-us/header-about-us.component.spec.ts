import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAboutUsComponent } from './header-about-us.component';

describe('HeaderAboutUsComponent', () => {
  let component: HeaderAboutUsComponent;
  let fixture: ComponentFixture<HeaderAboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderAboutUsComponent]
    });
    fixture = TestBed.createComponent(HeaderAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
