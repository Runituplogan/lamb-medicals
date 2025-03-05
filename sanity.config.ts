'use client'

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route.
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk' // ✅ Corrected import

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schemaTypes } from './sanity/schemaTypes' // ✅ Corrected import

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Define the schema correctly
  schema: {
    types: schemaTypes,
  },
  plugins: [
    deskTool(), // ✅ Corrected
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
