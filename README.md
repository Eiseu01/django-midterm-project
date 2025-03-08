# SETUP INSTRUCTION 

## Prerequisites
Make sure you have the following installed:
- Python (3.x recommended)
- Pipenv
- Git (Required if you want to follow the first method in cloning the repo)

## Cloning the Repository
First Method
  1. Open a terminal or command prompt.
  2. Navigate to your desired project folder.
  3. Clone the repository:
      - git clone (https://github.com/Eiseu01/django-midterm-project.git)
  4. Change into the project directory if necessary:
      - cd django-midterm-project-main
Second Method
  1. Install the zip file
  2. Extract it to your desired project folder
  3. Change into the project directory if necessary:
      - cd django-midterm-project-main

## Setting Up the Virtual Environment
Create and activate a Pipenv shell:
    -pipenv shell
Install dependencies:
    -pipenv install django

## Running the Django Project
1. Navigate to the project folder:
    - cd myproject
2. Apply database migrations:
    - py manage.py migrate
3. Run the development server:
    - python manage.py runserver
4. Open your browser and go to:
    - http://127.0.0.1:8000/
