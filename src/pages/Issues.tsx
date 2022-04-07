import React, { FC, useCallback, useEffect, useState } from 'react'
import { Box, Button, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CancelIcon from '@mui/icons-material/Cancel';

import { IReduxIssueQueryState } from '../redux/issuesQuery/models';
import useFetchData from '../hooks/useFetchData';
import SearchBox from '../components/SearchBox';
import Loader from '../components/Loader';
import IssuesList from '../components/issues/IssuesList';
import { RootState } from '../redux';
import { setStatus, setWord } from '../redux/issuesQuery/actions';
import defaultState from '../redux/issuesQuery/state';
import { saveState } from '../services/localStorage';


const Issues: FC = () => {
  const filters: IReduxIssueQueryState = useSelector((state: RootState) => state.issueQuery)
  const setQueryCB = useCallback<(...args:IReduxIssueQueryState[]) => string>(
    () => setQuery(filters),
    [filters],
  )
  const setQuery: (filters:IReduxIssueQueryState) => string = (filters) => `repo:facebook/react is:${filters.status} is:issue ${filters.word ? `in:title ${filters.word} in:body ${filters.word}` : ''}`
  const [issuesQuery, setIssuesQuery] = useState<string>(setQuery(filters))

  const dispatch = useDispatch()

  useEffect(() => {
      if (!!filters) {
        const newQuery: string = setQueryCB(filters);
        setIssuesQuery(newQuery);
        saveState('issueQuery', filters)
      }
    }, [filters, setQueryCB])
    
  const { loading, error, result } = useFetchData(issuesQuery)
  
  const handlerReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatch(setStatus(defaultState.status));
    dispatch(setWord(defaultState.word))
  }

  if (loading) return (
    <>
      <SearchBox  />
      <Box p={10} display="flex" alignItems="center" justifyContent="center" color="primary.light">
        <Loader color="currentColor" size={100} />
      </Box>
    </>
  );
  if (error) return <p>Error: {error}</p>; 
 
  
  
  return (
    <>
      <SearchBox  />
    {console.log('result', result)}
      <Container sx={{ py: 6, position: 'relative' }}>
        {(filters.status !== "open" || filters.word !== "") && (
          <Button
            sx={{ position: 'absolute', top: '0.5rem' }}
            color="secondary"
            startIcon={<CancelIcon />}
            onClick={handlerReset}
          >Clear current search</Button>
        )}
        {result && <IssuesList {...result!} />}
      </Container>
  </>
  )
}

export default Issues;