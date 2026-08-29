---
layout: post
title: "Your Calendar Is Telling You Your Org Chart Is Broken"
tags:
  - Organizational Design
  - Team Structure
  - Operating Model
---

Every executive I work with complains about their calendar. Almost none of them ask why it looks the way it does. The instinct is to treat meeting load as a discipline problem, tighten the agendas, decline more invites, cap everything at thirty minutes instead of sixty. None of that touches the actual cause. A calendar buried in meetings is not evidence that your people don't know how to run a meeting. It is evidence that your organization is built as a set of departments that have to negotiate with each other to get anything done, and every negotiation needs a room.

I have watched this pattern play out in IT organizations for years, and it has a shape you can predict before you even look at the org chart. More handoffs mean more meetings. More centralized specialist functions mean more dependencies. More dependencies mean more rooms full of people whose actual job today is translating what one department needs into terms another department will act on. The meetings are not the problem. They are the visible cost of a structure that was built to optimize something other than delivery.

## The Wrong Kind of Efficient

Manufacturing solved a version of this problem decades before software did, and the solution is worth borrowing even though the industry does not translate cleanly. A functional layout groups machines by what they are. All the lathes sit together, all the mills sit together, because that arrangement maximizes the utilization of each individual machine. On paper it looks efficient. Every expensive piece of equipment is busy as often as possible.

The cost shows up somewhere the department-level metrics never look. A single part has to travel to every department in sequence, and at each stop it sits in a queue waiting for a batch of similar work to clear before anyone touches it. Ten process steps become ten queues and ten waits. The travel time and the wait time dwarf the actual processing time, and coordinating that movement becomes a full time job for someone.

Cellular manufacturing inverts the logic. Instead of grouping machines by function, you group whatever machines a part actually needs into one small cell, even if that means a given machine sits idle more often than it would in a functional layout. It looks less efficient by the old metric. Manufacturers who make the switch routinely see lead times drop by an order of magnitude and work in process collapse, because the coordination that used to require scheduling and queue management now happens by people standing next to each other.

That is the distinction worth sitting with. A functional layout optimizes a local number, how busy is this machine. A cell optimizes the thing the customer actually experiences, how fast does a finished part come out the other end. Efficiency and effectiveness are not the same target, and an organization that has quietly optimized for the first one will keep generating meetings to make up for what the structure itself refuses to deliver.

## Conway's Law and Why the Silo Keeps Winning

There is a reason this problem is harder to see and harder to fix in knowledge work than it is on a factory floor. A lathe is a physical object. You can point at it, and you can walk a part from one machine to the next and see exactly where the queue forms. A team's boundary in an organization is conceptual. Nobody can stand in the building and see where one group's ownership ends and another's begins, which is exactly why silos creep back into a company without anyone deciding to build them.

In 1968 a programmer named Melvin Conway published an observation that has held up better than almost anything else written about organizations that build things. Any group that designs a system will produce a design that mirrors the communication structure of the group that designed it. He was writing about software, but the principle is broader than software. Whatever the shape of your teams and their communication patterns, that is the shape your workflow, your handoffs, and eventually your customer experience will take, whether or not anyone chose that shape on purpose.

This is why reorganizing the process while leaving the departments untouched almost never works. The old communication paths are still there, so the old coupling reasserts itself within a few months no matter what the new process diagram says. The response some organizations have learned to use deliberately is the inverse of Conway's observation. Instead of letting communication structure dictate the outcome by accident, you design the team boundaries first, around the outcome you actually want, and let the workflow and the coordination pattern fall out of that design. Fix the org chart and the process tends to follow. Fix the process while leaving departments as they were and the org chart quietly wins every time.

## The Two-Pizza Team Was Never Really About Pizza

Amazon's two-pizza rule gets told almost entirely as a team-size story, small enough to feed with two pizzas, and that framing misses the half of it that actually did the work. Around the same era, Jeff Bezos issued a mandate that every team expose its functionality through a defined interface, that all inter-team communication go through that interface, and that no other form of communication, no direct database reads, no shared memory, no back doors, be allowed. Teams could only talk to each other through the interface.

That mandate is the inverse Conway maneuver applied at enterprise scale, years before most organizations had a name for it. Team size alone does not prevent silos. A company can staff a hundred small teams and still drown them in coordination if none of them owns a clean boundary. What actually kills the coordination tax is forcing every team to expose a defined interface and refusing to let anyone route around it, because the interface is what makes an invisible boundary behave like a real one.

Small teams organized around a complete capability or workflow, with a real interface between them and everyone else, do not need standing meetings to function. They need working sessions when they are building something new together, the software equivalent of two departments jointly designing a new part before it goes into production. What they do not need is a weekly sync to explain status across a boundary that should have been a contract in the first place.

## The Meeting Is Doing the Interface's Job

Here is the part that shows up in the math whether or not anyone in the room has read a page of organizational theory. The number of communication channels in a group grows roughly with the square of its size, not linearly. A team of five people has ten possible channels between them. Add one dependency, one more team that has to be looped in on every decision, and you are not adding one channel, you are adding several, because now every existing member has a new channel to manage as well.

Every one of those channels that does not have a clean interface behind it eventually becomes a meeting. Current data on how people actually spend their week backs this up in a way that should be uncomfortable for anyone running a large organization. Knowledge workers now spend roughly sixty percent of their working time in meetings, chat, and email, and only forty percent in the tools that actually produce something. Executives specifically report spending the majority of their working hours in meetings, and most of them rate a large share of those meetings as unproductive.

I think there are really only two honest reasons for two teams to be in a room together. Either they are solving something neither of them has solved before, which is a working session and it earns its place on the calendar. Or the boundary between what they own is not clear enough to move without checking in, which means the meeting is standing in for an interface that was never built. The first kind of meeting produces a decision or an artifact. The second kind produces another meeting next week, because nothing about the underlying ambiguity got resolved, it only got talked through one more time.

Watch for the same three patterns wherever this shows up. Work bounces between separate teams for approval at every stage, and each handoff generates its own round of scheduling. People carry several half finished efforts at once, and status meetings exist mainly to figure out which one is actually moving. Decisions sit waiting for a review board or a senior sign-off, and the queue behind that single approval point becomes its own recurring meeting. All three are the same disease with different symptoms, a missing interface where a boundary should be.

## The Test

Pull up your own calendar, or better, pull up your leadership team's calendars collectively, and sort every recurring meeting into one of those two buckets. Anything that exists because a group is genuinely discovering something together stays. Anything that exists because two departments have to synchronize on status, translate requirements to each other, or resolve who owns a decision, is not a scheduling problem. It is your org chart, rendered as a calendar.

That distinction matters because it tells you where to spend your energy. You cannot fix a structural problem by asking people to decline more invitations, and you cannot coach your way out of a functional layout with better facilitation. The fix is the same one manufacturing found decades ago and Amazon rediscovered in software: design the team boundary first, build a real interface behind it, and let small teams own a complete outcome instead of a function. Do that and the meetings that were standing in for the missing interface simply stop being necessary.

This is not a productivity habit you hand down to individual contributors. It is a design decision that belongs to whoever owns the org chart, because no amount of personal calendar discipline fixes a structure that was built to require constant negotiation. If your organization is spending most of its week in rooms instead of building, the calendar is not lying to you. It is the most honest org chart you have.
