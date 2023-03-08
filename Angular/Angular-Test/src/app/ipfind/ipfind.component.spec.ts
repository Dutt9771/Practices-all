import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpfindComponent } from './ipfind.component';

describe('IpfindComponent', () => {
  let component: IpfindComponent;
  let fixture: ComponentFixture<IpfindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpfindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpfindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
