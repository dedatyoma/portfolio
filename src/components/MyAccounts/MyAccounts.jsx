import './MyAccounts.css'
import data from '../../data/accountData.json'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, TableContainer, TableRow, TableCell,Container, TableHead, TableBody, IconButton, Table } from '@mui/material'

const MyAccounts = () => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return '#4CAF50'; 
      case 'Under review': return '#2196F3'; 
      default: return '#888';
    }
  };


  const getLossRatioColor = (ratio) => {
    const numRatio = parseInt(ratio);
    if (numRatio < 30) return '#4CAF50'; 
    if (numRatio < 50) return '#9ACD32'; 
    if (numRatio < 60) return '#FFC107'; 
    return '#F44336'; 
  };

  const formatTriage = (value) => {
    return (
      <div className="triage-value" style={{ 
        backgroundColor: '#1A237E', 
        color: 'white',
        borderRadius: '16px',
        padding: '2px 10px',
        display: 'block',
        textAlign: 'center',
        fontSize: '14px'
      }}>
        {value}
      </div>
    );
  };

  const formatWinnability = (value) => {
    const strength = value.toLowerCase();
    const dotCount = strength.includes('very') ? 4 : (strength.includes('strong') ? 4 : (strength.includes('medium') ? 4 : 2));
    
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', border:'3px solid rgb(23, 52, 97)', borderRadius: '16px', padding : '5px'}}>
        {[...Array(dotCount)].map((_, i) => (
          <div key={i} style={{ 
            width: '8px', 
            height: '8px', 
            borderRadius: '50%', 
            backgroundColor: 'rgb(46, 113, 214)' 
          }} />
        ))}
        <span style={{ marginLeft: '4px', color: '#fff' }}>{value}</span>
      </div>
    );
  };

  return (
   <Box className='account-box'>
      <Container className='account-container'>
          <h1 className='account-caption'>My accounts</h1>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input className='account-search' type="search" placeholder="Search" />
            <div className="buttons" style={{ display: 'flex', gap: '10px' }}>
              <button className='account-button' style={{ backgroundColor: 'rgba(30, 30, 200, 0.7)', color: 'white', border: 'none', borderRadius: '20px', padding: '5px 30px', fontSize:'15px',  fontWeight: 'bold', cursor: 'pointer' }}>Filter</button>
              <button className='account-button' style={{  backgroundColor: 'rgba(30, 30, 200, 0.7)', color: 'white', border: 'none', borderRadius: '20px', padding: '5px 30px', fontSize:'15px',  fontWeight: 'bold', cursor: 'pointer'  }}>Sort</button>
              <button className='account-button' style={{ backgroundColor: 'rgba(30, 30, 200, 0.7)', color: 'white', border: 'none', borderRadius: '20px', padding: '5px 30px',fontSize:'15px',  fontWeight: 'bold', cursor: 'pointer'  }}>Group</button>
              <button className='account-button' style={{  backgroundColor: 'rgb(30, 120, 255)', color: 'white', border: 'none', borderRadius: '20px', padding: '5px 30px', fontSize:'15px', fontWeight: 'bold', cursor: 'pointer'  }}>+ New</button>
            </div>
          </div>
      </Container>
      <TableContainer className='account-table' sx={{overflowX: 'auto'}}>
        <Table>
          <TableHead>
            <TableRow sx={{bgcolor:'rgba(78, 76, 76, 0.21)'}}>
              <TableCell sx={{ color: '#8B8D92', borderBottom: 'none' }}>ACCOUNT NAME/TYPE</TableCell>
              <TableCell sx={{ color: '#8B8D92', borderBottom: 'none' }}>LINE</TableCell>
              <TableCell sx={{ color: '#8B8D92', borderBottom: 'none' }}>BROKER</TableCell>
              <TableCell sx={{ color: '#8B8D92', borderBottom: 'none' }}>RENEWAL DATE</TableCell>
              <TableCell sx={{ color: '#8B8D92', borderBottom: 'none' }}>PREMIUM</TableCell>
              <TableCell sx={{ color: '#8B8D92', borderBottom: 'none' }}>RATED PREMIUM</TableCell>
              <TableCell sx={{ color: '#8B8D92', borderBottom: 'none' }}>LOSS RATIO</TableCell>
              <TableCell sx={{ color: '#8B8D92', borderBottom: 'none' }}>APPETITE</TableCell>
              <TableCell sx={{ color: '#8B8D92', borderBottom: 'none' }}>STATUS</TableCell>
              <TableCell sx={{ color: '#8B8D92', borderBottom: 'none' }}>TRIAGE</TableCell>
              <TableCell sx={{ color: '#8B8D92', borderBottom: 'none' }}>WINNABILITY</TableCell>
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
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <span style={{ color: '#fff', fontWeight: 'bold' }}>{row.account}</span>
                    <span style={{ color: '#8B8D92', fontSize: '0.8rem' }}>{row.type}</span>
                  </Box>
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <div style={{ color: '#fff' }}>{row.line}</div>
                </TableCell>
                <TableCell 
                  sx={{ 
                    color: '#fff',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {row.broker}
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: '#fff' }}>
                  {row.renewalDate}
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: '#3F51B5', fontWeight: 'bold' }}>
                  {row.premium}
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: '#fff' }}>
                  {row.ratedPremium}
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <span style={{ 
                    backgroundColor: getLossRatioColor(row.lossRatio),
                    color: 'black',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                  }}>
                    {row.lossRatio}
                  </span>
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: '#fff', textTransform: 'uppercase' }}>
                  {row.apppetite}
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <span style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{ 
                      width: '10px', 
                      height: '10px', 
                      borderRadius: '50%', 
                      backgroundColor: getStatusColor(row.statusData.label)
                    }}></span>
                    <span style={{ color: '#fff' }}>{row.statusData.label}</span>
                  </span>
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  {formatTriage(row.triage)}
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  {formatWinnability(row.winnablitity)}
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
  )
}

export default MyAccounts