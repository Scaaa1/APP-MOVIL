import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa HttpClientTestingModule para pruebas
      providers: [WeatherService] // Provee tu servicio
    });
    service = TestBed.inject(WeatherService); // Inyecta el servicio para usarlo en las pruebas
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Otras pruebas de tu servicio aquí
});
