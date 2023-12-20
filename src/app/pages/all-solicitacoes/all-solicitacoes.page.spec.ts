import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllSolicitacoesPage } from './all-solicitacoes.page';

describe('AllSolicitacoesPage', () => {
  let component: AllSolicitacoesPage;
  let fixture: ComponentFixture<AllSolicitacoesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllSolicitacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
