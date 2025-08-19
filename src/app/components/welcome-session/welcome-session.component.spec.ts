import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSessionComponent } from './welcome-session.component';

describe('WelcomeSessionComponent', () => {
  let component: WelcomeSessionComponent;
  let fixture: ComponentFixture<WelcomeSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeSessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
