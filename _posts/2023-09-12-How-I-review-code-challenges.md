---
layout: post
title: "How I review code challenges for recruitment"
---

I did a fair amount of technical assessments to decide if a hiring candidate was technically prepared to join a dev team, sometimes my own, sometimes another.

I've developed a process for guiding me during the review process.

I think it worked well so far for making a fair and realistic assessment.

## 🏆 Code challenges as an assessment tool

During a technical recruitment process, I find take-home tasks an excellent way to assess the traits and technical skills of a candidate even before having a face-to-face interview.

Additionally, they help the candidate to face the follow-up interview with serenity because his code challenge will be used as a discussion point, setting down the expectations and reducing the surprise effect.

It is also important to keep in mind that sometimes one just doesn't have the time or the conditions to express his art to the best.

That's fair and should be part of the evaluation.

I try to keep such consideration in mind when I do code review, any recruitment process cannot be fully effective without human empathy, otherwise, we'd be hiring machines.

Or we'd be hired by machines.

## 🌟 The ideal challenge

Depending on the position the candidate applied for, the ideal code challenge should:

### Be a take-home task

There is no reason why a candidate should not be allowed to work on the challenge whenever possible, however is preferred. Exactly how the job we are offering is.

### Be solvable within a fair amount of time

Usually, there's no need to ask for over-complex challenges that "usually" take more than 2/3 hours to complete to get a realistic impression.

The candidate is allocating some of his time to our challenge to fulfill our need for assessment.

That's a favor that we are asking, and accepting is a courtesy we are receiving.

### Require the right technologies

Doesn't make much sense to ask a candidate to code in a programming language that will not be used, as well with other technologies like databases.

### Be self-contained, like a web app, and ask for production-ready code

This helps to understand what the candidate considers "production-ready" code.

This definition should be vague and let the candidate show what it means to him.

### Lack some details on purpose (Mid and Seniors)

Rarely in the real world, the requirements given to us are precise and perfect.

I expect a mid-level candidate to be able to improvise and fill the gaps in any way that makes sense, may be asking for details or taking and justifying decisions.

### Require version control (Mid and Seniors)

There are other fundamental tools to our work that I'd expect a candidate to be able to use, VCSs are one of these.

Is not necessary to have a server for version control, with [git archive](https://git-scm.com/docs/git-archive) for example is possible to have git history in a self-contained archive file.

### Have a time constraint (Seniors only)

I believe that managing time is an important skill for a software engineer because involves the ability to prioritize tasks.

### Contain some non-trivial problem (Seniors only)

The importance of this depends greatly on the technical level I'm looking for so mileage may vary.

As a rule of thumb, a good challenge should have a non-trivial problem and the good solution should be as simple as possible.

## 📝 The review process

The goal of this process is to answer the question __"Does the candidate have a sufficient level of technical expertise for this job?"__.

I think is important to keep focus on this question as we could be biased and evaluate the candidate by other factors other than the artifact we got presented.

For the same reason, I prefer to read the CV only after the challenge review.

### The output

My favorite tool for answering the question is a Good-Bad-Meh list:

- ✅ GOODs are things that shine out of the ordinary, for example, a docker-compose file for launching the project locally or a particularly clever and simple solution.
- 🟡 MEHs are things that I didn't like but I don't see as that serious, for example, mistakes in the documentation or inconsistent documentation.
- ❌ BADs are things that I see as more serious and could require further questions, for example, if there are no tests.

This list it's a tool for resuming my review and could offer discussion points for the follow-up technical interview.

### Reviewing the challenge

The whole process should not take more than 1 hour, the least the better.

#### Read the documentation

- By putting myself in the shoes of a newly onboarded developer who has to work on this code, would I be able to start the project without thinking too much?
- Is there a procedure to run?
- Is there some form of container that I can run so I don't need to install dependencies?
- Are there some gotchas documented? How some decisions have been taken and so on?

#### Run the tests

- Do the tests run without additional steps?
- Are they passing?

#### Read the tests

- Do the tests properly cover the critical parts of the code?
- How easy are they to break?
- Have been generated or are the result of the candidate's work?
- Are they easy to read and understand?
- Have they been written with TDD?
- Do they follow code conventions?

#### Manual testing

- Is the app difficult to start?
- Does it do what it should?

#### Read the code

- How have been the edge cases tackled?
- How did the candidate deal with the missing requirements?
- Is it easy to understand?
- Any interesting solution or approach?
- Is there dead code?

#### Check the VCS history

- Are the commit messages meaningful?
- Do the commits contain code and tests together?
- How much time did the candidate take for which part?

## 🚀 Conclusions

Code challenges can be a good technical assessment tool if certain criteria are followed.

Their review should also follow certain steps to avoid biases and unfair evaluations.

They are not enough for painting a full picture of a possible team member but they can be a good starting point for further discussions and give a fair impression of what one is capable of.
