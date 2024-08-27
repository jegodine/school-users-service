# School Users Service

This project contains the services related with all the users management, create, update and delete.

This project have this configurations:

* Node 20
* Mongoose
* Port: 8092
* Dockerfile: this contains the basic configuration for this project.

## Details
We have structure this project with this configurations:

### config folder
This folder contains the configuration about the connection with MongoDB 7

### model folder
In here we have the basic structure to save the users information this is used with Mongoose,

* User: this also contains a Rol enum definition.
* Attendance

### routes folder
This contains the url access for CRUD and for finding the users.

