import { Injectable } from "@angular/core";

@Injectable()
export class BrotherService {
    getBrothers() {
        return BROTHERS
    }
}


const BROTHERS = [
    {
        id: "timkralj",
        name: 'Tim Kralj',
        birthday: '12/17/1997',
        position: 'president',
        pussy: "No",
        imageUrl: '../../assets/Images/TimKralj.jpg'
    },
    {
        id: "johnnyreece",
        name: 'Johnny Reece',
        birthday: '1/5/1998',
        pussy: 'Yes',
        memory: "I loved endicott with all the canoes!",
        imageUrl: '../../assets/Images/TimKralj.jpg'
    },
    {
        id: "timkralj22",
        name: 'Tim Kralj',
        birthday: '12/17/1997',
        position: 'president',
        pussy: "No",
        imageUrl: '../../assets/Images/TimKralj.jpg'
    },
    {
        id: "johnnyreece22",
        name: 'Johnny Reece',
        birthday: '1/5/1998',
        pussy: 'Yes',
        memory: "I loved endicott with all the canoes!",
        imageUrl: '../../assets/Images/TimKralj.jpg'
    }
]