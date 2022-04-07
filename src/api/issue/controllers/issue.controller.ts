import { IComment, IGetIssue, IGetIssueComment, IIssue } from "../models/issue.model";

export const getComments: (nodes: IGetIssueComment[]) => IComment[] = (nodes) => {
  const commentList: IComment[] = [];
  nodes.map(node => {
    const item: IComment = {
      created: node.createdAt,
      bodyHTML: node.body,
      author: {
        login: node.author.login,
        avatar: node.author.avatarUrl
      }
    }
    commentList.push(item)
  })
  return commentList
}

export const getIssue: (issue: IGetIssue) => IIssue = (issue) => {
  const issueTemp: IIssue = {
    id: issue.id,
    author: {
      login: issue.author.login,
      avatar: issue.author.avatarUrl
    },
    created: issue.createdAt,
    state: issue.state,
    title: issue.title,
    bodyHTML: issue.bodyHTML,
    comments: {
      totalCount: issue.comments.totalCount,
      comments: getComments(issue.comments.nodes)
    }
  }
  return issueTemp
}
