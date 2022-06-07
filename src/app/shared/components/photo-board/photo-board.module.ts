import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoFrameModule } from 'src/app/shared/components/photo-frame/photo-frame.module';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';

@NgModule({
  declarations: [PhotoBoardComponent],
  imports: [CommonModule, PhotoFrameModule],
  exports: [PhotoBoardComponent],
  providers: [PhotoBoardService]
})
export class PhotoBoardModule {}
