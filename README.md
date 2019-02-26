# typeorm-repository-provider

Custom repository provider for TypeORM in NestJS.

## Installation

```
npm install typeorm-repository-provider
```

## Usage

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provider } from 'typeorm-repository-provider';

@Module({
  imports: [
    TypeOrmModule.forFeature([MyEntity]),
  ],
  providers: [
    Provider.forRepository(MyCustomRepository),
  ],
})
export class MyModule { }
```
