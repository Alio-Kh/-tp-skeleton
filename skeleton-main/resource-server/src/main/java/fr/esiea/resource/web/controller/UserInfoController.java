package fr.esiea.resource.web.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@RestController
public class UserInfoController {

    @GetMapping("/user/info")
    public Map<String, Object> getUserInfo(@AuthenticationPrincipal Jwt principal) {
        return Collections.singletonMap("user_name", principal.getClaimAsString("preferred_username"));
    }
}