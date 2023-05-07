import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProjectsHandlerService } from 'src/app/services/projects-handler.service';
import { ProjectDetails } from 'src/app/services/projects.service';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit{

  // projects:any;
  constructor(private http:HttpClient,public projectService:ProjectsHandlerService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data) => {
      this.projectService.project = data;
      console.log(this.projectService.project);
    });
    console.log(this.projectService.project);
    // this.getProjects().subscribe((data) => {
    //   this.projects = data;
    //   console.log(this.projects);
    // });
  }

  getProjects(): Observable<ProjectDetails> {
    return this.http.get('https://localhost:7059/api/Project/GetAllProjects')
      .pipe(map((response: any) => response.Data));
  }



}
