import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteComponent } from './filte.component';

describe('FilteComponent', () => {
  let component: FilteComponent;
  let fixture: ComponentFixture<FilteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
