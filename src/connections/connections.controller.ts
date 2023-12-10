import { Controller, Get, Render } from '@nestjs/common';

@Controller('/task3')
export class ConnectionsController {
  @Get('/subpage')
  @Render('subpage')
  subpage() {}

  @Get('/counter')
  @Render('counter')
  counter() {}
}