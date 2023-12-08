import { readFile, writeFile } from "fs/promises";

export class MessagesRepository {
  async findOne(id: string) {
    const conetents = await readFile("messages.json", "utf8");
    const messages = JSON.parse(conetents);
    return messages[id];
  }
  async findAll() {
    const conetents = await readFile("messages.json", "utf8");
    const messages = JSON.parse(conetents);
    return messages;
  }
  async create(content: string) {
    const conetents = await readFile("messages.json", "utf8");
    const messages = JSON.parse(conetents);
    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile("messages.json", JSON.stringify(messages), "utf8");
  }
}
