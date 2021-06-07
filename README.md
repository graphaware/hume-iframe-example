# Example Hume IFrame Setup

This repository contains a self-contained setup for the following demo : 

- A parent React application iframing Hume
- Keycloak for single sign on

## Running

The easiest way to run the demo is cloning this repository and start the containers : 

```
docker-compose up -d
```

The following services will be up and running : 

- The parent React application on http://localhost:8905
- Hume frontend on http://localhost:8081
- Keycloak on http://localhost:8180/auth
- Orchestra and API on their respective 8100 and 8080 ports


Keycloak admin user is auto-configured with the following credentials : `admin/admin123`

A default user for Hume with administrative rights has the following credentials : `testuser/default`

---