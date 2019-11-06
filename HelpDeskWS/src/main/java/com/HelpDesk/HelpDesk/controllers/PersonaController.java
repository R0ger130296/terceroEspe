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

import com.HelpDesk.HelpDesk.dao.PersonaRepository;
import com.HelpDesk.HelpDesk.model.Persona;
import com.HelpDesk.HelpDesk.util.cryptPassword;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import constants.ConstantesHelpDesk;

@CrossOrigin(origins = { ConstantesHelpDesk.DOMAINS_1, ConstantesHelpDesk.DOMAINS_2, ConstantesHelpDesk.DOMAINS_3 })
@RestController
public class PersonaController {

	/*
	 * private static final Logger logger =
	 * LoggerFactory.getLogger(PersonaController.class);
	 */

	@Autowired
	protected PersonaRepository personaRepository;

	/* private final PersonaController api = new PersonaController(); */
	private cryptPassword api = new cryptPassword();

	private ObjectMapper mapper;

	/* metodo editar y guardar */

	@SuppressWarnings("rawtypes")
	@RequestMapping(value = "/saveOrUpdatePersona", method = RequestMethod.POST)
	public ResponseEntity saveOrUpdatePersona(@RequestBody String personaJson)
			throws JsonParseException, JsonMappingException, IOException {

		Persona persona = new Persona();

		this.mapper = new ObjectMapper();
		try {
			persona = this.mapper.readValue(personaJson, Persona.class);
			System.out.println(persona);
			persona.setPassword((api.md5(persona.getPassword()))); // INCRIPTACION DE CLAVE
			// usuario.setPassword(api.md5(usuario.getPassword()));

			if (!this.validate(persona)) {
				System.out.println("if");
				return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
			}
			this.personaRepository.save(persona);
			System.out.println("save");
			return new ResponseEntity(HttpStatus.OK);

		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	/* metodo buscar todas las personas */
	@RequestMapping(value = "/getPersonas", method = RequestMethod.GET)
	public List<Persona> getPersona() {
		return (List<Persona>) this.personaRepository.findAll();
	}

	/* metodo buscar por cedula */
	@RequestMapping(value = "/getPersonas/Cedula/{cedula}", method = RequestMethod.GET)
	public Optional<Persona> cedula(String cedula) {
		return (Optional<Persona>) this.personaRepository.findByCedula(cedula);
	}

	/* metodo buscar por celular */
	@RequestMapping(value = "/getPersonas/Celular/{celular}", method = RequestMethod.GET)
	public Optional<Persona> celular(String celular) {
		return (Optional<Persona>) this.personaRepository.findByCelular(celular);
	}

	/* metodo buscar por apellido */
	@RequestMapping(value = "/getPersonas/Apellido/{apellido}", method = RequestMethod.GET)
	public Optional<Persona> apellido(String apellido) {
		return (Optional<Persona>) this.personaRepository.findByApellido(apellido);
	}

	/* metodo buscar por nombre */
	@RequestMapping(value = "/getPersonas/Nombre/{nombre}", method = RequestMethod.GET)
	public Optional<Persona> nombre(String nombre) {
		return (Optional<Persona>) this.personaRepository.findByNombre(nombre);
	}

	/* metodo buscar por direccion */
	@RequestMapping(value = "/getPersonas/Direccion/{direccion}", method = RequestMethod.GET)
	public Optional<Persona> direccion(String direccion) {
		return (Optional<Persona>) this.personaRepository.findByDireccion(direccion);
	}

	/* metodo buscar por telefono */
	@RequestMapping(value = "/getPersonas/Telefono/{telefono}", method = RequestMethod.GET)
	public Optional<Persona> telefono(String telefono) {
		return (Optional<Persona>) this.personaRepository.findByTelefono(telefono);
	}

	/* metodo buscar por CorreoPersonal */
	@RequestMapping(value = "/getPersonas/CorreoPersonal/{correoPersonal}", method = RequestMethod.GET)
	public Optional<Persona> correopersonal(String correoPersonal) {
		return (Optional<Persona>) this.personaRepository.findByCorreoPersonal(correoPersonal);
	}

	/* metodo buscar por CorreoEspe */
	@RequestMapping(value = "/getPersonas/CorreoEspe/{correoEspe}", method = RequestMethod.GET)
	public Optional<Persona> correoespe(String correoEspe) {
		return (Optional<Persona>) this.personaRepository.findByCorreoEspe(correoEspe);
	}

	/* metodo buscar por Id */
	@RequestMapping(value = "/getPersonas/Id/{id}", method = RequestMethod.GET)
	public Optional<Persona> Id(long id) {
		return (Optional<Persona>) this.personaRepository.findById(id);
	}

	@RequestMapping(value = "/deletePersonas", method = RequestMethod.POST)
	public void deletePersona(@RequestBody String personaJson) throws Exception {
		System.out.print("aqui");
		System.out.print(personaJson);
		this.mapper = new ObjectMapper();
		Persona persona = this.mapper.readValue(personaJson, Persona.class);
		if (persona.getId() == 0L) {
			throw new Exception("El Id esta nulo");
		}
		this.personaRepository.delete(persona);
	}

	private boolean validate(Persona persona) {
		boolean isValid = true;
		return isValid;
	}

}
