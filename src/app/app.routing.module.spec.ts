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
    // -----------------------------------------------------------------------------------------------------
    // Thanks to https://stackoverflow.com/users/1486848/shampoosham
    // In solving the issue described in the following link:
    //   https://stackoverflow.com/questions/69106612/angular-unit-test-the-pipe-currency-could-not-be-found
    // AppComponent not in declarations as it is being created through TestBed.createComponent(AppComponent)
    // -----------------------------------------------------------------------------------------------------

    TestBed.configureTestingModule({
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
