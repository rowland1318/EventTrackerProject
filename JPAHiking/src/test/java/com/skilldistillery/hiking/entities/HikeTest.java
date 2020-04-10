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
		assertEquals("Bergen Peak", hike.getName());
		assertEquals(11.8, hike.getLength());
		assertEquals(2020, hike.getDate().getYear());
		assertEquals(4, hike.getDate().getMonthValue());
		assertEquals(4, hike.getDate().getDayOfMonth());
		assertEquals("7:17", hike.getTotalTime());
	}

}
