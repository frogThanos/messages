import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { createMessageDto } from "./dtos/create-message.dto";

@Controller("messages")
export class MessagesController {
  @Get()
  listMessages() {
    return "listMessages";
  }

  @Post()
  createMessage(@Body() body: createMessageDto) {
    console.log("createMessage body:", body);
  }

  @Get("/:id")
  getMessage(@Param("id") id: string) {
    console.log("getMessage id:", id);
  }
}
