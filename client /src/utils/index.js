import { surpriseMePrompts } from "../constants";

// function in utils are reusable in the whole app, this one returns a random prompt for images that we got from constants files.
export function getRandomPrompt() {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}