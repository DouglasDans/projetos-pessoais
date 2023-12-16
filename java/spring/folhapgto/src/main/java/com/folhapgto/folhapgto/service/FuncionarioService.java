package com.folhapgto.folhapgto.service;

import com.folhapgto.folhapgto.model.Funcionario;
import com.folhapgto.folhapgto.model.IFuncionarioRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FuncionarioService implements IFuncionarioService{

    Logger log = LogManager.getLogger(getClass());

    @Autowired
    IFuncionarioRepository funcionarioRepository;

    @Override
    public List<Funcionario> consultaFuncionario() {
        log.info(">>> Servico - CosultaFuncionario Iniciado");

        return funcionarioRepository.findAll();
    }

    @Override
    public Optional<Funcionario> cadastroFuncionario(Funcionario funcionario) {
        log.info(">>> Servico - cadastroFuncionario - " + funcionario.toString());

        return Optional.ofNullable(funcionarioRepository.save(funcionario));
    }

    @Override
    public Optional<Funcionario> atualizarFuncionario(Funcionario newFuncionario) {
        log.info(">>> Servico - atualizarFuncionario - " + newFuncionario.toString());

        return funcionarioRepository.findById(newFuncionario.getId()).map(funcionario -> {
            funcionario.setName(newFuncionario.getName());
            funcionario.setCargo(newFuncionario.getCargo());

            return funcionarioRepository.save(funcionario);
        });
    }

    @Override
    public void excluirFuncionario(Long id) {
        log.info(">>> Servico - excluirFuncionario - Id:" + id);

        funcionarioRepository.deleteById(id);
    }
}
