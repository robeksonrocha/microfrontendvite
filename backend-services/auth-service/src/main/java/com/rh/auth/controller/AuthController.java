package com.rh.auth.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        // Simulação de autenticação para teste
        String email = credentials.get("email");
        String senha = credentials.get("senha");

        if (email != null && !email.isEmpty()) {
            Map<String, Object> response = new HashMap<>();
            response.put("token", "jwt-token-simulado");
            response.put("user", Map.of(
                "id", 1,
                "nome", "João Silva",
                "email", email,
                "cargo", "Administrador"
            ));
            return ResponseEntity.ok(response);
        }

        return ResponseEntity.badRequest().body("Credenciais inválidas");
    }

    @GetMapping("/user")
    public ResponseEntity<?> getUserInfo() {
        Map<String, Object> userInfo = new HashMap<>();
        userInfo.put("id", 1);
        userInfo.put("nome", "João Silva");
        userInfo.put("email", "joao@example.com");
        userInfo.put("cargo", "Administrador");
        
        return ResponseEntity.ok(userInfo);
    }
} 