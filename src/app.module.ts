import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './modules/item/item.module';
import { QuizModule } from './modules/quiz/quiz.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ItemModule,
    QuizModule,
    UserModule,
    AuthModule,
    DatabaseModule,
    // TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    ConfigModule.forRoot({}),
    //hover forRoot and you'll see TypeOrmModuleOptions
    //move the below to typeorm.config.ts
    // type: 'postgres',
    // host: 'localhost',
    // port: 5432,
    // username: 'postgres',
    // password: 'Jyothi12!',
    // database: 'quiz',
    // entities: [],
    // synchronize: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
