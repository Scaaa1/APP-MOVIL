import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PBBPage } from './pbb.page';

describe('PBBPage', () => {
  let component: PBBPage;
  let fixture: ComponentFixture<PBBPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PBBPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParams: {
                arreglo_cadenaEnviado: ['value1', 'value2']
              }
            }
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PBBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
