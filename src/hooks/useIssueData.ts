import { useEffect, useState } from 'react'
import { ApolloError, useQuery } from '@apollo/client';
import { IIssue } from '../api/issue/models/issue.model';
import { GET_ISSUE } from '../api/issue/services/issue.services';
import { getIssue } from '../api/issue/controllers/issue.controller';

const useIssueData: (num_issue: number, comments: number) => ({ loading: boolean, error: ApolloError | undefined, result: IIssue | undefined }) = (num_issue, comments) => {
  const [result, setResult] = useState<IIssue | undefined>(undefined)
  const { loading, error, data } = useQuery(GET_ISSUE, {
    variables: {
      num_issue: num_issue,
      comments: comments
    },
    fetchPolicy: "cache-first",
    nextFetchPolicy: "cache-only"
  })

  useEffect(() => {
    if (data !== undefined) {
      const issue: IIssue = getIssue(data.repository.issue)
      setResult(issue)
    }
  }, [data])

  console.log('result', result)

  return({ loading, error, result})
}



// const useIssueData: (num_issue: number, comments: number) => ({ loading: boolean, error: ApolloError | undefined, result: IIssue | undefined }) = (num_issue, comments) => {
//   const [result, setResult] = useState<IIssue | undefined>(undefined)
//   const { loading, error, data } = useQuery(GET_ISSUE, {
//     variables: {
//       num_issue: num_issue,
//       comments: comments
//     },
//     fetchPolicy: "cache-first",
//     nextFetchPolicy: "cache-only"
//   })

//   useEffect(() => {
//     console.log('data', data)
//     if (data !== undefined) {
//       // const issue: IIssue = {
//         // issueCount: data.search.issueCount,
//         // issues: getIssues(data.search.nodes),
//       // }
//       // setResult(issue) 
//     }
//   }, [data])

//   return({ loading, error, result})
// }

export default useIssueData