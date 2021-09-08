import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app-routing.module';

describe('Router: App', () => {
  let router: Router;
  let location: Location;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      providers: []
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);

    router.initialNavigation();
  });

  it('should navigate to /one', waitForAsync(() => {
    // act
    router.navigate(['/one']);

    // assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const actual = location.path();
      const expected = '/one';

      expect(actual).toBe(expected);
    });
  }));
});
