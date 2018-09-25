# Feature: Sign up into losestudiantes
#     As an user I want to sign up myself within losestudiantes website in order to rate teachers

# Scenario Outline: Sign up failed with invalid password
  
#   Given I go to losestudiantes home screen
#     When I open the login screen
#     And I fill the sign up with <email> and <password>
#     And I try to sign up
#     Then I expect to see <error>

#     Examples:
#       | email                     | password        | error                             |
#       | testcfagudelo12@test.com  | 1234            | debe ser al menos de 8 caracteres |

# Scenario Outline: Sign up failed for already registered user
  
#   Given I go to losestudiantes home screen
#     When I open the login screen
#     And I fill the sign up with <email> and <password>
#     And I try to sign up
#     Then I expect to see sweetalert with <error>

#     Examples:
#       | email                     | password        | error                                      |
#       | testcfagudelo12@test.com  | testcfagudelo12 | existe un usuario registrado con el correo |

# Scenario Outline: Sign up succeeded

#   Given I go to losestudiantes home screen
#     When I open the login screen
#     And I fill the sign up with <email> and <password>
#     And I try to sign up
#     Then I expect to have loged in

#     Examples:
#       | email                      | password          |
#       | testcfagudelo124@test.com  | testcfagudelo1234 |
