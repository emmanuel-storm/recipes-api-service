import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db', // Remplace localhost par db
      port: 3306,
      username: 'manu',
      password: 'manu',
      database: 'recipes_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class RecipeModule {}
