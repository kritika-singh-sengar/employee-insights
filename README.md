# EmployeeInsights

1. Created small POC for implementing AG Grid. This application show data of all employees present in database in tabular form. 
2. Employee details can be add, edit and delete.
3. In this application use custom cell render to show edit and delete button.
4. Filter operation can be perform on cells using AG Grid.

## Technology Used:
1. Backend: JSON server is use as a backend;
   For Using json server:
      1. Installation:
         npm install -g json-server
      2. Create a db.json file with some data
         - In db.json data must be in format like this(According to this application):
           {
            "employee": [{ }],
            }
      3. For running:
         json-server --watch db.json
2. Frontend: Angular
      1. @angular/cli  version 13.3.11
      2. @angular/material version 13.3.9
      3. typescript version 4.6.4
      AG Grid community version 29.3.4
         - For installing ag grid:
            npm i ag-grid-community
            npm i ag-grid-angular
      4. Ng- Bootstrap: version 12.1.2
         - For adding ng-bootstrap:
           ng add @ng-bootstrap/ng-bootstrap
      5. Angular Materials: version 13.3.9
         - For adding angular materials:
            ng add @angular/material
         
## Project SetUp:

1. Clone from git: 
   git clone https://github.com/kritika-singh-sengar/employee-insights.git
2. For running JSON server:
   - cd db
   - json-server --watch db.json
3. For running frontend application:
   - cd employee-insights
   - For default port: ng serve -o
   - For custom port: ng serve --port 4300 -o 
   
4. Application will started running on following url: `http://localhost:4200/` 