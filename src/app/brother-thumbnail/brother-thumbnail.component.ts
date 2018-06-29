import { Component, Input } from '@angular/core';

@Component({
    selector: 'brother-thumbnail',
    templateUrl: './brother-thumbnail.component.html',
    styleUrls: ['./brother-thumbnail.component.css']
})

export class BrotherThumbnailComponent{
    @Input() brother:any
}