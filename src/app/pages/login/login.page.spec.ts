import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../../services/auth.service'; // Ajusta la ruta según tu estructura

describe('LoginPage', () => {
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    authService = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(authService).toBeTruthy();
  });

  // Agrega más pruebas según sea necesario
});
