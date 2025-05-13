import { Box } from '@mui/material'
import './QuickActions.css'
import React from 'react'

const QuickActions = () => {
  return (
    <Box className="quick-actions">
      <h1 className='actions-caption'>Quick actions</h1>
      <Box className="button-section">
        <button className='action'>New Submissions</button>
        <button className='action'>Quote Builder</button>
        <button className='action'>Risks Models</button>
        <button className='action'>Documental Upload</button>
      </Box>
    </Box>
  )
}

export default QuickActions
