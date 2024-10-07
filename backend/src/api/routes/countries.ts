import { Router } from 'express';
import { getCountries } from '../controllers/get-countries';
import getCountryInfo from '../controllers/get-country-info';
const router = Router();

router.get('/countries', getCountries);

router.get('/country/:code', getCountryInfo);


export default router;