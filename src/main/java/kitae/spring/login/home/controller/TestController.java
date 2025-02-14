package kitae.spring.login.home.controller;

import kitae.spring.login.member.entity.Member;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/backtest")
    public Member makeMember(){
        Member member = new Member();
        member.setEmail("backend@test.com");
        member.setUsername("홍길동");
        member.setRole("USER");
        member.setGender("남자");
        return member;
    }
}
