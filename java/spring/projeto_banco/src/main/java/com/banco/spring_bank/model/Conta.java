package com.banco.spring_bank.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Conta {

   protected enum StatusConta {
      ATIVA, INATIVA, BLOQUEADA
   }

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   @ManyToOne
   @JoinColumn(name = "titular_id", referencedColumnName = "id")
   private Titular titular;
   private static int agencia = 0001;

   private Double saldo;
   // private List<Object> transacoesList;

   private StatusConta statusConta;
   private LocalDate dataAbertura = LocalDate.now();

   public Conta() {
   }

   public Conta(Titular titular, Double saldo, StatusConta statusConta) {
      this.titular = titular;
      this.saldo = saldo;
      // this.transacoesList = transacoesList;
      this.statusConta = statusConta;
   }

   public Long getId() {
      return id;
   }

   public Titular getTitular() {
      return titular;
   }

   public void setTitular(Titular titular) {
      this.titular = titular;
   }

   public static int getAgencia() {
      return agencia;
   }

   public static void setAgencia(int agencia) {
      Conta.agencia = agencia;
   }

   public Double getSaldo() {
      return saldo;
   }

   public void setSaldo(Double saldo) {
      this.saldo = saldo;
   }

   // public List<Object> getTransacoesList() {
   // return transacoesList;
   // }

   // public void setTransacoesList(List<Object> transacoesList) {
   // this.transacoesList = transacoesList;
   // }

   public StatusConta getStatusConta() {
      return statusConta;
   }

   public void setStatusConta(StatusConta statusConta) {
      this.statusConta = statusConta;
   }

   public LocalDate getDataAbertura() {
      return dataAbertura;
   }

}
