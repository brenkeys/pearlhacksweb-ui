import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {ToDoItem} from "./toDoItem";

@Injectable({ providedIn: 'root' })
export class OrderService {

  private baseUrl = '';

  constructor(private apiclient: HttpClient){
    this.baseUrl = `${environment.protocol}://${environment.serverhost}:${environment.port}${environment.contextpath}`;
  }

  get() {
    return this.apiclient.get<ToDoItem[]>(this.baseUrl + `/`);
  }
}
