import { Injectable } from '@angular/core';
import { ProjectDetails, ProjectsService } from './projects.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsHandlerService {
  project!:ProjectDetails[];

  constructor(private projectService:ProjectsService) { }

  getProjects():Observable<ProjectDetails[]>{
    return this.projectService.getAll('GetAllProjects')
      .pipe(map((response: any) => response.Data));
  }
}
