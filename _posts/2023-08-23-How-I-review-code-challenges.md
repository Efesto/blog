---
layout: post
title: "How I review code challenges"
---

## Code challenges as an interview tool

- Why I think code challenges are meanigful for an effective recruitment
  - Good discussion point during interview
  - Helps to understand what the candidate valorizes

## The ideal challenge

- Small, complete apps that should take no more than 4 hours to be done
- Take at home tasks
- Includes some tricky problem, maybe involving performance or testing design
- Should be vague in some requirement so to let the candidate propose a solution

## The review process

- Process
  - The goal is to answer the question "is this candidate good enough?"
    - Produce a list of "GOOD", "BAD", and "MEH" regarding the code
    - There's no quantitative value, this exercise is purely to collect impressions during the review
  - Read README.md
  - Follow documented setup procedure
    - Containerization?
    - Makefile?
  - Run the tests
    - See how difficult they are to run without thinking too much, I'd expect the conventions to be followed
  - Check the tests
    - Do they proper cover the critical parts of the code?
    - How easy are they to break?
    - Have been generated or are genuinely the result of the developer's mind?
    - Organization
  - Test the program
    - Does it do what it should?
  - Check the code
    - Edge cases
    - Understandability
    - Organization
  - Check the git history
- Collect post review questions for the follow-up interview (if any)
  - Any interesting solution in the code?
  - Explain certain decisions
  - How to approach this or that problem
 
