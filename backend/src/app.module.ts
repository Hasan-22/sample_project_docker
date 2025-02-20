import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './repositories/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',   // Change to 'mysql' if using Docker
      port: 3306,
      username: 'user',    // Change to your MySQL username
      password: 'password',    // Change to your MySQL password
      database: 'nest_db', // Your database name
      entities: [User], // Register User entity
      synchronize: true, // Auto-create tables (disable in production)
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
