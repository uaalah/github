import React, { FC, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_ISSUES } from '../services/apiService';
import { IGetIssues, IGetIssuesVars, IIssueList } from '../models/issues.model';
import { Box, Container } from '@mui/material';
import SearchBox from '../components/SearchBox';
import Loader from '../components/Loader';
import IssuesList from '../components/issues/IssuesList';
import useFetchData from '../hooks/useFetchData';

interface IFilters {
  status: "open" | "closed";
  word: string;
}

const initFilters: IFilters = {
  status: "closed",
  word: '',
}

const Issues: FC = () => {
  const [filters, setFilters] = useState<IFilters>(initFilters)
  const [issuesQuery, setIssuesQuery] = useState<string>(`repo:facebook/react is:${filters.status} is:issue in:title ${filters.word} in:body ${filters.word}`)
  console.log('issuesQuery', issuesQuery)
  // const { loading, error, data } = useQuery<IGetIssues, IGetIssuesVars>(GET_ISSUES, {
  const { loading, error, result } = useFetchData(issuesQuery)
  
  if (loading) return (
    <Box p={10} display="flex" alignItems="center" justifyContent="center" color="primary.light">
      <Loader color="currentColor" size={100} />
    </Box>
  );
  if (error) return <p>Error: {error}</p>; 
 
  
  
  return (
    <>
      <SearchBox />
    {console.log('result', result)}
      <Container>
        <p>All issues</p>
        {result && <IssuesList {...result!} />}
      </Container>
  </>
  )
}

export default Issues;