import React, { FC } from 'react'
import { Box, Card, Typography } from '@mui/material';
import { IIssueList } from '../../models/issues.model';
import IssuesListItem from './IssuesListItem';

const IssuesList: FC<IIssueList> = (props) => {
  const { issueCount, issues } = props;
  return (
    <Card variant="outlined" sx={{ borderRadius: 2, borderColor:"#eaeaea"}}>
      <Typography variant='h2' px="1rem" py=".5rem" bgcolor="secondary.light" color="secondary.main">
      {/* <Typography variant='h2'> */}
        Issues.<small>{issueCount}</small>
      </Typography>
      
      {issues.map(issue => <IssuesListItem key={issue.number} {...issue} />)}
    </Card>
  )
}

export default IssuesList;