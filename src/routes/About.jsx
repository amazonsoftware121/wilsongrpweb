import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const About = () => {
  return (
    <>
      <div>About</div>
      <Grid container my={10} rowSpacing={2} columnSpacing={4}>
        <Grid item xs={6}>
          <Box bgcolor='primary.light'>
            Item 1
          </Box>
        </Grid>
        <Grid item>
          <Box bgcolor='primary.light'>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light'>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light'>
            Item 4
          </Box>
        </Grid>
      </Grid>
</>
  )
}

export default About