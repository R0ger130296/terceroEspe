package com.HelpDesk.HelpDesk.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cruge_user")
public class CrugeUser implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -1812313982789861300L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "iduser")
	private Long id;

	@Column(name = "username")
	public String cedula;

	@Column(name = "email")
	public String correoEspe;

	@Column(name = "password")
	public String password;

	@Column(name = "state")
	public Integer estado;

	@Column(name = "totalsessioncounter")
	public Integer totalsessioncounter;

	@Column(name = "currentsessioncounter")
	public String currentsessioncounter;

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
	 * @return the correoEspe
	 */
	public String getCorreoEspe() {
		return correoEspe;
	}

	/**
	 * @param correoEspe the correoEspe to set
	 */
	public void setCorreoEspe(String correoEspe) {
		this.correoEspe = correoEspe;
	}

	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
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
	 * @return the totalsessioncounter
	 */
	public Integer getTotalsessioncounter() {
		return totalsessioncounter;
	}

	/**
	 * @param totalsessioncounter the totalsessioncounter to set
	 */
	public void setTotalsessioncounter(Integer totalsessioncounter) {
		this.totalsessioncounter = totalsessioncounter;
	}

	/**
	 * @return the currentsessioncounter
	 */
	public String getCurrentsessioncounter() {
		return currentsessioncounter;
	}

	/**
	 * @param currentsessioncounter the currentsessioncounter to set
	 */
	public void setCurrentsessioncounter(String currentsessioncounter) {
		this.currentsessioncounter = currentsessioncounter;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "CrugeUser [id=" + id + ", cedula=" + cedula + ", correoEspe=" + correoEspe + ", password=" + password
				+ ", estado=" + estado + ", totalsessioncounter=" + totalsessioncounter + ", currentsessioncounter="
				+ currentsessioncounter + "]";
	}

}
