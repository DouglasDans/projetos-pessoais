package com.folhapgto.folhapgto.model;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface IFuncionarioRepository extends JpaRepository<Funcionario, Long> {
   public Optional<Funcionario> findById(Long id);
}
