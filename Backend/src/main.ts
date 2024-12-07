import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();

  app.useStaticAssets(path.join(__dirname, '..', 'public'));

  const expressApp = app.getHttpAdapter().getInstance();
  expressApp.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/', 'index.html'));
  });

  const PORT = process.env.PORT || 4000;
  await app.listen(PORT);
  console.log(`Server is running on port ${PORT}`);
}
bootstrap();
