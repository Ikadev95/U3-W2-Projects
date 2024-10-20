import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedPageComponent } from './completed-page.component';

describe('CompletedPageComponent', () => {
  let component: CompletedPageComponent;
  let fixture: ComponentFixture<CompletedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompletedPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
