import {Request, Response, NextFunction} from 'express';

import {JobsService} from '../../services/index';
import {IComplements} from '../../../resources/interfaces';
import {Controller} from '../generic';
const Path = require('path');

export class JobController {
  private complementResponse = new Controller();
  private jobsService = new JobsService();

  searchJobs = async (
    request: Request,
    response: Response,
    nextOrError: NextFunction
  ) => {
    const data: IComplements.SearchJobs = request.body;
    const content = await this.jobsService.searchJobs(data);
    await this.complementResponse.returnData(response, nextOrError, content);
  };

  getJobInfoById = async (
    request: Request,
    response: Response,
    nextOrError: NextFunction
  ) => {
    const data: IComplements.ID = request.body;
    const content = await this.jobsService.getJobInfoById(data);
    await this.complementResponse.returnData(response, nextOrError, content);
  };
}
