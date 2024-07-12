import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { PBBPage } from './pbb.page';

describe('PBBPage', () => {
  let component: PBBPage;
  let fixture: ComponentFixture<PBBPage>;

  beforeEach(async () => {
    const routerMock = {
      getCurrentNavigation: () => ({
        extras: {
          state: {
            arreglo_cadenaEnviado: ['value1', 'value2']
          }
        }
      })
    };

    await TestBed.configureTestingModule({
      declarations: [PBBPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              arreglo_cadenaEnviado: ['value1', 'value2']
            }),
            snapshot: {
              queryParams: {
                arreglo_cadenaEnviado: ['value1', 'value2']
              }
            }
          }
        },
        {
          provide: Router,
          useValue: routerMock
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
