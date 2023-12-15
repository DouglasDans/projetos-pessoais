package com.folhapgto.folhapgto.service;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.folhapgto.folhapgto.model.Funcionario;
import com.folhapgto.folhapgto.model.IFuncionarioRepository;

@Configuration
public class LoadDatabase {

   Logger log = LogManager.getLogger(this.getClass());

   @Bean
   CommandLineRunner initDatabase(IFuncionarioRepository funcionarioRepository) {
      return args -> {
         log.info("Carregando" + funcionarioRepository.save(new Funcionario("Douglas", "programador")));
      };
   }
}
