import { readFile } from "node:fs/promises";

const notesPath = new URL("./notes/keynote-highlights.json", import.meta.url);
const { highlights } = JSON.parse(await readFile(notesPath, "utf8"));
const highlightsByTopic = new Map();

for (const highlight of highlights) {
  const topicHighlights = highlightsByTopic.get(highlight.topic) ?? [];
  topicHighlights.push(highlight.title);
  highlightsByTopic.set(highlight.topic, topicHighlights);
}

for (const [topic, titles] of highlightsByTopic) {
  console.log(topic);
  for (const title of titles) {
    console.log(`- ${title}`);
  }
  console.log();
}
