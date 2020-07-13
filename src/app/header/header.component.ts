import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core'
import { DataStorageService } from '../shared/data-storage.service'
import { AuthService } from '../auth/auth.service'
import { Subscription } from 'rxjs'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit,OnDestroy {
    isAuthenticated = false
    // if we have a user we have an authenticated user
    private userSub: Subscription

    constructor(
        private dataStorageService: DataStorageService,
        private authService: AuthService
    ){}

    @Output() optionSelected = new EventEmitter<{option: string}>()

    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user
        })
    }
    onOptionSelect(e) {
        this.optionSelected.emit({
            option: e.target.id
        })
    }

    onSaveData() {
        this.dataStorageService.storeRecipes()
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe()
    }

    onLogout() {
        this.authService.logout()
    }

    ngOnDestroy() {
        this.userSub.unsubscribe()
    }

}