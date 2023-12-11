package com.api.service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;

import javax.net.ssl.HttpsURLConnection;

import com.api.endereco.Endereco;
import com.api.util.Util;
import com.google.gson.Gson;

public class cepService {
   static String webService = "https://viacep.com.br/ws/";
   static int successCode = 200;

   public static Endereco buscaCEP(String cep) throws Exception {
      String URLpath = webService + cep + "/json";

      try {
         URL url = new URL(URLpath);
         HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

         if (connection.getResponseCode() != successCode) {
            throw new RuntimeException("HTTP error code: " + connection.getResponseCode());
         }

         BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
         String res = Util.converteJsonEmString(bufferedReader);

         Gson gson = new Gson();
         return gson.fromJson(res, Endereco.class);

      } catch (Exception e) {
         throw new Exception(e);
      }
   }
}
