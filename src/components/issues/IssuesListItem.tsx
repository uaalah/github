import React from 'react'
import { NavLink } from 'react-router-dom';
import { IIssueItemList } from '../../api/issues/models/issues.model'
import { Box, Chip, Stack, styled, Typography } from '@mui/material';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

const NavItem = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.secondary.main,
  fontWeight: 600,
  '&:hover': {
    color: '#000',
  }
}))


const IssuesListItem: React.FC<IIssueItemList> = (props) => {
  const { state, number, title, labels, comments } = props;
  
  return (
    <Stack direction="row" p={2} borderTop="1px solid #eaeaea">
      <Box pr={1}>
        {state === 'OPEN' ? (
          <PendingOutlinedIcon color='success' />
        ) : (
          <CheckCircleOutlinedIcon color='primary' />
        )}
      </Box>
      <Stack direction="column" flex="1 0">
        <NavItem to={`/issue/${number}`}>{title}</NavItem>
        <Box>
          <Typography component="span" fontSize="0.875rem">Number: {number}</Typography>
          {labels.map(label => (
            <Chip
              key={label.name}
              label={label.name}
              sx={{ color: `#fff`, backgroundColor: `#${label.color}`, ml: 1 }}
            />
          ))}
            
        </Box>
      </Stack>
      <Box display="flex" alignItems="center">
        <ChatBubbleOutlineOutlinedIcon sx={{mr: .5, fontSize:'1rem'}} /> {comments}
      </Box>
    </Stack>
  )
}

export default IssuesListItem