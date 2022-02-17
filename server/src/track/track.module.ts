import { Module }                 from '@nestjs/common';
import { TrackService }           from './track.service';
import { TrackController }        from './track.controller';
import { MongooseModule }         from '@nestjs/mongoose';
import { Comment, CommentSchema } from './schemas/coment.schema';
import { Track, TrackSchema }     from './schemas/track.schema';
import { FileService }            from 'src/file/file.service';

@Module({
  providers: [TrackService, FileService],
  controllers: [TrackController],
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ]
})
export class TrackModule {}
