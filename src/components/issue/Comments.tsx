import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
import { IComments } from '../../api/issue/models/issue.model'
import Comment from './Comment'

const Comments: FC<IComments> = ({ totalCount, comments }) => {
  console.log('comments', comments)
  return (
    <Box borderRadius={4} overflow="hidden">
      <Box sx={{backgroundColor: 'primary.dark'}} py={2} px={3}>
        <Typography variant='h5' color={'#fff'}>
          Comments
        </Typography>
      </Box>
      {comments.map(comment => <Comment key={comment.created} {...comment}>comment</Comment>)}
    </Box>
  )
}

export default Comments