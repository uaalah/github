import React, { FC, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux'
import { setStatus, setWord } from '../redux/issuesQuery/actions'
import { Box, Container, IconButton, InputBase, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { IReduxIssueQueryState } from '../redux/issuesQuery/models'

const SearchBox:FC = () => {
  const query: IReduxIssueQueryState = useSelector((state: RootState) => state.issueQuery)
  const [newWord, setNewWord] = useState<string>('')
  const dispatch = useDispatch();

  useEffect(() => {
    setNewWord(query.word)
  }, [query.word])

  const handleToggleChange = (
    event: React.MouseEvent<HTMLElement>,
    newStatus: "open" | "closed"
  ) => {
    if (newStatus !== query.status) dispatch(setStatus(newStatus))
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewWord(event.target.value);
  };
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    dispatch(setWord(newWord))
  }
    
  return (
    <Box bgcolor="primary.light">
      <Container>
        <Stack direction={'row'}>
          <ToggleButtonGroup
            color="secondary"
            exclusive
            value={query.status}
            onChange={handleToggleChange}
          >
            <ToggleButton disabled={query.status === 'open'} value="open">Open</ToggleButton>
            <ToggleButton disabled={query.status === 'closed'} value="closed">Closed</ToggleButton>
          </ToggleButtonGroup>

          <Box component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, flex: '1 0' }} onSubmit={handleSubmit}>
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search issues"
              inputProps={{ 'aria-label': 'search issues' }}
              fullWidth
              value={newWord}
              onChange={handleInputChange}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default SearchBox