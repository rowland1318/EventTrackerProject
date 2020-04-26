package com.skilldistillery.hiking.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Hike {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private double length;
	private LocalDate date;
	
	@Column(name="total_time")
	private String totalTime;
	@Column(name="elevation_gain")
	private double elevationGain;
	
	@Column(name="photo_url")
	private String photoUrl;
	
	@Column(name="trail_link")
	private String trailLink;
	private String difficulty;
	private String description;
	
	@Column(name="special_equipment")
	private String specialEquipment;

	public Hike() {
		super();
	}
	

	
	public Hike(int id, String name, double length, LocalDate date, String totalTime, double elevationGain,
			String photoUrl, String trailLink, String difficulty, String description, String specialEquipment) {
		super();
		this.id = id;
		this.name = name;
		this.length = length;
		this.date = date;
		this.totalTime = totalTime;
		this.elevationGain = elevationGain;
		this.photoUrl = photoUrl;
		this.trailLink = trailLink;
		this.difficulty = difficulty;
		this.description = description;
		this.specialEquipment = specialEquipment;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	

	


	public double getLength() {
		return length;
	}

	public void setLength(double length) {
		this.length = length;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getTotalTime() {
		return totalTime;
	}

	public void setTotalTime(String totalTime) {
		this.totalTime = totalTime;
	}

	


	public double getElevationGain() {
		return elevationGain;
	}



	public void setElevationGain(double elevationGain) {
		this.elevationGain = elevationGain;
	}



	public String getPhotoUrl() {
		return photoUrl;
	}



	public void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
	}



	public String getTrailLink() {
		return trailLink;
	}



	public void setTrailLink(String trailLink) {
		this.trailLink = trailLink;
	}



	public String getDifficulty() {
		return difficulty;
	}



	public void setDifficulty(String difficulty) {
		this.difficulty = difficulty;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public String getSpecialEquipment() {
		return specialEquipment;
	}



	public void setSpecialEquipment(String specialEquipment) {
		this.specialEquipment = specialEquipment;
	}



	@Override
	public String toString() {
		return "Hike [id=" + id + ", name=" + name + ", length=" + length + ", date=" + date + ", totalTime="
				+ totalTime + ", elevationGain=" + elevationGain + ", photoUrl=" + photoUrl + ", trailLink=" + trailLink
				+ ", difficulty=" + difficulty + ", description=" + description + ", specialEquipment="
				+ specialEquipment + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Hike other = (Hike) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	

}
