package com.HelpDesk.HelpDesk.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tipo_estudiante")
public class Estudiante implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 2328952476335064820L;

	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="TIE_CODIGO")
	private Long id;
	
	@Column(name = "TIE_NOMBRE")
	public String nombre;

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the nombre
	 */
	public String getNombre() {
		return nombre;
	}

	/**
	 * @param nombre the nombre to set
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	
}
