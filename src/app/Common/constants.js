
// import { config } from '../../config/index';
// Get api base from config
// const apiBase = config.apiBaseUrl;

const apiBase = window.getEnvConfigurationProp("apiBase");
export const REGISTER_URL  = `${apiBase}register`;