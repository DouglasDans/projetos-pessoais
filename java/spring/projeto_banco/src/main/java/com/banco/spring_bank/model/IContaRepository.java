package com.banco.spring_bank.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IContaRepository extends JpaRepository<Conta, Long> {

}
