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
//	@CreationTimestamp
	private LocalDate date;
	
	@Column(name="total_time")
	private String totalTime;

	
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
	

	
	public Hike() {
		super();
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

	public Hike(int id, String name, double length, LocalDate date, String totalTime) {
		super();
		this.id = id;
		this.name = name;
		this.length = length;
		this.date = date;
		this.totalTime = totalTime;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Hike [id=");
		builder.append(id);
		builder.append(", name=");
		builder.append(name);
		builder.append(", length=");
		builder.append(length);
		builder.append(", date=");
		builder.append(date);
		builder.append(", totalTime=");
		builder.append(totalTime);
		builder.append("]");
		return builder.toString();
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
