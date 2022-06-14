import express from 'express';
import AppController from '../controllers/AppController';


  const router = express.Router();
  app.use('/', router);

 // App Controller

  // Returns if Redis and DB is alive.
  router.get('/status', (req, res) => {
    AppController.getStatus(req, res);
  });

  // should return the number of users and files in DB
  router.get('/stats', (req, res) => {
    AppController.getStats(req, res);
  });
