import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormArray } from '@angular/forms';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
  });

  it('should create a new FormArray', () => {
    expect(component.productform).toBeInstanceOf(FormArray);
  });

  it('should add a new product to the FormArray', () => {
    const products = component.productform.get("products") as FormArray;
    products.push(component.createProducts());
    expect(products.length).toBe(1);
  });

  it('should remove a product from the FormArray', () => {
    const products = component.productform.get("products") as FormArray;
    products.push(component.createProducts());
    products.removeAt(0);
    expect(products.length).toBe(0);
  });

  it('should validate the form', () => {
    const products = component.productform.get("products") as FormArray;
    products.push(component.createProducts());
    expect(component.productform.valid).toBe(false);
    products.get("name").setValue("Test Product");
    expect(component.productform.valid).toBe(true);
  });
});