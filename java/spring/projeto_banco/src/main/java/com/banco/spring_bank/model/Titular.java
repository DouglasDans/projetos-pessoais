package com.banco.spring_bank.model;

import java.lang.reflect.Array;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Titular {

   private enum Genero {
      MASCULINO, FEMININO, OUTRO;
   }

   private enum StatusConta {
      ATIVA, INATIVA
   }

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   private String nome;
   private Long telefone;
   private String email;
   private LocalDate dataNascimento;
   private Genero genero;
   private StatusConta statusConta;

   private LocalDate createdAt = LocalDate.now();

   public Titular() {
   }

   public Titular(String nome, Long telefone, String email, String dataNascimento, Genero genero,
         StatusConta statusConta) {
      this.nome = nome;
      this.telefone = telefone;
      this.email = email;
      this.dataNascimento = LocalDate.parse(dataNascimento, DateTimeFormatter.ofPattern("dd-MM-uuuu"));
      this.genero = genero;
      this.statusConta = statusConta;
   }

   public String getNome() {
      return nome;
   }

   public void setNome(String nome) {
      this.nome = nome;
   }

   public Long getTelefone() {
      return telefone;
   }

   public void setTelefone(Long telefone) {
      this.telefone = telefone;
   }

   public String getEmail() {
      return email;
   }

   public void setEmail(String email) {
      this.email = email;
   }

   public LocalDate getDataNascimento() {
      return dataNascimento;
   }

   public void setDataNascimento(String dataNascimento) {
      this.dataNascimento = LocalDate.parse(dataNascimento, DateTimeFormatter.ofPattern("dd-MM-uuuu"));
   }

   public Genero getGenero() {
      return genero;
   }

   public void setGenero(Genero genero) {
      this.genero = genero;
   }

   public StatusConta getStatusConta() {
      return statusConta;
   }

   public void setStatusConta(StatusConta statusConta) {
      this.statusConta = statusConta;
   }

   public Long getId() {
      return id;
   }

   public LocalDate getCreatedAt() {
      return createdAt;
   }

}
