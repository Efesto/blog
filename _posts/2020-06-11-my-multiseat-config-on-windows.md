---
layout: post
title: "My multiseat configuration on Windows or How to train neural networks and play Call of Duty at the same time"
---

Some months ago, my girlfriend and I decided to give a kick to my old home computer (a MSI GE62-6QC Apache gaming laptop) and assemble a huge, monolith looking desktop machine.
We wanted something excellent for playing videogames (or so I wanted) and with good parallel computing capabilities for the most CPU-intensive tasks like neural network training and video editing.

So after some weeks of discussions, comparisons, components search and learning new things, we came out with the following configuration:

Our lovely Monster-Machine
- CPU: AMD Ryzen™ 9 3900X
- Mainboard: ASUS TUF Gaming X570 Plus WIFI Mainboard
- Graphics: ASUS GeForce Dual RTX 2080 Super O8G Evo V2
- Chassis: BE QUIET Silent Base 801 Gaming PC
- Memory: G.SKILL Ripjaws V 32 GB DDR4
- PSU: CORSAIR RM750X
- Ubuntu 20.04 + Windows 10 Pro

We also wanted to be able to use it at the same time, while keeping two different sessions independently on our respective screens, each controlled by a different set of mouse and keyboard.

At first, I thought that using a laptop computer as a terminal for remote-desktop sessions would have been enough for both
Windows and Ubuntu but soon we realized that the performance was just not good enough.
Plus, the feeling of having a user of category A, on the real desktop, and one of category B, the user with the remote desktop, was just not bearable.

The epiphany came with the term `Multiseat`.
Multiseat is a computer configuration that allows multiple users to connect to the same resources on the same machine while having independent terminals and hardware controls.
Reminder of the old times of mainframes and limited computational power, for our use-case the idea was just a perfect fit.
So, after some search I came to a solution, good only for Windows sadly, in a software named [ASTER](https://www.ibik.ru/).

Despite variegated comments on the web between those who love it and those who just hate it, for us it revealed to be the perfect solution.
After an initial configuration of two seats on two different screens, we reached a point in which I can play even the most requiring videogame and my girlfriend can work on her seat, at the same time.

I hope that this post will be useful for those who have a similar problem and are looking for an almost optimal solution (at least on Windows), for us it worked quite well without any relevant problems. I'm honestly surprised by how well this piece of software worked for us.
