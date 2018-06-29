import { Component, Input } from '@angular/core';
import { BrotherService } from '../shared/brother.service';
@Component({
    selector: 'Brothers',
    templateUrl: './brothers.component.html'
}) 

export class BrothersComponent{
    brothers:any[]

    constructor (private brotherService:BrotherService){
        
    }
    ngOnInit() {
        this.brothers = this.brotherService.getBrothers()
    }
}