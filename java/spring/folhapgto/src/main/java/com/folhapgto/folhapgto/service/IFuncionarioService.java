package com.folhapgto.folhapgto.service;

import com.folhapgto.folhapgto.model.Funcionario;

import java.util.List;
import java.util.Optional;

public interface IFuncionarioService {

    public List<Funcionario> consultaFuncionario();

    public Optional<Funcionario> cadastroFuncionario(Funcionario funcionario);

    public Optional<Funcionario> atualizarFuncionario(Funcionario funcionario);

    public void excluirFuncionario(Long id);
}
