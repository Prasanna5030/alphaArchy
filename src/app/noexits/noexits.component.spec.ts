import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoexitsComponent } from './noexits.component';

describe('NoexitsComponent', () => {
  let component: NoexitsComponent;
  let fixture: ComponentFixture<NoexitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoexitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoexitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
