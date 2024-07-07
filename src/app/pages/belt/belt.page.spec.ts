import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BELTPage } from './belt.page';

describe('BELTPage', () => {
  let component: BELTPage;
  let fixture: ComponentFixture<BELTPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BELTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
