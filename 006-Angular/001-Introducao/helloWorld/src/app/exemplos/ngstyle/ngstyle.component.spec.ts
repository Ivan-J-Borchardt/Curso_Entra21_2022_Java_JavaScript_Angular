import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyleComponent } from './ngstyle.component';

describe('NgstyleComponent', () => {
  let component: NgstyleComponent;
  let fixture: ComponentFixture<NgstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgstyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
