import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypipelineComponent } from './mypipeline.component';

describe('MypipelineComponent', () => {
  let component: MypipelineComponent;
  let fixture: ComponentFixture<MypipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
