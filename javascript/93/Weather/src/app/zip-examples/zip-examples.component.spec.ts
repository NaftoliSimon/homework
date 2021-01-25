import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipExamplesComponent } from './zip-examples.component';

describe('ZipExamplesComponent', () => {
  let component: ZipExamplesComponent;
  let fixture: ComponentFixture<ZipExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
