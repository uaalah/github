import { useEffect, useState } from 'react'
import { ApolloError, useQuery } from '@apollo/client';
import { GET_ISSUES } from '../services/apiService';
import { IGetIssues, IGetIssuesVars, IIssueList } from '../models/issues.model';
import { getIssues } from '../controllers/issues.controller';

const useFetchData: (issuesQuery: string) => ({ loading: boolean, error: ApolloError | undefined, result: IIssueList | undefined }) = (issuesQuery) => {
  const [result, setResult] = useState<IIssueList | undefined>(undefined)
  const { loading, error, data } = useQuery<IGetIssues, IGetIssuesVars>(GET_ISSUES, {
    variables: {
      query: issuesQuery
    },
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first"
  })

  useEffect(() => {
    if (data !== undefined) {
      const list: IIssueList = {
        issueCount: data.search.issueCount,
        issues: getIssues(data.search.nodes),
      }
      setResult(list) 
    }
  }, [data])

  return({ loading, error, result})
}

export default useFetchData