import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhabrkComponent } from './minhabrk.component';

describe('MinhabrkComponent', () => {
  let component: MinhabrkComponent;
  let fixture: ComponentFixture<MinhabrkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhabrkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhabrkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
