import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BeltPage } from './belt.page';

describe('BeltPage', () => {
  let component: BeltPage;
  let fixture: ComponentFixture<BeltPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeltPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: {
              subscribe: () => {}
            },
            snapshot: {
              paramMap: {
                get: (key: string) => 'some-value'
              }
            }
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeltPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

