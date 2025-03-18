import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsThreeComponent } from './about-us-three.component';

describe('AboutUsThreeComponent', () => {
  let component: AboutUsThreeComponent;
  let fixture: ComponentFixture<AboutUsThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsThreeComponent]
    });
    fixture = TestBed.createComponent(AboutUsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
