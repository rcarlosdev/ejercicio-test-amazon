Feature: The user creates an Amazon account.

  Scenario: As a user, I want to create amazon account
    Given The user is on the registration page
    When The user enters the requested data
    Then The user sees the message "Resuelve esta comprobación para proteger tu cuenta"