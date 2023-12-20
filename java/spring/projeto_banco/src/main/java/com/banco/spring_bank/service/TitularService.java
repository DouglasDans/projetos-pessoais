package com.banco.spring_bank.service;

import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banco.spring_bank.model.ITitularRepository;
import com.banco.spring_bank.model.Titular;

@Service
public class TitularService implements ITitularService {

   Logger log = LogManager.getLogger(getClass());

   @Autowired
   ITitularRepository titularRepository;

   @Override
   public List<Titular> consultaTitular() {

      log.info(">>> Service - consultaTitular - Iniciado");

      return titularRepository.findAll();

   }

   @Override
   public Optional<Titular> createTitular(Titular titular) {

      log.info(">>> Service - consultaTitular - Iniciado");

      return Optional.ofNullable(titularRepository.save(titular));

   }

}