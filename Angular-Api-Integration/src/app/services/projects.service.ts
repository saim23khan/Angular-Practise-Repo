import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

export interface Project {
  ProjectId: number;
  ProjectName?: string;
  ProjectCreatedAt?: string;
  ProjectEditedAt?: string;
  ProjectStatus?: boolean;
  ProjectCreatedBy?: number;
  KanbanBoards?: any[];
  ProjectAssigneds?: any[];
  ProjectCreatedByNavigation?: any;
  ProjectDetails?: any[];
  Reports?: any[];
  TaskAssignings?: any[];
}


export interface ProjectDetails {
  ProjectDetailsId: number;
  ProjectId: number;
  ProjectDetailsDescription?: string;
  ProjectDetailsRoleId?: number;
  ProjectDetailsProfileId?: number;
  ProjectDetailsCoverId?: number;
  ProjectDetailsCreatedAt?: string;
  ProjectDetailsEditedAt?: string;
  ProjectDetailsStatus?: boolean;
  Project?: Project;
}


@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends ApiService<ProjectDetails> {

  constructor(http: HttpClient) {
    super(http);
    this.apiUrl = 'http://192.168.1.109:7059/api/';
    this.apiController = 'project';
  }
}
