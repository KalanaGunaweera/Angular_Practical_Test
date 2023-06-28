import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import{BottomSheetOverviewExampleSheetComponent} from './bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private _bottomSheet: MatBottomSheet){}
  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }

}
