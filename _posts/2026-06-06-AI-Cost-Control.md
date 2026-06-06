---
layout: post
title: "The AI Budget Is Out of Control. Here Is How to Fix It."
tags:
  - AI Leadership
  - Technology Strategy
  - Cost Management
---

You approved the AI budget. Engineers are shipping integrations. Everyone is moving fast. And now the quarterly cloud bill has arrived and it looks like a rounding error in someone else's infrastructure budget became your entire discretionary spend. No production deployment. No measurable outcome. Just API tokens and momentum.

This is the pattern I see most often in organizations that are genuinely trying to build with AI rather than just talk about it. The intent is right. The architecture is wrong.

## The Cost Problem Is an Architecture Problem

The default posture for most teams building with AI today is to route everything through frontier cloud models. Every summarization call, every classification task, every retrieval-augmented query goes to the most expensive model available because that is what the tutorial used and nobody changed it. The cost compounds fast. A team running a handful of agentic workflows can burn through tens of thousands of dollars a month on tasks that do not require frontier capability.

The mistake is treating all tasks as equally difficult. They are not. Reformatting a document, generating a structured JSON response from a template, classifying a support ticket into one of twelve categories: none of that requires the same model that you would use to synthesize a 200-page regulatory filing or reason through a novel legal question. When you route indiscriminately, you pay frontier prices for commodity work. That is the source of most AI budget waste.

## A Tiered Model Strategy

The solution is a tiered model strategy, and the infrastructure to support it exists today. Open-weight models hosted locally can handle the majority of routine tasks at a fraction of the cost of cloud API calls. Tools like Ollama make local model serving straightforward enough that a single engineer can stand one up in an afternoon. The operational footprint is manageable, and the economics are dramatically different: after the hardware investment, marginal inference cost approaches zero.

The architecture I recommend looks like this. For routine, high-volume tasks, route to a locally hosted open-weight model. For tasks that require stronger reasoning, broader context, or higher stakes, route to a frontier model. The routing logic does not need to be sophisticated to capture most of the savings. A simple classification layer that examines task type and complexity before dispatching is enough to reduce cloud spend by 60 to 80 percent in most agentic workflows.

## Gas City Makes This Buildable

Gas City is an open-source agent orchestration layer built by Chris Sells and Steve Yegge. It works with Claude Code, Codex, Gemini, and other coding agents, giving you a composable SDK for defining agents, routing rules, and workflows in one place. The mental model is a software factory: agents are workers, Gas City is the floor, and you decide what runs where. Local inference through something like Ollama handles the commodity tasks; frontier API calls are reserved for the work that earns them. The routing logic lives in Gas City, not scattered across a dozen hardcoded integrations.

This is where the real leverage is. Not in finding a cheaper frontier model, but in building orchestration infrastructure that enforces the distinction between routine and complex work. That is a durable cost posture, not a one-time savings.

## What the Board Needs to Hear

If you are a CTO walking into a board conversation about AI spend, the question you are going to face is some version of: what are we getting for this? The honest answer, in most organizations right now, is: not enough, and here is why. That is a better answer than a defensive posture about infrastructure investment cycles. It shows you understand the problem and have a path.

The path is tiered model architecture. Local hosting for commodity tasks. Frontier models for complex ones. Routing logic that enforces the distinction. The result is a cost structure that can scale with the business rather than ahead of it, and a foundation that actually supports the ROI conversation instead of making it harder.

The budget problem is solvable. It requires an architecture decision, not more spending.
