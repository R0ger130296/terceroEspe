package com.HelpDesk.HelpDesk.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.HelpDesk.HelpDesk.model.CrugeUser;

public interface CrugeUserRepository extends CrudRepository<CrugeUser, Long>{
	public Optional<CrugeUser> findById (long id);
	public Optional<CrugeUser> findByCedula (String cedula);
	public Optional<CrugeUser> findByCorreoEspe (String correoEspe);
	public Optional<CrugeUser> findByPassword (String password);
}
