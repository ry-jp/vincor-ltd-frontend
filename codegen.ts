import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'https://vincor.com/graphql',
  // documents: ['src/**/*.vue'],
  documents: ['woonuxt_base/**/*.vue'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations', 'typescript-vue-apollo'],
      config: {
        useTypeImports: true,
        maybeValue: 'T',
        withCompositionFunctions: true,
        vueApolloComposableImportFrom: 'vue'
      }
    }
  }
}
 
export default config