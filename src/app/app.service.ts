import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {ToDoItem} from "./toDoItem";

@Injectable({ providedIn: 'root' })
export class ToDoService {

  private baseUrl = '';

  constructor(private apiclient: HttpClient){
    this.baseUrl = `${environment.protocol}://${environment.serverhost}:${environment.port}${environment.contextpath}`;
  }

  get() {
    return this.apiclient.get<ToDoItem[]>(this.baseUrl + `/`);
  }

  add(item: ToDoItem) {
    return this.apiclient.post<ToDoItem>(this.baseUrl + `/item`, item);
  }

  completeItem(id) {
    return this.apiclient.put(this.baseUrl + `/item/${id}/mark-complete`, null);
  }

  delete(id) {
    return this.apiclient.delete(this.baseUrl + `/item/${id}`, id);
  }

}
