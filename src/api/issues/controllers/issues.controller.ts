import { IGetIssuesSearchIssue, IGetIssuesSearchIssueLabel, IIssueItemList, ILabel } from "../models/issues.model";



const getLabels: (nodes: IGetIssuesSearchIssueLabel[]) => ILabel[] = (nodes) => {
    const labelList: ILabel[] = [];
    nodes.map(node => {
      const el: ILabel = {
        color: node.color,
        name: node.name,
      }
      return labelList.push(el)
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
    return issuesList.push(el);
  })
  return issuesList
}


// TODO : LABEL TEXT COLOR
// interface IContrast {
//   ratio: string;
//   AA: string;
//   AALarge: string;
//   AAA: string;
//   AAALarge: string;
// }
export const checkContrast: (fcolor: string, bcolor: string) => Promise<boolean> = async (fcolor, bcolor) => {
  const url = `https://webaim.org/resources/contrastchecker/?fcolor=${fcolor}&bcolor=${bcolor}&api`;
  const resp = await fetch(url);
  const { ratio } = await resp.json();
  return Number(ratio) >= 4
}

