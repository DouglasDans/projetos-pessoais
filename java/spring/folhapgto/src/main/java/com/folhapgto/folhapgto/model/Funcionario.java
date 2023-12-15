package com.folhapgto.folhapgto.model;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Funcionario {

   private @Id @GeneratedValue Long id;
   private String name;
   private String cargo;

   public Funcionario() {
   }

   public Funcionario(String name, String cargo) {
      this.name = name;
      this.cargo = cargo;
   }

   public Long getId() {
      return id;
   }

   public void setId(Long id) {
      this.id = id;
   }

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public String getCargo() {
      return cargo;
   }

   public void setCargo(String cargo) {
      this.cargo = cargo;
   }

   @Override
   public boolean equals(Object o) {

      if (this == o)
         return true;
      if (!(o instanceof Funcionario))
         return false;

      Funcionario funcionario = (Funcionario) o;
      return Objects.equals(this.id, funcionario.id) && Objects.equals(this.name, funcionario.name)
            && Objects.equals(this.cargo, funcionario.cargo);
   }

   @Override
   public int hashCode() {
      return Objects.hash(this.id, this.name, this.cargo);
   }

   @Override
   public String toString() {
      return "Employee{" + "id=" + this.id + ", name='" + this.name + '\'' + ", role='" + this.cargo + '\'' + '}';
   }

}
