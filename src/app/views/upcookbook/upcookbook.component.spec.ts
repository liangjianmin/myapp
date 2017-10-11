import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcookbookComponent } from './upcookbook.component';

describe('UpcookbookComponent', () => {
  let component: UpcookbookComponent;
  let fixture: ComponentFixture<UpcookbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcookbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcookbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
