## Event Tracker Project

#### Week 12 Homework for Skill Distillery

### Overview
> This is an Event Tracker that user Spring REST C.R.U.D. API and keeps track of a users hikes over time.

---
### **Table of REST Endpoints**
**HTTP Verb**| **URI**| **Request Body**|**Response Body**|**Purpose**|
--------|--------|--------|--------|--------|
**GET** | api/hikes|       |Collection of all *hike entries* | **List** or **Collection** endpoint
**GET** | api/hikes/{hikeId}| | Representation of entry at id number-- {hikeId}| **Retrieve** endpoint
**GET** | api/hikes/search/{name}| | Collection of all *hike entries* with name-- {name}| **List** or **Collection** endpoint
**POST** | api/hikes| Representation of new *hike* entry| Description of the result of the operation| **Create** endpoint
**PUT** | api/hikes/{hikeId}| Representation of a *new version* of entry at id number--{hikeId}| | **Replace** endpoint
**PATCH** | api/hikes/{hikeId}| Description of changes to make to entry at id number--{hikeId}| | **Update** endpoint
**DELETE** | api/hikes/{hikeId}| | | **Delete** route

---
### How to Use
- Access the Event Tracker via AWS. A user can perform basic C.R.U.D. operations using the REST Endpoints listed above.

---
### Technologies Used
- Spring REST
- Spring Boot
- AWS
- Gradle
- MySQL
- JPA
- JSON
- Java
- J-Unit Testing
- RESTful API
- Postman
---
### Lessons Learned
- Learned how to perform C.R.U.D. on a Spring REST API
- Learned how to test REST Endpoints using Postman
