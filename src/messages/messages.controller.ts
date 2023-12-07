import { Body, Controller, Get, Param, Post } from "@nestjs/common";

@Controller("messages")
export class MessagesController {
  @Get()
  listMessages() {
    return "listMessages";
  }

  @Post()
  createMessage(@Body() body: any) {
    console.log("createMessage body:", body);
  }

  @Get("/:id")
  getMessage(@Param("id") id: string) {
    console.log("getMessage id:", id);
  }
}
