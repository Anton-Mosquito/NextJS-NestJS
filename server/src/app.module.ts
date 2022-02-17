import { Module } from "@nestjs/common";
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path';


@Module({
  controllers: [],
  providers: [],
  imports: [
    TrackModule,
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.dtw3h.mongodb.net/Music_Platform?retryWrites=true&w=majority'),
    FileModule,
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}), 
  ],
})
export class AppModule {

}