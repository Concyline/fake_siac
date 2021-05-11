import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const port: number = +process.env.PORT || 3300;
  await app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
  });
}
bootstrap();
