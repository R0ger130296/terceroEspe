package com.espe.quipux.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Table(name="usuarios")
public class Usuarios {

	/**
	 * 
	 */

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="usua_codi")
	private Long id;
	
	@Column(name="usua_cedula")
	public String cedula;
	
	@Column(name="usua_nomb")
	public String nombre;
	
	@Column(name="usua_apellido")
	public String apellido;
	
	@Column(name="usua_email")
	public String email;
	
	@Column(name="usua_titulo")
	public String titulo;

	@Column(name="usua_cargo")
	public String cargo;
	
	@Column(name="usua_pasw")
	public String contrasena;
	
	@Column(name="usua_esta")
	public Integer estado;
	
	@ManyToOne(optional=false)
	@JoinColumn(name="depe_codi",referencedColumnName="depe_codi")
	private Dependencia dependencia;

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
	 * @return the cedula
	 */
	public String getCedula() {
		return cedula;
	}

	/**
	 * @param cedula the cedula to set
	 */
	public void setCedula(String cedula) {
		this.cedula = cedula;
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

	/**
	 * @return the apellido
	 */
	public String getApellido() {
		return apellido;
	}

	/**
	 * @param apellido the apellido to set
	 */
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the titulo
	 */
	public String getTitulo() {
		return titulo;
	}

	/**
	 * @param titulo the titulo to set
	 */
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	/**
	 * @return the cargo
	 */
	public String getCargo() {
		return cargo;
	}

	/**
	 * @param cargo the cargo to set
	 */
	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	/**
	 * @return the contrasena
	 */
	public String getContrasena() {
		return contrasena;
	}

	/**
	 * @param contrasena the contrasena to set
	 */
	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}

	/**
	 * @return the estado
	 */
	public Integer getEstado() {
		return estado;
	}

	/**
	 * @param estado the estado to set
	 */
	public void setEstado(Integer estado) {
		this.estado = estado;
	}

	/**
	 * @return the dependencia
	 */
	public Dependencia getDependencia() {
		return dependencia;
	}

	/**
	 * @param dependencia the dependencia to set
	 */
	public void setDependencia(Dependencia dependencia) {
		this.dependencia = dependencia;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Usuarios [id=" + id + ", cedula=" + cedula + ", nombre=" + nombre + ", apellido=" + apellido
				+ ", email=" + email + ", titulo=" + titulo + ", cargo=" + cargo + ", contrasena=" + contrasena
				+ ", estado=" + estado + ", dependencia=" + dependencia + "]";
	}
	

}
