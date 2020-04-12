package com.skilldistillery.hiking.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.hiking.entities.Hike;
import com.skilldistillery.hiking.services.HikeService;

@RestController
@RequestMapping("api")
public class HikeController {

	
	@Autowired
	private HikeService hikeSvc;
	
	@GetMapping("hikes")
	public List<Hike> listHikes() {
		return hikeSvc.listAllHikes();
		
	}
	
	@GetMapping("hikes/{hikeId}")
	public Hike showById(@PathVariable("hikeId") int id, HttpServletResponse response) {
		Hike hike = hikeSvc.findById(id);
		if (hike == null) {
			response.setStatus(404);
		}
		return hike;
	}
	
//	@GetMapping("hikes/date/{date}")
//	public List<Hike> listByDate(@PathVariable(value = "date") LocalDate date) {
//		return hikeSvc.listByDate(date);
//	}
//	
//	@GetMapping("hikes/{name}")
//	public List<Hike> listByName(@PathVariable(value = "name") String name) {
//		return hikeSvc.listByName(name);
//	}
	
	@PostMapping("hikes")
	@ResponseBody
	public Hike createNewHike(@RequestBody Hike hike, HttpServletRequest request,
			HttpServletResponse response) {
		try {
			Hike addHike = hikeSvc.createHike(hike);
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(hike.getId());
			String location = url.toString();
			response.addHeader("Location", location);
			return addHike;
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			return null;
		}
	}
	
	
	@PutMapping("hikes/{hikeId}")
	public Hike updateHikeEntry(@PathVariable("hikeId") int hikeId, @RequestBody Hike hike,
			HttpServletResponse resp) {
		try {
			hike = hikeSvc.updateHike(hikeId, hike);
			if (hike == null) {
				resp.setStatus(400);
			}
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
			hike = null;
		}
		return hike;
	}

	@DeleteMapping("hikes/{hikeId}")
	public void deleteGratitudeEntry(@PathVariable("hikeId") int hikeId, HttpServletResponse response) {
		try {
			if (hikeSvc.deleteById(hikeId)) {
				response.setStatus(204);

			} else {
				response.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(409);
		}
	}
	
}
