import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredintialsComponent } from './credintials.component';

describe('CredintialsComponent', () => {
  let component: CredintialsComponent;
  let fixture: ComponentFixture<CredintialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredintialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredintialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
