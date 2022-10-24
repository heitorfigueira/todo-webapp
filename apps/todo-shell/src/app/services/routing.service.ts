import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Session } from '@authentication-domain';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store) { }

  navigate() {
    this.router.navigate(['/administration'], { replaceUrl: true })
  }
}
