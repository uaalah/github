import { Box, CardContent, CardHeader, CardMedia, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import { IComment } from '../../api/issue/models/issue.model'

const Comment: FC<IComment> = ({ author, bodyHTML, created }) => {
  return (
    <Box sx={{borderRadius:0, display: 'flex', borderBottom:"1px solid #e3e3e3", py:2}}>
      <Stack>
        {console.log(author)}
        <Typography fontSize={'.85rem'} fontWeight={500}>{author.login}</Typography>
        <CardMedia
          image={author.avatar}
          component="img"
          sx={{width:'100px'}}
        />
      </Stack>
      
      <Typography
        component="div"
        dangerouslySetInnerHTML={{ __html: bodyHTML }}
        color="#737373"
        flex={'1 0'}
        pl={5}
      />
      
    </Box>
  )
}

export default Comment