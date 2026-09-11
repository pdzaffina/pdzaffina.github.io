---
layout: post
title: "The Ethics of Belief and the Control Nobody Can Defend"
tags:
  - Risk Governance
  - IT Leadership
  - Organizational Design
---

A DBA runs a manual script at ten at night because that is how the deployment has worked for six years. Nobody in the room can tell you why it has to happen manually, or why it has to happen at ten, or what would break if it did not. Ask the question and you get the same answer every time. Risk. That word is doing an enormous amount of work for something nobody has actually measured in years, and the first time I understood why that bothered me so much, I was not reading a management book. I was reading a philosopher.

## Where the idea came from

I first ran into the ethics of belief inside a software risk management book, not a philosophy text. DeMarco and Lister's Waltzing with Bears, published in 2003, is ostensibly about managing risk on software projects. It walks through the five core risks that sink most technology delivery, things like schedule flaws, requirements inflation, and specification breakdown, and it gives you a practical method for tracking risk instead of pretending it does not exist. That alone would make it worth reading. What makes it worth rereading is the intellectual backbone underneath the practical advice, and that backbone traces back to a nineteenth century mathematician and philosopher named W.K. Clifford.

Clifford's essay The Ethics of Belief makes one uncompromising claim. It is wrong, always, everywhere, for anyone, to believe something on insufficient evidence. He was not writing about software or IT operations. He was writing about a shipowner who sends a vessel to sea without inspecting it, convinces himself it will be fine, and then feels no guilt when it sinks because he sincerely believed it was seaworthy. Clifford's point is that sincerity is not the standard. The belief itself was negligent, because the evidence to test it was available and the shipowner chose not to look.

DeMarco and Lister pull that argument directly into software risk management, and the fit is closer than it has any right to be. A project team that believes its schedule is achievable, without ever stress testing that belief against the actual history of similar projects, is doing exactly what Clifford's shipowner did. The belief might turn out to be true. That is not the point. The point is whether anyone did the work to find out before committing other people's time, money, and reputation to it.

## Why the book holds up

Waltzing with Bears is a short book, and it never pretends to be more than it is. DeMarco and Lister do not show off. They lay out a practical, almost blue collar method for identifying risks, tracking their probability and cost, and making them visible to the people making decisions, and they back every recommendation with real project data instead of theory. The airport baggage system example alone, a facility that could not open on schedule because the software controlling the carousels was not ready, has stuck with practitioners for two decades because it is such a clean illustration of a risk that everyone could see coming and nobody managed.

What separates this book from most of the risk management literature that followed it is the moral seriousness underneath the pragmatism. The authors treat unmanaged risk as more than an inefficiency. They treat it as a kind of intellectual negligence, the same negligence Clifford was writing about a century earlier, dressed up in the language of Gantt charts and schedule variance. That is a harder standard to meet than most organizations realize, and it is worth sitting with before you get to the part of the argument that actually stings.

## The negligence compounds

Clifford's deeper point, the one DeMarco and Lister borrow most effectively, is that sloppy belief formation is not a one time event. It is a habit. Someone accepts a convenient belief without investigating it once, and the next time it is a little easier, and eventually the muscle for asking hard questions atrophies entirely. Organizations do the same thing, except the mechanism is even more durable than individual habit, because organizations encode their unexamined beliefs into process.

Here is how it happens in practice. Something bad occurs, a failed deployment, a security incident, an outage that made the evening news internally if not externally. Leadership responds the only way leadership knows how, by adding a control. A manual approval gets inserted. A change advisory board gets formed. A ticket queue replaces direct access. All of that is reasonable in the moment, because the evidence for the control is fresh and specific.

Five years pass. The person who remembers the original incident has moved to another company. The control is still there, but the reasoning behind it has been replaced by something much thinner: the fact that the control exists. New employees learn the process as the process, not as a response to a specific, dated, and possibly resolved problem. When someone finally asks why a routine database change requires three tickets, two approvals, and a DBA running a script by hand at night, the answer that comes back is not evidence. It is a word. Risk.

## Institutional memory is not evidence

This is the trap I want to name directly, because it is subtle enough that smart, well intentioned people build entire operating models on top of it. Institutional memory feels like evidence. It has the texture of experience, the weight of precedent, the comfort of consensus. People genuinely believe the control is protecting them, and they are not lying when they say so. But a belief that nobody can trace back to current, testable evidence is not knowledge. It is inherited certainty, and inherited certainty is exactly what Clifford spent his essay warning against.

The tell is always the same. Ask what evidence originally justified the control. Ask whether that evidence still exists. Ask whether the control actually mitigates the risk it was built for, and ask what new risks the control itself has created in the meantime, because a three ticket approval chain is not free. It slows delivery, it pushes work into off hours where mistakes are more likely and fewer people are watching, and it teaches every engineer downstream that the process is the point rather than the outcome. None of that shows up on the risk register that justified the control in the first place, because nobody has updated that register since the control was built.

## The asymmetry that gives it away

Here is where the problem becomes structural instead of anecdotal. In most organizations I have worked with, a proposed change to that six year old process gets held to an entirely different evidentiary standard than the process itself. Automate the database deployment and you will be asked to demonstrate security, prove rollback capability, document every control, and satisfy an audit trail before anyone signs off. Nobody asks the existing manual process to clear that same bar. It is simply called the process, and the process gets the benefit of the doubt indefinitely.

That asymmetry is intellectually indefensible once you see it clearly, and it is worth stating as a principle rather than a complaint. The burden of proof belongs to both change and the status quo. A control that was never revisited after its original justification expired is not a safer default than a proposed alternative. It is an unexamined belief that happens to have tenure, and tenure is not evidence either.

I have seen the artillery version of this same failure mode, standing orders that outlived the threat they were written for because nobody owned the job of retiring them. The military at least has a doctrine for periodically reviewing standing orders against current conditions. Most IT organizations do not have an equivalent discipline, and the absence shows up as exactly the pattern DeMarco and Lister described twenty years ago: risk that goes unmanaged not because leadership does not care, but because nobody built the habit of asking the question again.

## What a leader actually owes the organization

None of this is an argument for recklessness. Clifford was not telling the shipowner to skip the inspection and hope for the best, and I am not telling anyone to rip out controls that are genuinely earning their keep. The obligation is narrower and, honestly, harder. Leaders owe the organization a standing habit of testing inherited beliefs against current evidence, on both sides of every disagreement, including the beliefs they personally prefer.

That means treating institutional memory as a starting hypothesis rather than a conclusion. It means periodically forcing the question of what evidence justified a given control, whether that evidence has held up, and whether the control still earns the cost it imposes. And it means applying that same scrutiny to the case for change, because a belief that automation and modernization are obviously better is just as vulnerable to Clifford's critique as the belief that the old process is obviously safe.

The organizations that get this right are not the ones with the fewest controls or the most aggressive appetite for change. They are the ones that have built a habit of asking an uncomfortable question on a schedule, instead of waiting for a crisis or a frustrated executive to force the issue. Risk is not a word that ends a conversation. It is the beginning of one, and the leaders who understand that are the ones whose organizations actually get safer over time instead of just getting slower.
