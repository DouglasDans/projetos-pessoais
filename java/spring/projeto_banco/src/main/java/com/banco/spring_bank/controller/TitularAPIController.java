package com.banco.spring_bank.controller;

import org.springframework.web.bind.annotation.RestController;

import com.banco.spring_bank.model.ITitularRepository;
import com.banco.spring_bank.model.Titular;
import com.banco.spring_bank.service.ITitularService;

import jakarta.transaction.Transactional;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("api/v1")
public class TitularAPIController {

   Logger log = LogManager.getLogger(getClass());

   @Autowired
   ITitularService titularService;

   @CrossOrigin
   @Transactional
   @GetMapping("titular")
   public ResponseEntity<Object> consultaTitular() {

      log.info(">>> APIController - consultaTitular");

      return ResponseEntity.status(HttpStatus.OK).body(titularService.consultaTitular());
   }

   @CrossOrigin
   @Transactional
   @PostMapping("titular")
   public ResponseEntity<Object> criarTitular(@RequestBody Titular titular) {

      log.info(">>> APIController - consultaTitular");

      return ResponseEntity.status(HttpStatus.OK).body(titularService.createTitular(titular));
   }

}
