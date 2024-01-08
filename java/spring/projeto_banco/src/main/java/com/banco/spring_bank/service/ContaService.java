package com.banco.spring_bank.service;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import com.banco.spring_bank.model.ContaPoupanca;
import com.banco.spring_bank.model.IContaRepository;

@Service
public class ContaService implements IContaService {

   Logger log = LogManager.getLogger(getClass());

}
