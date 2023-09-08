---
layout: post
title: "How I review code challenges"
---

I'm writing this article to help myself keep the focus on what to look for when I do code reviews for a candidate.

## 📝 Code challenges as an assessment tool

I find take-home tasks an excellent way to assess some traits and technical skills of a candidate even before having an actual interview.

They also help the candidate to face the follow-up interview with serenity because his code challenge will be used as a discussion point, no reason for surprises after all.

I'm perfectly aware that everyone is living a different life and sometimes we simply don't have the conditions to express our art to the best and I try to keep such consideration in mind when I do code review.

## The ideal challenge

Depending on the position the candidate applied for, the code challenge should have some characteristics:

- __Is a take-home task__

There is no reason for which a candidate should not be allowed to work on his challenge whenever he can, however he prefers. Exactly as the job I'm offering is.

- __Has a time constraint__ (Seniors only)

I believe that managing time is an important skill for a software engineer because involves the ability to prioritize tasks.

- __Lacks some details on purpose__ (Mid and Seniors)

Rarely in the real world, our requirements are precise and perfect, I'd expect a mid-level candidate to be able to improvise and fill the gaps

- __Requires some non-trivial solution__ (Seniors only)

The importance of this depends greatly on the technical level I'm looking for, more often than not our job requires the most boring, trivial solutions so might not be necessary to expect more from a candidate.

- __Is some sort of app and requires production-ready code__

This helps to understand what the candidate considers "production-ready" code, this definition remains vague and is up to the candidate to show how it reflects in implementation.

- __Requires some form of version control system__ (Mid and Seniors)

There are other fundamental tools to our work that I'd expect a candidate to be able to use, VCSs are one of these.

## The review process

Given the requirements that the idea challenge should have, comes easy to define a review process that should take no more than 1 hour overall, the least the best.

The goal of this process is to answer the question __"Does the candidate have a sufficient level of technical expertise for this job?"__.

I find important to keep focus on this question as we might have a bias to evaluate the candidate other for his artifacts, most likely there has been and there will be a time for evaluating the person and how could fit the team.

### The output

My artifact for answering this question is a Good-Bad-Meh list:

- GOODs are things that shines out of the ordinary, for example a docker-compose file for launching the project locally.
- MEHs are things that I didn't like but I don't see as that serious, for example mistakes in the documentation.
- BADs are things that I see as more serious and could require further questions, for example if there are no tests.

I don't count elements for making a decision, this list it's a tool for resuming what impressed me during the review process and possible points of discussion for the follow-up interview.

### Reviewing the challenge

__Read the documentation__

- I put myself in the shoes of a newly onboarded technician that has to work on this code, would I be able to start the project without thinking too much?
- Is there a procedure to run?
- Is there some form of container that I can run so I don't need to install dependencies?
- Are there some gotchas documented? How some decisions have been taken and so on?

__Run the tests__

- Do the tests run without additional steps?
- Are they green?

__Read the tests__

- Do they properly cover the critical parts of the code?
- How easy are they to break?
- Have been generated or are the result of the candidate's work?
- Are they easy to read and understand?
- Have they been written with TDD?
- Do they follow code conventions?

__Manual testing__

- Is the app difficult to start?
- Does it do what it should?

__Read the code__

- How have been the edge cases tackled?
- How did the candidate deal with the missing requirements?
- Is it easy to understand?
- Any interesting solution or approach?

__Check the VCS history__

- Are the commit messages meaningful?
- Do the commits contain code and tests together?
- How much time did the candidate take for which part?
