import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsmoduleComponent } from './productsmodule.component';

describe('ProductsmoduleComponent', () => {
  let component: ProductsmoduleComponent;
  let fixture: ComponentFixture<ProductsmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsmoduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
