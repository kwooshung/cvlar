const types = require('./scripts/ks-cvlar.types.cjs');
const scopes = require('./scripts/ks-cvlar.scopes.cjs');
const { ConvertToLintTypes, ConvertToLintScopes } = require('./dist/index.cjs');

console.log('-------------------------------------');
console.log({
  'type-enum': [2, 'always', ConvertToLintTypes(types)],
  'scope-enum': [2, 'always', ConvertToLintScopes(scopes)]
});

module.exports = {
  rules: {
    'type-enum': [2, 'always', ConvertToLintTypes(types)],
    'scope-enum': [2, 'always', ConvertToLintScopes(scopes)]
  }
};
