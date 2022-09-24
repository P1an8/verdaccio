export { getDefaultConfig, ConfigBuilder } from '@verdaccio/config';
export { constants } from '@verdaccio/core';
export { Registry } from 'verdaccio';
export { initialSetup, getConfigPath, Setup } from './registry';
export {
  addNpmPrefix,
  addYarnClassicPrefix,
  addRegistry,
  prepareYarnModernProject,
  prepareGenericEmptyProject,
  nJSONParse,
} from './utils';
export { exec, ExecOutput } from './process';
export { callRegistry } from './web';