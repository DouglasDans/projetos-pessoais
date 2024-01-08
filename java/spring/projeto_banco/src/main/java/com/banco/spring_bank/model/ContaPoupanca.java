package com.banco.spring_bank.model;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;

@Entity
@PrimaryKeyJoinColumn(name = "conta_id", referencedColumnName = "id")
public class ContaPoupanca extends Conta {

   // @OneToOne
   // @JoinColumn(name = "id", referencedColumnName = "id")
   // private Conta conta;

   private int taxaJuros = 13;

   public ContaPoupanca(Titular titular, Double saldo, StatusConta statusConta) {
      super(titular, saldo, statusConta);
   }

   public int getTaxaJuros() {
      return taxaJuros;
   }

   public void setTaxaJuros(int taxaJuros) {
      this.taxaJuros = taxaJuros;
   }

}
