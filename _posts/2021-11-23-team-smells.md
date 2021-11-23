---
layout: post
title: "team smells"
---

This is the second of my posts about development teams and the problems I've spotted by working with various of them.

In this one, I wanted to be more pragmatic than the previous and try to identify some team smells.

The term "team smell" is a deliberate homage to "[Code Smell](http://wiki.c2.com/?CodeSmell)" of agile memory.

I think it will help me in explaining those cases in which something in a team doesn't work that well, but we can't tell why.

## Team smells
- "Overcrowded meeting"
  - This usually happens when the team is composed by more than 5 people that need to communicate together constantly, communication is slow, and information is lost.
- "New Project Smell"
  - When most of the team members are on a project for less than 6 months, and the project is stable and maintained, this could be a symptom of high churn rate and could hide team unhappiness.
- "Deploy and run"
  - A team that does deploy and run is one not responsible for its bugs and its project deployment. It could hide a cluttered pipeline, a misunderstood definition of done and tolerance for an unstable system.
- "All good for me"
  - This smell is perceivable when, during project-related meetings, most people don't have anything to say. It could hide a blaming mentality and people might not feel comfortable in sharing their opinion or their unknowns, impeding the discovery process.
- "Rushy dailies"
  - Since I remember, the most effective dailies were the ones with the fewest rules. Dailies have to be informal and, if they don't work as so, then there might be something wrong in the team itself.
- "Let's go to the point"
  - Lack of discussions about anything other than the work in progress within the team
- "Could you write a ticket for us?"
  - Only few team members write stories/tickets
- "It's red, it's fine"
  - Broken CI/No continuous delivery
  

## Examples that I've seen in my career
- Delivery dates decided externally to the team and often missed
- Teams with more than 5 developers that had long internal meetings and often different kind of problems internally to the team itself
- Teams committed to different codebases shared between different teams that had to re-discuss quality bringing practices over and over
- Shared codebases that were simply not maintained by anyone specifically and therefor were too complex to manage
- Teams committed to different projects unable to understand any of those precisely
- Teams that had feedback of their work only it reached production
- Teams that never committed to sprints and suffered the sprint scope creep
- Teams doing Scrumban and never understanding fully why

