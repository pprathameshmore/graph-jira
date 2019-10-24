import {
  CHANGE_ISSUE_ENTITY_CLASS,
  FINDING_ISSUE_ENTITY_CLASS,
  INCIDENT_ISSUE_ENTITY_CLASS,
  ISSUE_ENTITY_CLASS,
  ISSUE_ENTITY_TYPE,
  IssueEntity,
  RISK_ISSUE_ENTITY_CLASS,
  VULN_ISSUE_ENTITY_CLASS,
} from "../entities";
import { Issue } from "../jira";
import generateEntityKey from "../utils/generateEntityKey";

const DONE = [
  "done",
  "accepted",
  "closed",
  "canceled",
  "cancelled",
  "completed",
  "finished",
  "mitigated",
  "remediated",
  "resolved",
  "transferred",
];

export function createIssueEntities(data: Issue[]): IssueEntity[] {
  return data.map(issue => {
    const status = issue.fields.status.name;
    const issueType = issue.fields.issuetype.name;
    let issueClass: string | string[] = issue.key.startsWith("PRODCM")
      ? CHANGE_ISSUE_ENTITY_CLASS
      : ISSUE_ENTITY_CLASS;
    switch (issueType.toLowerCase()) {
      case "change":
        issueClass = CHANGE_ISSUE_ENTITY_CLASS;
        break;
      case "finding":
        issueClass = FINDING_ISSUE_ENTITY_CLASS;
        break;
      case "incident":
        issueClass = INCIDENT_ISSUE_ENTITY_CLASS;
        break;
      case "risk":
        issueClass = RISK_ISSUE_ENTITY_CLASS;
        break;
      case "vulnerability":
        issueClass = VULN_ISSUE_ENTITY_CLASS;
        break;
    }
    const issueEntity: IssueEntity = {
      _key: generateEntityKey(ISSUE_ENTITY_TYPE, issue.id),
      _type: ISSUE_ENTITY_TYPE,
      _class: issueClass,
      id: issue.id,
      name: issue.key,
      displayName: issue.key,
      summary: issue.fields.summary,
      category: "issue",
      webLink: `https://${issue.self.split("/")[2]}/browse/${issue.key}`,
      status,
      active: DONE.indexOf(status.toLowerCase()) < 0,
      issueType,
      reporter: issue.fields.reporter && issue.fields.reporter.name,
      assignee:
        (issue.fields.assignee && issue.fields.assignee.name) || undefined,
      creator: issue.fields.creator && issue.fields.creator.name,
    };

    return issueEntity;
  });
}
