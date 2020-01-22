package myweb.Repository;

import java.util.List;

import myweb.Model.user;;

public interface userMapper {
    List<user> selectAll();
}