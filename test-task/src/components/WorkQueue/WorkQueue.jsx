import data from '../../data/mockData.json'
import {
  Avatar,
  Box,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  IconButton,
  Typography
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../WorkQueue/WorkQueue.css';

const WorkQueue = () => {
  return (
    <Box className='work-queue'>
     <Typography className='caption' variant='h5'>Work Queue</Typography>
      <Box className='filters-container'> 
      <ul className='filters'>
        <button className='filter-item-active'>Assigned to me (12)</button>
        <button className='filter-item'>Pending Review (8)</button>
        <button className='filter-item'>Referrals (3)</button>
      </ul>
    </Box>
      <TableContainer className='container'>
        <Table>
          <TableHead>
            <TableRow sx={{bgcolor:'rgba(78, 76, 76, 0.21)'}}>
              <TableCell sx={{ color: '#8B8D92', borderBottom: 'none' }}>ORIGINATOR</TableCell>
              <TableCell sx={{ color: '#8B8D92', borderBottom: 'none' }}>CLIENT/LINE</TableCell>
              <TableCell sx={{ color: '#8B8D92', borderBottom: 'none' }}>TYPE</TableCell>
              <TableCell sx={{ color: '#8B8D92', borderBottom: 'none' }}>STATUS</TableCell>
              <TableCell sx={{ color: '#8B8D92', borderBottom: 'none' }}>CREATED</TableCell>
              <TableCell sx={{ borderBottom: 'none' }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, idx) => (
              <TableRow 
                key={idx}
                sx={{ 
                  '&:hover': { 
                    backgroundColor: 'rgba(255, 255, 255, 0.05)' 
                  }
                }}
              >
                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar 
                      sx={{ 
                        bgcolor: '#2C3248',
                        color: '#4E73DF',
                        width: 32,
                        height: 32,
                        fontSize: '14px'
                      }}
                    >
                      {row.initials}
                    </Avatar>
                    <span style={{ color: '#fff' }}>{row.name}</span>
                  </Box>
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <div style={{ color: '#fff' }}>{row.client}</div>
                  <Typography sx={{ fontSize: "13px", color: "#8B8D92" }}>
                    {row.line}
                  </Typography>
                </TableCell>
                <TableCell 
                  sx={{ 
                    color: '#fff',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {row.type}
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      component="span"
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: row.status.label === 'New' 
                          ? '#4E73DF' 
                          : row.status.label === 'Pending Review'
                          ? '#FFC107'
                          : '#4CAF50',
                        display: 'inline-block'
                      }}
                    />
                    <span style={{ color: '#fff' }}>{row.status.label}</span>
                  </Box>
                </TableCell>
                <TableCell 
                  sx={{ 
                    color: '#fff',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {row.date}
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <IconButton sx={{ color: 'white', border:'1px solid white' }}>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default WorkQueue;