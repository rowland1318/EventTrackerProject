package com.skilldistillery.hiking.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class HikeTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Hike hike;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("HikingPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		hike = em.find(Hike.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		hike = null;
	}

	@Test
	void test() {
		assertNotNull(hike);
		assertEquals("The Incline Trail", hike.getName());
		assertEquals(3.7, hike.getLength());
		assertEquals(2020, hike.getDate().getYear());
		assertEquals(1, hike.getDate().getMonthValue());
		assertEquals(18, hike.getDate().getDayOfMonth());
		assertEquals("2:30:00", hike.getTotalTime());
		assertEquals(1922, hike.getElevationGain());
		assertEquals("https://i.imgur.com/ry9HlSy.jpg", hike.getPhotoUrl());
		assertEquals("https://www.alltrails.com/trail/us/colorado/the-incline-trail", hike.getTrailLink());
		assertEquals("Hard", hike.getDifficulty());
		assertEquals("The Incline Trail is a 3.6 mile heavily trafficked loop trail located near Manitou Springs, Colorado that features beautiful wild flowers and is only recommended for very experienced adventurers. The trail is primarily used for hiking, running, and nature trips and is best used from May until October.", hike.getDescription());
		assertEquals("N/A", hike.getSpecialEquipment());
	}

}
