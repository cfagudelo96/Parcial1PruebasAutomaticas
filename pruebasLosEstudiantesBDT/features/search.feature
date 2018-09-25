# Feature: Search teachers in Los Estudiantes
#     As an user I want to be able to search for a teacher in los Estudiantes

# Scenario: I can access see a teacher's basic info from the home page
#     Given I go to losestudiantes home screen
#     Then I see a teacher's image

# Scenario: I can access a teacher's page from the home page
#     Given I go to losestudiantes home screen
#     When I click a teacher's image
#     Then I see teacher's page

Scenario: I can search for a teacher using the searchbar
    Given I go to losestudiantes home screen
    When I search for a teacher with name "Mario Velásquez"

# Scenario: I can search for a teacher by career
#     Given I go to losestudiantes home screen
#     When I pick option with value "" in select with id ""
