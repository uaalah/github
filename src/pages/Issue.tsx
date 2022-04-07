import { Box, Chip, Container, Stack, Typography } from '@mui/material';
import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader';
import useIssueData from '../hooks/useIssueData';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Comments from '../components/issue/Comments';

const NUM_COMMENTS = 100


const Issue: FC = () => {
  const { id } = useParams();
  const num_issue = Number(id)
  const { loading, error, result } = useIssueData(num_issue, NUM_COMMENTS);
  const ChipStyles = result?.state === "OPEN" ? {
    backgroundColor: '#359935',
    color: '#fff'
  } : {
    backgroundColor: '#993333',
    color: '#fff'
    
  }
  
  if (loading) return (
    <>
      <Box p={10} display="flex" alignItems="center" justifyContent="center" color="primary.light">
        <Loader color="currentColor" size={100} />
      </Box>
    </>
  );
  if (error) return <p>Error: {error}</p>; 

  return (
    <Container sx={{ py: 6, position: 'relative' }}>
      {result && (
        <>
          <Typography variant='h2' mb='.5rem'>
            {result.title}
          </Typography>
          <Stack direction={'row'} alignItems={'center'} mb={6}>
            <Chip label={result.state} sx={ChipStyles} />
            <Typography ml={4} flex="1 0">
              Created by <strong>{result.author.login}</strong>
            </Typography>
            <Box display="flex" alignItems="center">
              <ChatBubbleOutlineOutlinedIcon sx={{mr: .5, fontSize:'1rem'}} /> {result.comments.totalCount}
            </Box>
          </Stack>


          <Typography component="div" dangerouslySetInnerHTML={{ __html: result.bodyHTML }} />
          {console.log('...result.comments', result.comments)}
          <Comments {...result.comments} />
        </>
      )}
      </Container>
  )
}

export default Issue;