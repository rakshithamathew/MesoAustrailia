import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsOneComponent } from './about-us-one.component';

describe('AboutUsOneComponent', () => {
  let component: AboutUsOneComponent;
  let fixture: ComponentFixture<AboutUsOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsOneComponent]
    });
    fixture = TestBed.createComponent(AboutUsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
