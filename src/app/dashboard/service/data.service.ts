import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Scenario} from '../model/scenario.model';
import {Specification} from '../model/specification.model';
import {Test} from '../model/test.model';
import {Result} from '../model/result.model';
import {Group} from "../model/group.model";

const AUTH_API = environment.apiUrl + '/dashboard';


// tslint:disable-next-line:class-name
export interface resultChartData {
  spec_name: string;
  time: number;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  addScenario(name: string, description: string): Promise<any> {
    return this.httpClient.post(AUTH_API + '/scenario/add', {
      name,
      description
    }).toPromise();
  }

  getScenarios(): Promise<Scenario[]> {
    return this.httpClient.get<Scenario[]>(AUTH_API + '/scenario/show').toPromise();
  }

  getSpecs(): Promise<Specification[]> {
    return this.httpClient.get<Specification[]>(AUTH_API + '/spec/show').toPromise();
  }

  getTests(): Observable<Test[]> {
    return this.httpClient.get<Test[]>(AUTH_API + '/test/show');
  }

  addTest(name: string, data: string, execDate: Date, testType: string, scenarioName: string, specName: string): Promise<any> {
    return this.httpClient.post(AUTH_API + '/test/add', {
      'name': name,
      'test_type': testType,
      'data': data,
      'execute_date': execDate,
      'scenario_name': scenarioName,
      'spec_name': specName
    }).toPromise();
  }

  addSpec(spec: Specification): Promise<any> {
    return this.httpClient.post(AUTH_API + '/spec/add', {
      spec_name: spec.spec_name,
      url: spec.url
    }).toPromise();
  }

  getResults(): Promise<Result[]> {
    return this.httpClient.get<Result[]>(AUTH_API + '/results/show')
      .toPromise();
  }

  addGroup(name: string, testName: string, specName: string): Promise<any> {
    return this.httpClient.post(AUTH_API + '/group/add', {
      'name': name,
      'test_name': testName,
      'spec_name': specName
    }).toPromise();
  }

  runGroup(name: string): Promise<any> {
    return this.httpClient.post(AUTH_API + '/group/run', {
      'name': name
    }).toPromise();
  }

  getGroup(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(AUTH_API + '/groups/show');
  }

  runTest(myName: string): Promise<any> {
    return this.httpClient.post(AUTH_API + '/test/run', {
      name: myName
    }).toPromise();
  }

  // TODO: Check with backendAPI
  getResultsCharts(name: string): Promise<resultChartData[]> {
    return this.httpClient.post<resultChartData[]>(AUTH_API + '/avg/show', {
      'test_name': name
    }).toPromise();
  }
}
