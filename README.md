## Event Tracker Project

#### Week 12 Homework for Skill Distillery

### Overview
> This project's purpose is to allow users to track their daily gratitudes. A user has to input three gratitudes for the day and will eventually be able to track their entries by filtering through dates on a calendar and/or by keyword.

---
### **Table of REST endpoints**
**HTTP Verb**| **URI**| **Request Body**|**Response Body**|**Purpose**|
--------|--------|--------|--------|--------|
**GET** | /api/hikes|       |Collection of all *hike entries* | **List** or **Collection** endpoint
**GET** | /api/hikes/{hikeId}| | Representation of entry at id number-- {hikeId}| **Retrieve** endpoint
**POST** | /api/hikes| Representation of new *hike* entry| Description of the result of the operation| **Create** endpoint
**PUT** | api/hikes/{hikeId}| Representation of a *new version* of entry at id number--{hikeId}| | **Replace** endpoint
**PATCH** | api/hikes/{hikeId}| Description of changes to make to entry at id number--{hikeId}| | **Update** endpoint
**DELETE** | api/hikes/{hikeId}| | | **Delete** route

---
### How to Use
- Access this project via AWS. You can perform basic CRUD operations as mentioned above using the routes specified per operation. *This will get edited to reflect more once there's a front end.*

---
### Technologies Used
- AWS
- Gradle
- MySQL
- JPA
- JSON
- Java
- Spring Boot
- RESTful API
- Postman
---
### Lessons Learned

- How to perform basic CRUD operations utilizing a RESTful API rather than JSPs.
- How to check functioning routes (URIs) using Postman
- Using HttpServlet response and request to notify clients of status code
