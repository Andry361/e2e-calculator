#comment
Feature: Addition
    # TODO: add desc

    Scenario: Should be able to add two positive integers numbers
        When I enter "1500"
        When I click plus button
        When I enter "2000"
        When I click equal button
        Then I should see "3500" in display

    Scenario: Should be able to add a negative integer to a positive floating point number
        When I enter "-1"
        When I click plus button
        When I enter "1.0000"
        When I click equal button
        Then I should see "0" in display

    Scenario: Should be able to add a floating point number to an integer
        When I enter "10.1"
        When I click plus button
        When I enter "2"
        When I click equal button
        Then I should see "12.1" in display

    Scenario: Should be able to add an integer to a floating point number
        When I enter "10"
        When I click plus button
        When I enter "9.9999"
        When I click equal button
        Then I should see "19.9999" in display

    Scenario: Should be able to add two floating point numbers
        When I enter "34.999"
        When I click plus button
        When I enter "1.0"
        When I click equal button
        Then I should see "35.999" in display

    Scenario: Should be able to add a negative integer and zero
        When I enter "-5"
        When I click plus button
        When I enter "0"
        When I click equal button
        Then I should see "-5" in display

    Scenario: Should be able to add zero and a positive integer
        When I enter "0"
        When I click plus button
        When I enter "5"
        When I click equal button
        Then I should see "5" in display

    Scenario: Should be able to add a negative integer with a positive number
        When I enter "-5"
        When I click plus button
        When I enter "5"
        When I click equal button
        Then I should see "0" in display

    Scenario: Should be able to add two large positive integers
        When I enter "3000000000000000"
        When I click plus button
        When I enter "9000000000000000"
        When I click equal button
        Then I should see "1.2e+16" in display

    Scenario: Should be able to add a negative floating point and a positive integer
        When I enter "-1987.50"
        When I click plus button
        When I enter "1987"
        When I click equal button
        Then I should see "-0.5" in display

    Scenario: Should be able to add a positive integer to the results of a previous operation
        When I enter "-1987.50"
        When I click plus button
        When I enter "1987"
        When I click equal button
        Then I should see "-0.5" in display