import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarApp } from './navbar-app';

describe('NavbarApp', () => {
  let component: NavbarApp;
  let fixture: ComponentFixture<NavbarApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarApp],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
