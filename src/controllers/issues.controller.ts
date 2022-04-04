import { IGetIssuesSearchIssue, IGetIssuesSearchIssueLabel, IIssueItemList, ILabel } from "../models/issues.model";


const getLabels: (nodes: IGetIssuesSearchIssueLabel[]) => ILabel[] = (nodes) => {
    const labelList: ILabel[] = [];
    nodes.map(node => {
      const el: ILabel = {
        color: node.color,
        name: node.name,
      }
      labelList.push(el)
    })
    return labelList

}
  
export const getIssues: (nodes: IGetIssuesSearchIssue[]) => IIssueItemList[] = (nodes) => {
  const issuesList: IIssueItemList[] = []
  nodes.map(node => {
    const el: IIssueItemList = {
      comments: node.comments.totalCount,
      number: node.number,
      state: node.state,
      title: node.title,
      labels: getLabels(node.labels.nodes)
    }
    issuesList.push(el);
  })
  return issuesList
}

interface IContrast {
  ratio: string;
  AA: string;
  AALarge: string;
  AAA: string;
  AAALarge: string;
}
export const checkContrast: (fcolor: string, bcolor: string) => boolean = (fcolor, bcolor) => {
  const contrast:IContrast = JSON.parse(`https://webaim.org/resources/contrastchecker/?fcolor=${fcolor}&bcolor=${bcolor}&api`)
  return Number(contrast.ratio) >= 4.5;
}