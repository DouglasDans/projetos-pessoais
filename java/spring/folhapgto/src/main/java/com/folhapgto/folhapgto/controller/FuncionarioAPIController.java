package com.folhapgto.folhapgto.controller;

import com.folhapgto.folhapgto.model.Funcionario;
import com.folhapgto.folhapgto.service.IFuncionarioService;
import jakarta.transaction.Transactional;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1")
public class FuncionarioAPIController {

    Logger log = LogManager.getLogger(getClass());

    @Autowired
    IFuncionarioService funcionarioService;

    @CrossOrigin
    @GetMapping("funcionario")
    @Transactional
    public ResponseEntity<Object> consultaFuncionario() {
        log.info(">>> APIController - consultaFuncionario");
        return ResponseEntity.status(HttpStatus.OK).body(funcionarioService.consultaFuncionario());
    }

    @CrossOrigin
    @PostMapping("funcionario")
    @Transactional
    public ResponseEntity<Object> cadastrarFuncionario(@RequestBody Funcionario funcionario){
        log.info(">>> APIController - cadastrarFuncionario");
        return ResponseEntity.status(HttpStatus.OK).body(funcionarioService.cadastroFuncionario(funcionario));
    }
}
