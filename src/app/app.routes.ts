import { Routes } from '@angular/router';
import { UserList } from './components/user-list/user-list.component';
import { UserForm } from './components/user-form/user-form.component';

export const routes: Routes = [
  { path: '', component: UserList },
  { path: 'add-user', component: UserForm },
  { path: 'edit-user/:id', component: UserForm }
];
