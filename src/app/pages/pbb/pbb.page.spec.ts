import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PBBPage } from './pbb.page';

describe('PBBPage', () => {
  let component: PBBPage;
  let fixture: ComponentFixture<PBBPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PBBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
