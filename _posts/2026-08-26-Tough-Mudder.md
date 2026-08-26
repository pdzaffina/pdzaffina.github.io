---
layout: post
title: Your IT Org Is Built for a Track Meet. You're Running a Tough Mudder.
tags:
  - Organizational Design
  - IT Leadership
  - Team Structure
---

Most IT organizations are optimized for a competition they are not entered in. They hire narrow specialists, wall those specialists off into centralized functions, and route every unit of work through a chain of handoffs between them. Headcount grows every year to support this model. Capability does not grow at the same rate. Delivery does not get faster. Quality does not get better. The org chart looks more sophisticated and the organization performs worse, and almost nobody in leadership stops to ask why the investment and the outcome have come apart.

The answer is that these organizations are built on an assumption about the nature of the work, and the assumption is wrong. They are structured as if the problems they face are well defined and the environment they operate in is stable. If that were true, the specialist model would be the right call. It is not true for most IT organizations I have worked in or advised, and building your structure on a false premise about your own environment is not a minor planning error. It is the root cause of the friction leadership keeps trying to solve with more process, more headcount, and more governance.

## The Track Meet Assumption

A track meet is the cleanest example of a well defined, stable environment I can think of. The distances are fixed. The rules do not change mid-event. A sprinter trains for the hundred meters and nothing else, a hurdler trains for the hurdles, a high jumper trains for the bar, and none of them need to know anything about the others' events. You build a roster by stacking specialists, each one maximized for a single known task, and you win by having the deepest bench in each lane. This is a legitimate and effective model when the environment actually behaves like a track meet.

Most enterprise IT organizations are structured on exactly this logic. Centralized functions form around narrow specializations: a team that only does database provisioning, a team that only does network changes, a team that only does identity and access approvals, a team that only does architecture review. Each function optimizes for depth in its own lane. Work moves through the organization the way a relay baton moves down a track, handed from one specialist to the next in a defined sequence, and leadership tracks progress the way a meet official tracks lap times.

The model has real appeal from the executive chair. It looks efficient on paper. Specialists are individually strong, each function can point to deep expertise, and the org chart reads as mature and well governed. None of that tells you whether the environment those specialists are operating in actually holds still long enough for the model to work.

## What the Model Requires

A track meet works because the event does not change while the athletes are competing. The hurdler does not have to improvise when the hurdles move, because they do not move. The model assumes the problem is defined in advance, the constraints are known, and the sequence of work can be planned the way a schedule of events is planned. Every efficiency the specialist model produces depends on that assumption holding.

Take the assumption away and the model does not degrade gracefully. It breaks. A hurdler asked to run a marathon obstacle course does not perform worse at hurdling. They are simply the wrong athlete for the problem, and no amount of additional hurdling practice fixes that mismatch. The same is true of a database specialist asked to reason about a cross-system incident that spans infrastructure, application logic, vendor behavior, and a business process nobody documented. Depth in one lane does not transfer to a problem that does not respect lane boundaries.

## The Environment You Are Actually In

Requirements shift mid-project. Vendors change their roadmap without asking. A security finding reprioritizes the quarter overnight. An acquisition merges two incompatible architectures into one deadline. The work is dynamic, frequently ill defined at the start, and genuinely chaotic in the sense that matters here, not chaotic because it is poorly managed but chaotic because it is not fully knowable in advance.

That environment does not look like a track meet. It looks like a Tough Mudder. The obstacles are not published ahead of time in a fixed sequence. Conditions change over the course of the event. Success depends less on any one competitor's mastery of a single obstacle and more on whether the person in front of you can adapt to whatever comes next without stopping to hand off to a specialist who is not there. You do not win a Tough Mudder by fielding your best sprinter, your best hurdler, and your best high jumper and hoping the course cooperates. You win it by fielding people who can competently handle whatever the course throws at them, because the course does not care what any individual trained for.

## Where the Headcount Goes

This is where the specialist model quietly fails on its own terms, and why so many IT organizations end up larger without getting better. When the environment does not hold still, work that should move through one capable person instead has to move through a sequence of narrow specialists, because no individual specialist has the range to carry the work end to end. Every point in that sequence is a handoff. Every handoff is a place where context is lost, where a queue forms, where a dependency gets created that did not need to exist.

The organization responds to the resulting slowness the way it knows how to respond: it adds more specialists to reduce the load on the ones who are backed up. That adds headcount. It does not add capability, because the new hire is just as narrow as the ones already in place, and now there is one more handoff in the chain instead of one fewer. I have watched this pattern play out across organizations of very different sizes and maturities, and it produces the same result every time: a technology budget that grows year over year while delivery speed and delivery quality stay flat or get worse, because the growth went into more specialized lanes and more handoffs between them rather than into people who could actually absorb more of the work themselves.

This is not a story about lazy or incompetent people. Most of the specialists inside these organizations are excellent at what their lane asks of them. The failure is structural. You cannot fix a mismatch between your organizational design and your operating environment by hiring more people who fit the same mismatched design.

A recent example makes this concrete. I requested an API so another system could read data out of our contracts management platform. The team that runs that platform did not have the capacity to build it for the foreseeable future, because they are already carrying several other applications. The obvious move was to hand the feature to the application development team instead, treat it as a discrete piece of engineering work, and free the platform team from having to touch it.

What that move overlooks is where the actual work sits. Coding the API itself is close to the easy part now, agents have taken a real bite out of that. The hard part, the part that runs seventy five percent of the total effort, is the customer engagement, the relationship management with the business owner of the contracts, and the accumulated system and process knowledge that tells you what the data actually means and where it is safe to expose it. Handing the coding to a separate team does not remove that seventy five percent. It still has to come from the people who run the platform, because they are the only ones who have it. You have not reduced their load. You have added a coordination burden on top of it and split ownership of a feature that now has two homes.

The cleaner call is to let the platform team build the whole thing themselves, even if it takes longer to start. When they own it end to end, they own it when it breaks too, and mean time to repair is almost always faster when the people who built a thing are the people running it at two in the morning. Splitting the build from the ownership does not create capacity. It creates a handoff, and the seventy five percent of the work that actually mattered never left the original team's desk.

## The Case for Decathletes

A decathlete is not the best in the world at any single event. A decathlete is competent enough across ten different events that no single obstacle stops them, and that range is what lets them perform when the competition does not resolve into ten separate track meets but into one continuous, varied test. That is the profile IT organizations actually need for the environment they are actually in, not the deepest possible specialist in the narrowest possible lane.

I have seen small groups of expert generalists, each with a tight, well executed set of core skills, outperform much larger teams of narrow specialists on exactly the kind of dynamic, ill defined work most IT organizations face. The reason is not that generalists work harder. It is that a small group with genuine range limits complexity by design. Fewer handoffs means fewer places for context to get lost. Fewer dependencies means fewer places for a queue to form. A basic set of skills executed well across a broad range is a form of organizational simplicity, and simplicity is what a chaotic environment rewards. Complexity is what a chaotic environment punishes, and the specialist model manufactures complexity as a side effect of trying to manufacture depth.

None of this is an argument against expertise. It is an argument against betting your entire organizational structure on the belief that expertise in narrow, fixed lanes is what your environment is going to ask for. Depth still matters. It matters most when it is carried by people who can also move across the boundaries their depth would otherwise wall them into.

## The Leadership Call

This is not a staffing decision to delegate downward and revisit at budget time. It is a structural bet about the nature of the environment your organization operates in, and it belongs to the leadership team making resourcing and organizational design decisions. If your environment genuinely is stable and well defined, the track meet model is defensible and you should keep building it. If it is not, and for most IT organizations I have worked with it is not, then every additional specialist hire and every additional centralized function is adding cost and complexity to a structure that was mismatched to the problem from the start.

The test is simple to state even if it is uncomfortable to apply. Look at your last four quarters of headcount growth in IT and ask what capability it bought you. If the honest answer is more people, more handoffs, and roughly the same delivery speed and quality as before, you are not understaffed. You are misaligned, and no further investment in the same model closes that gap. What closes it is deciding, deliberately, whether you are building a roster for a track meet or a team for a Tough Mudder, and then staffing for the competition you are actually in.
