package com.skilldistillery.hiking.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.hiking.entities.Hike;

public interface HikeRepository extends JpaRepository<Hike, Integer> {

	List<Hike> findByDate(LocalDate date);
	List<Hike> findByName(String name);
}
