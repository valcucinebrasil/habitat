import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinhaCozinhaPage } from './minha-cozinha.page';

describe('MinhaCozinhaPage', () => {
  let component: MinhaCozinhaPage;
  let fixture: ComponentFixture<MinhaCozinhaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MinhaCozinhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
