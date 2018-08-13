#comment
Feature: Subtraction
    # TODO: add desc

    Scenario: Should be able to subtract two positive integers
        When I enter "1500"
        When I click mines button
        When I enter "2000"
        When I click equal button
        Then I should see "-500" in display

    Scenario: Should be able to subtract zero from a negative integer
        When I enter "-3"
        When I click mines button
        When I enter "0"
        When I click equal button
        Then I should see "-3" in display

    Scenario: Should be able to subtract 0 from a positive integer
        When I enter "3"
        When I click mines button
        When I enter "0"
        When I click equal button
        Then I should see "3" in display

    Scenario: Should be able to subtract a floating point number from a negative integer
        When I enter "-1"
        When I click mines button
        When I enter "-2.25"
        When I click equal button
        Then I should see "-3.25" in display

    Scenario: Should be able to subtract an integer from a floating point number
        When I enter "9.35"
        When I click mines button
        When I enter "1"
        When I click equal button
        Then I should see "8.35" in display

    Scenario: Should be able to subtract a floating point number from an integer
        When I enter "9"
        When I click mines button
        When I enter "1.35"
        When I click equal button
        Then I should see "7.65" in display

    Scenario: Should be able to subtract two floating point numbers
        When I enter "0.29"
        When I click mines button
        When I enter "1.35"
        When I click equal button
        Then I should see "-1.06" in display

    Scenario: Should be able to subtract two max-input floating point numbers
        When I enter "7.1234567"
        When I click mines button
        When I enter "2.2109876"
        When I click equal button
        Then I should see "4.9124691" in display

    Scenario: An addition of a negative floating point addend, to an integer addend should be treated as a subtraction of a positive integer subtrahend
        When I enter "1000"
        When I click mines button
        When I enter "-10.99"
        When I click equal button
        Then I should see "989.01" in display

    Scenario: An addition of a negative floating point addend should be treated as a subtraction of a positive floating point subtrahend
        When I enter "-1.0"
        When I click mines button
        When I enter "-989.99"
        When I click equal button
        Then I should see "-990.99" in display

    Scenario: An addition of a negative integer addend should be treated as a subtraction of a poisitive integer subtrahend
        When I enter "50"
        When I click mines button
        When I enter "-60"
        When I click equal button
        Then I should see "-10" in display

    Scenario: An addition of a negative integer addend to another negative integer addend should be treated as a subtraction of a poisitive integer subtrahend
        When I enter "-5"
        When I click mines button
        When I enter "-20"
        When I click equal button
        Then I should see "-25" in display

    Scenario: Should be able to subtract an integer from a negative floating point number
        When I enter "-1.33"
        When I click mines button
        When I enter "2"
        When I click equal button
        Then I should see "-3.33" in display

    Scenario: Should be able to subtract two large integers
        When I enter "123456789"
        When I click mines button
        When I enter "210987654"
        When I click equal button
        Then I should see "-87530865" in display

    Scenario: Should be able to subtract two floating point numbers with many digits
        When I enter "7.12345678"
        When I click mines button
        When I enter "2.21098765"
        When I click equal button
        Then I should see "4.91246913" in display