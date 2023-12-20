package com.banco.spring_bank.service;

import java.util.List;
import java.util.Optional;

import com.banco.spring_bank.model.Titular;

public interface ITitularService {

   public List<Titular> consultaTitular();

   public Optional<Titular> createTitular(Titular titular);

}
