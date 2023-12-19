import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusProjetoPage } from './status-projeto.page';

describe('StatusProjetoPage', () => {
  let component: StatusProjetoPage;
  let fixture: ComponentFixture<StatusProjetoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StatusProjetoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
