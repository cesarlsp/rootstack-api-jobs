import config from '../../../config';
import {IComplements} from '../../../resources/interfaces';
import {JobsRepository} from '../../repository/index';
import {generalServiceResponse} from '../../../utils/GeneralHelpers';
const Path = require('path');
// Language
const language = `../../../resources/lang/${config.LANGUAGE}`;
const lang = require(language);

export class JobsService {
  private jobsRepository: JobsRepository = new JobsRepository();


  searchJobs = async (request: IComplements.SearchJobs) => {
    const data = await this.jobsRepository.searchJobs(
      request.needle,
      request.limit,
      request.offset
    );
    return generalServiceResponse(data);
  };

  getJobInfoById = async (request: IComplements.ID) => {
    const data = await this.jobsRepository.getJobInfoById(request.id);
    return generalServiceResponse(data, 'Operación exitosa');
  };
}
