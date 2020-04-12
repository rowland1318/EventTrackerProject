package com.skilldistillery.hiking.services;

import java.time.LocalDate;
import java.util.List;

import com.skilldistillery.hiking.entities.Hike;

public interface HikeService {

	List<Hike> listAllHikes();
	List<Hike> listByDate(LocalDate date);
	List<Hike> listByName(String name);
	Hike createHike(Hike hike);
	Hike updateHike(int hikeId, Hike hike);
	boolean deleteById(int hikeId);
	
}
