import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Scenario} from '../model/scenario.model';
import {Specification} from '../model/specification.model';
import {Test} from '../model/test.model';
import {Result} from '../model/result.model';

const AUTH_API = environment.apiUrl + '/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  addScenario(name: string, description: string): Observable<any> {
    return this.httpClient.post(AUTH_API + '/scenario/add', {
      name,
      description
    });
  }

  getScenarios(): Observable<Scenario[]> {
    return this.httpClient.get<Scenario[]>(AUTH_API + '/scenario/show');
  }

  getSpecs(): Observable<Specification[]> {
    return this.httpClient.get<Specification[]>(AUTH_API + '/spec/show');
  }

  getTests(): Observable<Test[]> {
    return this.httpClient.get<Test[]>(AUTH_API + '/test/show');
  }

  addTest(name: string, data: string, execDate: Date, testType: string, scenarioName: string, specName: string): Observable<any> {
    return this.httpClient.post(AUTH_API + '/test/add', {
      'name': name,
      'test_type': testType,
      'data': data,
      'execute_date': execDate,
      'scenario_name': scenarioName,
      'spec_name': specName
    });
  }

  addSpec(spec: Specification): Observable<any> {
    return this.httpClient.post(AUTH_API + '/spec/add', {
      spec_name: spec.spec_name,
      paramInt1: spec.paramInt1,
      paramStr2: spec.paramStr2,
      paramStr3: spec.paramStr3
    });
  }

  getResults(): Observable<Result[]> {
    return this.httpClient.get<Result[]>(AUTH_API + '/result/show');

  }
}
