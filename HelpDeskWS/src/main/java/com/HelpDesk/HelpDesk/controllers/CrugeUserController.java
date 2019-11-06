package com.HelpDesk.HelpDesk.controllers;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.HelpDesk.HelpDesk.dao.CrugeUserRepository;
import com.HelpDesk.HelpDesk.model.CrugeUser;
import com.HelpDesk.HelpDesk.model.Persona;
import com.HelpDesk.HelpDesk.util.cryptPassword;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import constants.ConstantesHelpDesk;

@CrossOrigin(origins = { ConstantesHelpDesk.DOMAINS_1, ConstantesHelpDesk.DOMAINS_2, ConstantesHelpDesk.DOMAINS_3 })
@RestController
public class CrugeUserController {

	@Autowired
	private CrugeUserRepository crugeUserRepository;

	private ObjectMapper mapper;

	//
	Persona persona = new Persona();
	private cryptPassword api = new cryptPassword();

	/* metodo editar y guardar */

	@SuppressWarnings("rawtypes")
	@RequestMapping(value = "/saveOrUpdateCrugeUser", method = RequestMethod.POST)
	public ResponseEntity saveOrUpdateCrugeUser(@RequestBody String crugeUserJson)
			throws JsonParseException, JsonMappingException, IOException {

		CrugeUser crugeUser = new CrugeUser();

		this.mapper = new ObjectMapper();
		try {
			crugeUser = this.mapper.readValue(crugeUserJson, CrugeUser.class);
			System.out.println(crugeUser);
			// persona.setCedula(((crugeUser.getCedula())));
			// persona.setCorreoEspe((crugeUser.getCorreoEspe()));
			// persona.setPassword((crugeUser.getPassword()));
			crugeUser.setPassword((api.md5(crugeUser.getPassword())));// INCRIPTACION

			if (!this.validate(crugeUser)) {
				System.out.println("if");
				return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
			}
			this.crugeUserRepository.save(crugeUser);
			System.out.println("save");
			return new ResponseEntity(HttpStatus.OK);

		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@RequestMapping(value = "/getCrugeUser", method = RequestMethod.GET)

	/* metodo buscar */

	public List<CrugeUser> getCrugeUser() {
		return (List<CrugeUser>) this.crugeUserRepository.findAll();

	}

	/* metodo buscar por cedula */
	@RequestMapping(value = "/getCrugeUser/Cedula/{cedula}", method = RequestMethod.GET)
	public Optional<CrugeUser> cedula(String cedula) {
		return (Optional<CrugeUser>) this.crugeUserRepository.findByCedula(cedula);
	}

	/* metodo buscar por correoEspe */
	@RequestMapping(value = "/getCrugeUser/CorreoEspe/{correoEspe}", method = RequestMethod.GET)
	public Optional<CrugeUser> correoespe(String correoEspe) {
		return (Optional<CrugeUser>) this.crugeUserRepository.findByCorreoEspe(correoEspe);
	}

	@RequestMapping(value = "/deleteCrugeUser", method = RequestMethod.POST)
	public void deleteCrugeUser(@RequestBody String crugeUserJson) throws Exception {
		this.mapper = new ObjectMapper();
		CrugeUser crugeUser = this.mapper.readValue(crugeUserJson, CrugeUser.class);
		if (crugeUser.getId() == 0L) {
			throw new Exception("El Id esta nulo");
		}
		this.crugeUserRepository.delete(crugeUser);
	}

	private boolean validate(CrugeUser crugeUser) {
		boolean isValid = true;

		return isValid;
	}
}
