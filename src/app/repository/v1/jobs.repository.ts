import {Repository} from '../generic';
import {Jobs} from '../../models/Jobs';

const {Op, QueryTypes, Sequelize} = require('sequelize');

// export
export class JobsRepository extends Repository {

  searchJobs = async (needle: string, limit: number, offset: number) => {
    const jobs = await this.all({
      where: {name: {[Op.like]: '%' + needle + '%'}},
      limit,
      offset
    });

    const totalJobs = await this.one({
      attributes: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'totalRows']],
      where: {name: {[Op.like]: '%' + needle + '%'}},
    });

    return {jobs, total: totalJobs.dataValues.totalRows};
  };

  getJobInfoById = async (jobId: number) => {
    const job = await this.one({
      where: {
        id: jobId
      }
    });

    return job;
  };

  constructor() {
    super();
    this.setModel(Jobs);
  }
}
