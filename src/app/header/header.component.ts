import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {

    @Output() optionSelected = new EventEmitter<{option: string}>()

    onOptionSelect(e) {
        this.optionSelected.emit({
            option: e.target.id
        })
    }

}