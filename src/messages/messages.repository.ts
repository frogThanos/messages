import { readFile, writeFile } from "fs";

export class MessagesRepository {
  async findOne(id: string) {
    const conetents: any = await readFile("messages.json", null);
    const messages = JSON.parse(conetents);
    return messages[id];
  }
  async findAll() {
    const conetents: any = await readFile("messages.json", null);
    const messages = JSON.parse(conetents);
    return messages;
  }
  async create(content: string) {
    const conetents: any = await readFile("messages.json", null);
    const messages = JSON.parse(conetents);
    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile("messages.json", JSON.stringify(messages), null);
  }
}
