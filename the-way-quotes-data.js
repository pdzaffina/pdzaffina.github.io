// ── QUOTE DATA ─────────────────────────────────────────────
const quotes = [
  {
    id: 1,
    text: "Put a good person in a bad system and the bad system wins, no contest.",
    author: "W. Edwards Deming",
    source: "Deming Four Day Seminar, Phoenix (February 1993)",
    theme: "Systems Thinking"
  },
  {
    id: 2,
    text: "A bad system will beat a good person every time.",
    author: "W. Edwards Deming",
    source: "Deming Four Day Seminar, Phoenix (February 1993)",
    theme: "Systems Thinking"
  },
  {
    id: 3,
    text: "Eighty-five percent of the reasons for failure are deficiencies in the systems and process rather than the employee. The role of management is to change the process rather than badgering individuals to do better.",
    author: "W. Edwards Deming",
    source: "Out of the Crisis (1982)",
    theme: "Systems Thinking"
  },
  {
    id: 4,
    text: "If you can't describe what you are doing as a process, you don't know what you're doing.",
    author: "W. Edwards Deming",
    source: "Out of the Crisis (1982)",
    theme: "Systems Thinking"
  },
  {
    id: 5,
    text: "It is not enough to do your best; you must know what to do, and then do your best.",
    author: "W. Edwards Deming",
    source: "Out of the Crisis (1982)",
    theme: "Systems Thinking"
  },
  {
    id: 6,
    text: "Entities must not be multiplied beyond necessity.",
    author: "William of Ockham (attrib.)",
    source: "Ockham's Razor — formulated by John Punch (1639), spirit attributed to Ockham (~1320)",
    theme: "First Principles"
  },
  {
    id: 7,
    text: "It is futile to do with more things that which can be done with fewer.",
    author: "William of Ockham",
    source: "Summa Totius Logicae, i. 12 (~1323)",
    theme: "First Principles"
  },
  {
    id: 8,
    text: "Never attribute to malice that which is adequately explained by stupidity.",
    author: "Robert J. Hanlon",
    source: "Murphy's Law Book Two (Arthur Bloch, ed., 1980)",
    theme: "Mental Models"
  },
  {
    id: 9,
    text: "Any organization that designs a system will produce a design whose structure is a copy of the organization's communication structure.",
    author: "Melvin Conway",
    source: "How Do Committees Invent? — Datamation (April 1968)",
    theme: "Architecture"
  },
  {
    id: 10,
    text: "If the architecture of the system and the architecture of the organization are at odds, the architecture of the organization wins.",
    author: "Ruth Malan",
    source: "Team Topologies (Skelton & Pais, 2019) — citing Malan",
    theme: "Architecture"
  },
  {
    id: 11,
    text: "During battle planning, Napoleon kept a corporal present to shine his boots. When his generals left, he would ask the corporal if the plan made sense. If the corporal said no, the plan was redrawn. If you cannot explain your strategy to the lowest-ranking person in the room, you do not yet have a strategy.",
    author: "Napoleon Bonaparte (attributed)",
    source: "Napoleon's Corporal — leadership principle derived from Napoleonic practice",
    theme: "Communication"
  },
  {
    id: 12,
    text: "We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value: Individuals and interactions over processes and tools. Working software over comprehensive documentation. Customer collaboration over contract negotiation. Responding to change over following a plan.",
    author: "The Agile Alliance",
    source: "Manifesto for Agile Software Development — Snowbird, Utah (February 2001)",
    theme: "Agile"
  },
  {
    id: 13,
    text: "Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.",
    author: "The Agile Alliance",
    source: "Twelve Principles behind the Agile Manifesto (2001)",
    theme: "Agile"
  },
  {
    id: 14,
    text: "Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.",
    author: "The Agile Alliance",
    source: "Twelve Principles behind the Agile Manifesto (2001)",
    theme: "Agile"
  },
  {
    id: 15,
    text: "Simplicity — the art of maximizing the amount of work not done — is essential.",
    author: "The Agile Alliance",
    source: "Twelve Principles behind the Agile Manifesto (2001)",
    theme: "Agile"
  },
  {
    id: 16,
    text: "Some folks think that Agile is about going fast. It's not. It's never been about going fast. Agile is about knowing, as early as possible, just how screwed we are.",
    author: "Robert C. Martin",
    source: "Clean Agile: Back to Basics (2019)",
    theme: "Agile"
  },
  {
    id: 17,
    text: "Adding manpower to a late software project makes it later.",
    author: "Fred Brooks",
    source: "The Mythical Man-Month: Essays on Software Engineering (1975) — Brooks's Law",
    theme: "Project Management"
  },
  {
    id: 18,
    text: "How does a large software project get to be one year late? One day at a time.",
    author: "Fred Brooks",
    source: "The Mythical Man-Month: Essays on Software Engineering (1975)",
    theme: "Project Management"
  },
  {
    id: 19,
    text: "The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination.",
    author: "Fred Brooks",
    source: "The Mythical Man-Month: Essays on Software Engineering (1975)",
    theme: "Engineering"
  },
  {
    id: 20,
    text: "Data is of course important in manufacturing, but I place the greatest emphasis on facts.",
    author: "Taiichi Ohno",
    source: "Toyota Production System: Beyond Large-Scale Production (1978)",
    theme: "Lean"
  },
  {
    id: 21,
    text: "When you go out into the workplace, you should be looking for things that you can do for your people there. You've got no business in the workplace if you're just there to be there.",
    author: "Taiichi Ohno",
    source: "Just-In-Time for Today and Tomorrow (Ohno & Mito, 1988)",
    theme: "Lean"
  },
  {
    id: 22,
    text: "All we are doing is looking at the time line, from the moment the customer gives us an order to the point when we collect the cash. And we are reducing the time line by reducing the non-value adding wastes.",
    author: "Taiichi Ohno",
    source: "Toyota Production System: Beyond Large-Scale Production (1978)",
    theme: "Lean"
  },
  {
    id: 23,
    text: "Where there is no standard, there can be no improvement.",
    author: "Taiichi Ohno",
    source: "Toyota Production System: Beyond Large-Scale Production (1978)",
    theme: "Lean"
  },
  {
    id: 24,
    text: "Genchi genbutsu: go and see for yourself. You go to the gemba to understand and grasp the facts.",
    author: "Taiichi Ohno",
    source: "Toyota Production System — Genchi Genbutsu principle",
    theme: "Lean"
  },
  {
    id: 25,
    text: "First make it work. Then make it right. Then make it fast.",
    author: "Robert C. Martin",
    source: "Clean Architecture: A Craftsman's Guide to Software Structure and Design (2017)",
    theme: "Engineering"
  },
  {
    id: 26,
    text: "Clean code always looks like it was written by someone who cares.",
    author: "Robert C. Martin",
    source: "Clean Code: A Handbook of Agile Software Craftsmanship (2008)",
    theme: "Engineering"
  },
  {
    id: 27,
    text: "So if you want to go fast, if you want to get done quickly, if you want your code to be easy to write, make it easy to read.",
    author: "Robert C. Martin",
    source: "Clean Code: A Handbook of Agile Software Craftsmanship (2008)",
    theme: "Engineering"
  },
  {
    id: 28,
    text: "The only way to make the deadline — the only way to go fast — is to keep the code as clean as possible at all times.",
    author: "Robert C. Martin",
    source: "Clean Code: A Handbook of Agile Software Craftsmanship (2008)",
    theme: "Engineering"
  },
  {
    id: 29,
    text: "Be, Know, Do. An Army leader is a person of character, presence, and intellect who inspires others to follow.",
    author: "U.S. Army",
    source: "Army Leadership (FM 22-100, 1999) — Army Leadership Framework",
    theme: "Army Leadership"
  },
  {
    id: 30,
    text: "Mission command: the exercise of authority and direction by the commander using mission orders to enable disciplined initiative within the commander's intent.",
    author: "U.S. Army",
    source: "Mission Command (ADP 6-0, 2012)",
    theme: "Army Leadership"
  },
  {
    id: 31,
    text: "No plan survives first contact with the enemy.",
    author: "Helmuth von Moltke the Elder",
    source: "On Strategy: A Critical Essay (1871) — often paraphrased from his original German",
    theme: "Army Leadership"
  },
  {
    id: 32,
    text: "Plans are worthless, but planning is everything.",
    author: "Dwight D. Eisenhower",
    source: "Speech to the National Defense Executive Reserve (November 14, 1957)",
    theme: "Army Leadership"
  },
  {
    id: 33,
    text: "Leadership is the art of getting someone else to do something you want done because he wants to do it.",
    author: "Dwight D. Eisenhower",
    source: "Attributed — widely cited in leadership literature",
    theme: "Leadership"
  },
  {
    id: 34,
    text: "The most dangerous leadership myth is that leaders are born — that there is a genetic factor to leadership. This myth asserts that people simply either have certain charismatic qualities or not. That's nonsense.",
    author: "Warren Bennis",
    source: "On Becoming a Leader (1989)",
    theme: "Leadership"
  },
  {
    id: 35,
    text: "Management is doing things right; leadership is doing the right things.",
    author: "Peter Drucker",
    source: "The Effective Executive (1967)",
    theme: "Leadership"
  },
  {
    id: 36,
    text: "Culture eats strategy for breakfast.",
    author: "Peter Drucker",
    source: "Attributed to Drucker — popularized by Mark Fields of Ford (c. 2006)",
    theme: "Leadership"
  },
  {
    id: 37,
    text: "The measure of intelligence is the ability to change.",
    author: "Albert Einstein",
    source: "Attributed",
    theme: "Leadership"
  },
  {
    id: 38,
    text: "It ain't as bad as you think. It will look better in the morning.",
    author: "Colin Powell",
    source: "My American Journey (1995)",
    theme: "Emotional Intelligence"
  },
  {
    id: 39,
    text: "Get mad, then get over it.",
    author: "Colin Powell",
    source: "My American Journey (1995)",
    theme: "Emotional Intelligence"
  },
  {
    id: 40,
    text: "Avoid having your ego so close to your position that when your position falls, your ego goes with it.",
    author: "Colin Powell",
    source: "My American Journey (1995)",
    theme: "Leadership"
  },
  {
    id: 41,
    text: "It can be done.",
    author: "Colin Powell",
    source: "My American Journey (1995)",
    theme: "Leadership"
  },
  {
    id: 42,
    text: "Be careful what you choose. You may get it.",
    author: "Colin Powell",
    source: "My American Journey (1995)",
    theme: "Strategic Mindset"
  },
  {
    id: 43,
    text: "Don't let adverse facts stand in the way of a good decision.",
    author: "Colin Powell",
    source: "My American Journey (1995)",
    theme: "Leadership"
  },
  {
    id: 44,
    text: "You can't make someone else's choices. You shouldn't let someone else make yours.",
    author: "Colin Powell",
    source: "My American Journey (1995)",
    theme: "Leadership"
  },
  {
    id: 45,
    text: "Check small things.",
    author: "Colin Powell",
    source: "My American Journey (1995)",
    theme: "Lean"
  },
  {
    id: 46,
    text: "Share credit.",
    author: "Colin Powell",
    source: "My American Journey (1995)",
    theme: "Leadership"
  },
  {
    id: 47,
    text: "Remain calm. Be kind.",
    author: "Colin Powell",
    source: "My American Journey (1995)",
    theme: "Leadership"
  },
  {
    id: 48,
    text: "Have a vision. Be demanding.",
    author: "Colin Powell",
    source: "My American Journey (1995)",
    theme: "Leadership"
  },
  {
    id: 49,
    text: "Don't take counsel of your fears or naysayers.",
    author: "Colin Powell",
    source: "My American Journey (1995)",
    theme: "Strategic Mindset"
  },
  {
    id: 50,
    text: "Perpetual optimism is a force multiplier.",
    author: "Colin Powell",
    source: "My American Journey (1995)",
    theme: "Leadership"
  },
{
    id: 51,
    text: "All models are wrong, but some are useful.",
    author: "George Box",
    source: "Empirical model-building and response surfaces, Paper (1987)",
    theme: "Systems Thinking"
}
];