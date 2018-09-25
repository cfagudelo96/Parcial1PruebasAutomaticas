Feature: Search teachers in Los Estudiantes
    As an user I want to be able to search for a teacher in los Estudiantes

Scenario: I can access see a teacher's basic info from the home page
    Given I go to losestudiantes home screen
    Then I see a teacher's basic info

Scenario: I can access a teacher's page from the home page
    Given I go to losestudiantes home screen
    When I click a teacher's link
    Then I see a teacher's page

Scenario Outline: I can search for a teacher by career
    Given I go to losestudiantes home screen
    When I pick option with value <value> in select with id <id>
    And I click the button containing text Alfabético
    Then I see the teacher <teacher> basic info
    Examples:
    | value | id | teacher |
    | universidad-de-los-andes,pregrado,ingenieria-de-sistemas-y-computación | sample_select | Alvaro Andres Gomez |
