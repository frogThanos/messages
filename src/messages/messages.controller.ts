import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { createMessageDto } from "./dtos/create-message.dto";
import { MessagesService } from "./messages.service";

@Controller("messages")
export class MessagesController {
  messagesService: MessagesService;
  constructor() {
    // service is creating it's own dependencies
    // don't do this in real apps, we will refactor
    // this later to use dependency injection system
    this.messagesService = new MessagesService();
  }
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: createMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get("/:id")
  getMessage(@Param("id") id: string) {
    return this.messagesService.findOne(id);
  }
}
