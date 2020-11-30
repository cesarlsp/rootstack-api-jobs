import {Router} from 'express';

import {JobController} from '../../../app/controllers';
import {accessTokenMiddleware, authTokenMiddleware} from '../../middleware';

const router = Router();
const jobController = new JobController();

// ADD CRUD
router.post(
    '/searchJobs',
    authTokenMiddleware,
    jobController.searchJobs
  );

router.post(
    '/getJobInfoById',
    authTokenMiddleware,
    jobController.getJobInfoById
  );

export default router;
