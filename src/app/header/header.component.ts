import { Component, Output, EventEmitter } from '@angular/core'
import { DataStorageService } from '../shared/data-storage.service'
import { ThrowStmt } from '@angular/compiler'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService){}

    @Output() optionSelected = new EventEmitter<{option: string}>()

    onOptionSelect(e) {
        this.optionSelected.emit({
            option: e.target.id
        })
    }

    onSaveData() {
        this.dataStorageService.storeRecipes()
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes()
    }

}