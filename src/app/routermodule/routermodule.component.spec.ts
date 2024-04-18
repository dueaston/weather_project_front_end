import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutermoduleComponent } from './routermodule.component';

describe('RoutermoduleComponent', () => {
  let component: RoutermoduleComponent;
  let fixture: ComponentFixture<RoutermoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutermoduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutermoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
