---
layout: post
title: "Every Process Was Designed to Prevent the Last Failure"
tags:
  - Governance
  - Leadership
  - Organizational Design
---

Every approval gate in your organization has an origin story, and almost none of those stories are irrational. Somewhere in the history of your company, a system went down, an auditor found a gap, a vendor got paid twice, or a project burned through its budget without anyone noticing until it was too late. Someone in leadership looked at the wreckage and did the responsible thing. They built a control to make sure it never happened again.

That instinct is not the problem. The problem is what happens after the control gets built. Nobody ever comes back to ask whether it is still earning its place. The failure that caused it fades from institutional memory, the people who lived through it move on or retire, and the control just sits there, quietly taxing every future decision that touches its territory. Ten years and a dozen incidents later, you have an organization that is extraordinarily good at preventing problems from 2016 and increasingly bad at seizing opportunities in front of it today.

I've spent years inside large, regulated organizations where every gate, board, and sign off had a name and a reason. What I want to argue here is not that governance is bad. Governance done well is one of the most valuable things a leader can build. What I want to argue is that governance has a natural tendency to only grow, and that tendency will quietly strangle an organization's ability to move unless someone takes responsibility for pruning it. That pruning is not an IT function or a PMO function. It is a leadership function, and most leaders never claim it.

## The Ratchet Effect

Organizations accumulate process the same way a ratchet accumulates turns. It moves in one direction and locks in place after every click. A failure happens, a control gets added, and the control becomes permanent. Nobody schedules a moment to ask whether that control should still exist, because removing a safeguard feels like inviting the exact failure it was built to prevent. Adding controls feels like diligence. Removing them feels like risk.

This asymmetry is the entire story. Adding a control after an incident makes the person who added it look responsible, even prescient. Removing a control that has not caused a visible problem in years makes the person who removes it look exposed if anything ever goes wrong again, even for unrelated reasons. So the incentive runs entirely one way. Every failure produces a new gate. Almost nothing produces the removal of an old one.

I think of this as process debt, borrowing directly from the idea of technical debt in software. Technical debt accumulates when engineers take shortcuts to hit a deadline, and the code still works, but every future change gets harder because of the shortcuts underneath it. Process debt works the same way. Each individual control was reasonable at the moment it was added. The debt is the cumulative weight of controls that made sense in isolation but were never revisited as a portfolio.

Conway's Law observed that organizations design systems that mirror their own communication structure. There is a governance corollary worth naming. Organizations design controls that mirror their own history of pain, not their current risk profile. A security review process built after a major breach still asks the questions that breach exposed, even five reorganizations and three CISOs later, regardless of whether today's project bears any resemblance to that old system. The organization is not defending against the risks in front of it. It is defending against the last war.

## What This Actually Costs

The cost of excessive approval does not show up on a budget line, which is exactly why it survives so long. Nobody tracks the hours a director spends preparing a deck for a review board that exists to catch a class of mistake that has not occurred in a decade. Nobody tracks the pilot project that dies of exhaustion because it had to clear the same procurement gate built for million dollar enterprise platform purchases, even though the pilot cost twelve thousand dollars and needed to be evaluated in a month, not a quarter.

What gets tracked instead is the visible cost of the next failure, if the control is ever removed. That asymmetry in visibility is why process debt is so much more persistent than technical debt. A slow codebase eventually forces a rewrite because customers notice and revenue suffers. A slow governance process rarely forces anything, because the cost is distributed across hundreds of managers losing small amounts of time and momentum every week, and no single person feels enough pain to escalate it.

I have sat in Change Advisory Board meetings reviewing a configuration change with essentially zero blast radius, using the same rigor built for changes that could take down a production environment supporting thousands of users. I have watched an architecture review board evaluate a two week proof of concept as though it were a platform the organization would run for the next decade. In both cases, the process was not wrong when it was built. It was wrong for the thing being asked of it now, and nobody had the authority, or the appetite, to say so.

The deeper cost is cultural. When a talented employee spends more energy navigating approvals than solving the problem the approvals were meant to protect, they learn a lesson about what the organization actually values. The mission statement says innovation. The lived experience says compliance. People believe what they experience, not what they are told, and eventually your best people either stop proposing new ideas or they leave for somewhere that will let them execute one.

## Risk Elimination Is a Myth

A lot of governance is built on an unspoken assumption that risk can be eliminated if you add enough steps. It cannot. Risk can be identified, sized, transferred, mitigated, and accepted, but it cannot be eliminated, because the only organization with zero risk is one that has stopped operating. Every real decision trades one risk for another. The question worth asking is never "how do we get rid of the risk," it is "what is the smallest amount of process that gives us confidence proportional to what is actually at stake."

This is where the difference between managing risk and avoiding risk becomes the whole argument. Managing risk means sizing the control to the exposure. A production system serving customer transactions and holding regulated data deserves a rigorous change process, full stop. A prototype running on an isolated environment with synthetic data and no external dependency does not carry the same exposure, and applying the same review to both is not thoroughness, it is a failure to think. Avoiding risk means applying maximum control everywhere because nobody wants to be the person who signed off on the exception. That instinct protects individuals. It does not protect the organization, and over time it makes the organization worse at the very thing it is supposed to be good at, which is delivering outcomes.

Experimentation and production are not the same category of activity and should never be governed by the same rulebook. A unit conducting a live fire exercise operates under different rules of engagement than a unit conducting reconnaissance, because the stakes and the reversibility of a mistake are completely different. The same logic applies to a ten thousand dollar pilot versus a platform that will run your customer facing operations for the next decade. Treating them identically is not caution. It is a failure to distinguish between the two.

## A Practical Framework: The Process Debt Review

Technology leaders already know how to run a technical debt review. You inventory what exists, you assess what is load bearing versus what is legacy weight, and you make deliberate decisions about what to fix, replace, or retire. Governance deserves the identical discipline, on a regular cadence, owned at the leadership level rather than delegated down to whoever happens to run the PMO.

A process debt review works in three steps. First, inventory every standing approval, board, and gate that exists in the organization, and for each one, write down the specific failure or incident that originally justified it. If nobody in the room can name that origin, that alone is a signal. Second, ask whether the conditions that created that control still exist today. Systems change, teams change, and risk profiles change, so a control built for a legacy environment may simply have no target left to defend. Third, for the controls that still earn their place, ask whether they are correctly scoped to the size of the risk in front of them right now, or whether they have quietly expanded to cover everything regardless of exposure.

Run this review annually, tied to the same cycle where you already assess technical debt or strategic priorities. Put it on the executive calendar as a standing agenda item, not a special initiative that gets sponsored once and forgotten. The point is not to eliminate governance. The point is to make sure governance stays honest about what it is actually defending against, instead of drifting into a museum of past incidents that nobody has the standing to close.

## The Leadership Responsibility Nobody Claims

Simplifying governance is unglamorous work, and that is exactly why it does not get done without someone deliberately claiming it. Adding a control after a failure earns visible credit. Removing an obsolete one earns silence at best and criticism at worst if anything unrelated ever goes wrong afterward. Every incentive in a large organization pushes leaders toward accumulation and away from pruning, which means pruning will never happen by accident. It only happens when someone in a position of authority decides that reducing friction is as much a part of their job as reducing risk.

This is a leadership responsibility precisely because it requires someone willing to spend political capital on removing something rather than adding something. It requires the confidence to say that a control built to prevent a 2016 failure has no bearing on a 2026 decision, and to say it before the next incident happens rather than justifying it after. Leaders who never do this are not being careful. They are outsourcing responsibility to a system built by their predecessors, and calling it prudence.

The organizations that will out innovate their competitors over the next decade are not the ones with the fewest controls. They are the ones whose leaders treat governance as a living system that gets reviewed, sized, and pruned with the same discipline applied to a technology stack or a budget. Everything else drifts toward the same outcome: a company exquisitely defended against yesterday and unable to move fast enough for tomorrow.

Pick one approval process in your organization this quarter. Trace it back to the failure that created it, and ask honestly whether that failure still describes the risk you are managing today. What would you find?
