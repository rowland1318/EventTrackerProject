package com.skilldistillery.hiking.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.hiking.entities.Hike;
import com.skilldistillery.hiking.repositories.HikeRepository;

@Service
public class HikeServiceImpl implements HikeService {
	@Autowired
	private HikeRepository hikeRepo;
	
	
	@Override
	public List<Hike> listAllHikes() {
		return hikeRepo.findAll();
	}


	@Override
	public List<Hike> listByDate(LocalDate date) {
		return hikeRepo.findByDate(date);
	}


	@Override
	public List<Hike> listByName(String name) {
		return hikeRepo.findByName(name);
	}


	@Override
	public Hike createHike(Hike hike) {
		
		try {
			hike = hikeRepo.saveAndFlush(hike);
			return hike;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@Override
	public Hike updateHike(int hikeId, Hike hike) {
		Optional<Hike> optHike = hikeRepo.findById(hikeId);
		if (optHike.isPresent()) {
			Hike managedHike = optHike.get();
			managedHike.setName(hike.getName());
			managedHike.setLength(hike.getLength());
			managedHike.setTotalTime(hike.getTotalTime());
			managedHike.setDate(hike.getDate());
			return hikeRepo.saveAndFlush(managedHike);
		}
		return null;
	}


	@Override
	public boolean deleteById(int hikeId) {
		Optional<Hike> optHike = hikeRepo.findById(hikeId);
		if (optHike.isPresent()) {
			hikeRepo.deleteById(hikeId);
			return true;
		}
		return false;
	}


	@Override
	public Hike findById(int hikeId) {
		Optional<Hike> optHike = hikeRepo.findById(hikeId);
		Hike hike = null;
		if (optHike.isPresent()) {
			hike = optHike.get();
		} else {
			return null;
		}
		return hike;
	}
}
