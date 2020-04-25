
import { HikeService } from './../../services/hike.service';
import { Component, OnInit } from '@angular/core';
import { Hike } from 'src/app/model/hike';

@Component({
  selector: 'app-hike-list',
  templateUrl: './hike-list.component.html',
  styleUrls: ['./hike-list.component.css']
})
export class HikeListComponent implements OnInit {

  selected =null;
  hikeList: Hike[] = [];
  newHike : Hike = new Hike();
  editHike: Hike =null;

  constructor(
    private hikeService: HikeService
  ) { }

  ngOnInit(): void {
    this.loadHike();
  }
  loadHike() {
    this.hikeService.index().subscribe(
      data => this.hikeList = data,
      err => {
        console.error('Error in our loadHike() method ' + err);
      }
    );
  }

  // getHikeCount(): number {
  //   return this.incompletePipe.transform(this.hikes, false).length;
  // }

  setSelected(hike: Hike) {
    this.selected = hike;
    console.log(this.selected);

  }

  resetSelected(){
    this.selected = null;
  }
  deleteHike(id: number) {
    this.hikeService.delete(id).subscribe(
      data=> {
        this.loadHike();
        this.selected = null;
      },
      err => {
        console.error('error in deleting hike component')
      }
    )
  }

  createHike(newHike : Hike) {
    console.log(newHike);
    this.hikeService.create(newHike).subscribe(
      data=> {
        this.loadHike();
        this.resetSelected();
        this.newHike = new Hike();
      },
      err => {
      console.error('Error in our loadHike() method ' + err);
    }
    );
  }

  setEditHike() {
    this.editHike = Object.assign({}, this.selected);
  }
  updateHike(hike: Hike) {
    console.log(hike);
    this.hikeService.update(hike).subscribe(
      yay => {
        this.loadHike();
        this.selected = yay;
        this.editHike = null;
      },
      boo => {
        console.error('update hike error');
        console.error(boo);

      }
    )
    this.editHike = null;
  }

  displayHike(hike: Hike): void {
    this.selected = hike;
  }
  displayTable(): void {
    this.selected = null;
  }

}
