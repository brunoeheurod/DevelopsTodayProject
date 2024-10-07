import { Router, Request, Response } from 'express';
import axios from 'axios';
import AvailableCountriesResponse from '../../types/available-countries.response';
import { getCountries } from '../controllers/get-countries';
import getCountryInfo from '../controllers/get-country-info';
const router = Router();

router.get('/countries', getCountries);

router.get('/country/:code', getCountryInfo);


export default router;