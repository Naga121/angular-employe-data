import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  
  
  
  <div class="container">
  <div class="row">
    <div class="col-sm-2">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary btn-outline-dark text-light"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Row
      </button>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                (click)="postData()"
              >
                Save Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-1">
    <div class="col-md-12">
      <table class="table table-striped table-hover">
        <thead class="text-center text-light bg-dark">
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Role</th>
          <th>Skills</th>
          <th>Action</th>
        </thead>
        <tbody class="text-center text-bold">
          <tr
            *ngFor="
              let x of empData | paginate: { itemsPerPage: 5, currentPage: p };
              let i = index
            "
          >
            <td>{{ i + 1 }}</td>
            <td>{{ x.name }}</td>
            <td>{{ x.email }}</td>
            <td>{{ x.mobile }}</td>
            <td>{{ x.role }}</td>
            <td>{{ x.skills }}</td>
            <td>
              <button
                class="btn btn-sm btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
              >
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<!-- Delete modal -->
<div
  class="modal fade"
  id="deleteModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="card">
        <div class="card-header bg-dark text-warning">
          <p class="h4 text-center">Delete Employee Date row</p>
        </div>
        <div class="card-body">
          <p class="h6 text-center">Do You Want to Delete ?</p>
        </div>
        <div class="card-footer text-center">
          
          <div class="btn-group" role="group" aria-label="Basic mixed styles example" >
            <button type="button" class="btn btn-warning" data-bs-dismiss="modal"  >  NO </button>
            <button type="button" class="btn btn-danger" >  Yes </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
