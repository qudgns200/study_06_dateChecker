package myweb.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import myweb.Repository.userMapper;
import myweb.Model.user;

@Service
@Transactional
public class userService {
    @Autowired
    private userMapper userMapper;

    public List<user> selectUserList() {
        return userMapper.selectAll();
    }
}