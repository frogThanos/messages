import { MessagesRepository } from "./messages.repository";

export class MessagesService {
  messagesRepo: MessagesRepository;
  constructor() {
    // service is creating it's own dependencies
    // don't do this in real apps, we will refactor
    // this later to use dependency injection system
    this.messagesRepo = new MessagesRepository();
  }
  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  findAll() {
    return this.messagesRepo.findAll();
  }
  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
