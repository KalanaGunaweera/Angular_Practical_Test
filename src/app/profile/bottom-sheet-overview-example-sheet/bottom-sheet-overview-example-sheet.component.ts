import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  templateUrl: './bottom-sheet-overview-example-sheet.component.html',
  styleUrls: ['./bottom-sheet-overview-example-sheet.component.css']
})
export class BottomSheetOverviewExampleSheetComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheetComponent>){}
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
