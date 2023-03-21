import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDataComponent } from './text-data.component';

describe('TextDataComponent', () => {
  let component: TextDataComponent;
  let fixture: ComponentFixture<TextDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
