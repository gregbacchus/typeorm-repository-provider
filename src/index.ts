import { Connection, ObjectType } from 'typeorm';

export namespace Provider {
  export function forRepository(repository: ObjectType<{}>) {
    return {
      inject: [Connection],
      provide: repository.name,
      useFactory: (connection: Connection) => connection.getCustomRepository(repository),
    };
  }
}
