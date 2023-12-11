package com.api;

import java.util.Scanner;

import com.api.endereco.Endereco;
import com.api.service.cepService;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner in = new Scanner(System.in);
        String cep;

        System.out.println("Informe seu CEP:");
        cep = in.nextLine();

        Endereco endereco = cepService.buscaCEP(cep);

        System.out.print(
                "Rua: " + endereco.getLogradouro()
                + "\nBairro: " + endereco.getBairro()
                + "\nCidade: " + endereco.getLocalidade()
                + "\nEstado: " + endereco.getUf()
        );
    }
}
