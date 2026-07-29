import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      [`${process.env.EXPO_PUBLIC_SUPABASE_URL!}/graphql/v1`]: {
        headers: {
          apiKey: process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        },
      },
    },
  ],
  documents: [
    './**/*.{ts,tsx}',
    '!./node_modules/**'
  ],
  ignoreNoDocuments: true,
  generates: {
    './graphql/': {
      preset: 'client',
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true
      }
    }
  }
}

export default config