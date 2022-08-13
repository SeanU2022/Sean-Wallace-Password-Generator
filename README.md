# Password Generator

## What this tool does 

This application enables employees to generate random passwords based on criteria (the length and what to include: lowercase, uppercase, numeric, and/or special characters). This app runs in a browser with a  responsive UI.

## Note
Special characters here are defined from the OWASP Foundation: https://www.owasp.org/index.php/Password_special_characters 

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

	WHEN prompted for the length of the password
	THEN I choose a length of at least 8 characters and no more than 128 characters

	WHEN asked for character types to include in the password
	THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

	WHEN I answer each prompt
	THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
DEVELOPER NOTE: since a password is always generated then all prompts (as a collection) must be answered to allow generation since there is no Use Case/Scenario to allow for the password not being generated which means the user is in a loop until they make the right choices to generate a password

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
