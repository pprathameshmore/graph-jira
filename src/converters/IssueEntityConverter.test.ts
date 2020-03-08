import { createIssueEntity } from ".";
import generateEntityKey from "../utils/generateEntityKey";
import getTime from "../utils/getTime";

const jiraIssue: any = {
  expand:
    "operations,versionedRepresentations,editmeta,changelog,renderedFields",
  id: "47788",
  self: "https://test.atlassian.net/rest/api/3/issue/47788",
  key: "J1TEMP-112",
  fields: {
    statuscategorychangedate: "2020-03-07T14:11:35.283-0500",
    issuetype: {
      self: "https://test.atlassian.net/rest/api/3/issuetype/10302",
      id: "10302",
      description: "A documented risk identified as part of a risk assessment",
      iconUrl:
        "https://test.atlassian.net/secure/viewavatar?size=medium&avatarId=10304&avatarType=issuetype",
      name: "Risk",
      subtask: false,
      avatarId: 10304,
    },
    timespent: null,
    project: {
      self: "https://test.atlassian.net/rest/api/3/project/10313",
      id: "10313",
      key: "J1TEMP",
      name: "JupiterOne Temp",
      projectTypeKey: "software",
      simplified: false,
      avatarUrls: {
        "48x48":
          "https://test.atlassian.net/secure/projectavatar?pid=10313&avatarId=10665",
        "24x24":
          "https://test.atlassian.net/secure/projectavatar?size=small&s=small&pid=10313&avatarId=10665",
        "16x16":
          "https://test.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=10313&avatarId=10665",
        "32x32":
          "https://test.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=10313&avatarId=10665",
      },
    },
    fixVersions: [],
    aggregatetimespent: null,
    customfield_10430: "myLaptop",
    customfield_10431: null,
    resolution: null,
    customfield_10310: null,
    customfield_10432: null,
    customfield_10311: null,
    customfield_10113: {
      hasEpicLinkFieldDependency: false,
      showField: false,
      nonEditableReason: {
        reason: "PLUGIN_LICENSE_ERROR",
        message:
          "Portfolio for Jira must be licensed for the Parent Link to be available.",
      },
    },
    customfield_10312: null,
    customfield_10433: {
      version: 1,
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "there is none",
            },
          ],
        },
      ],
    },
    customfield_10114: null,
    customfield_10423: null,
    customfield_10302: null,
    customfield_10303: null,
    customfield_10424: null,
    customfield_10304: null,
    customfield_10425: {
      self: "https://test.atlassian.net/rest/api/3/customFieldOption/10340",
      value: "3 - High / Certain",
      id: "10340",
    },
    customfield_10426: {
      self: "https://test.atlassian.net/rest/api/3/customFieldOption/10343",
      value: "3 - High",
      id: "10343",
    },
    customfield_10305: null,
    customfield_10306: null,
    customfield_10307: null,
    customfield_10428: {
      self: "https://test.atlassian.net/rest/api/3/customFieldOption/10353",
      value: "9",
      id: "10353",
    },
    resolutiondate: "2020-03-07T14:11:35.017-0500",
    customfield_10429: null,
    customfield_10308: null,
    customfield_10309: null,
    workratio: -1,
    lastViewed: null,
    watches: {
      self: "https://test.atlassian.net/rest/api/3/issue/J1TEMP-112/watchers",
      watchCount: 1,
      isWatching: false,
    },
    created: "2020-03-07T14:11:35.040-0500",
    customfield_10100: null,
    priority: {
      self: "https://test.atlassian.net/rest/api/3/priority/3",
      iconUrl: "https://test.atlassian.net/images/icons/priorities/medium.svg",
      name: "Medium",
      id: "3",
    },
    customfield_10101: null,
    customfield_10420: null,
    customfield_10421: null,
    customfield_10300: [],
    customfield_10102: null,
    labels: [],
    customfield_10301: null,
    customfield_10422: null,
    customfield_10414: {
      version: 1,
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "nothing can be done",
            },
          ],
        },
      ],
    },
    aggregatetimeoriginalestimate: null,
    timeestimate: null,
    versions: [],
    customfield_10419: null,
    issuelinks: [],
    assignee: null,
    updated: "2020-03-07T20:51:56.951-0500",
    status: {
      self: "https://test.atlassian.net/rest/api/3/status/1",
      description:
        "The issue is open and ready for the assignee to start work on it.",
      iconUrl: "https://test.atlassian.net/images/icons/statuses/open.png",
      name: "Open",
      id: "1",
      statusCategory: {
        self: "https://test.atlassian.net/rest/api/3/statuscategory/2",
        id: 2,
        key: "new",
        colorName: "blue-gray",
        name: "To Do",
      },
    },
    components: [],
    timeoriginalestimate: null,
    description: {
      version: 1,
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "edit",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "edit 2",
            },
          ],
        },
      ],
    },
    customfield_10411: null,
    customfield_10005: null,
    customfield_10446: null,
    security: null,
    customfield_10404: null,
    customfield_10405: null,
    aggregatetimeestimate: null,
    customfield_10406: null,
    customfield_10407: null,
    customfield_10408: null,
    customfield_10409: null,
    summary: "Test Custom Field",
    creator: {
      self:
        "https://test.atlassian.net/rest/api/3/user?accountId=557058%3Ac1f2ea6e-5675-456e-a9ec-b37a43aaeeb5",
      accountId: "557058:c1f2ea6e-5675-456e-a9ec-b37a43aaeeb5",
      emailAddress: "adamz@company.com",
      avatarUrls: {
        "48x48":
          "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:c1f2ea6e-5675-456e-a9ec-b37a43aaeeb5/842225ef-15aa-41fa-9ee4-0eafd421e3c3/128?size=48&s=48",
        "24x24":
          "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:c1f2ea6e-5675-456e-a9ec-b37a43aaeeb5/842225ef-15aa-41fa-9ee4-0eafd421e3c3/128?size=24&s=24",
        "16x16":
          "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:c1f2ea6e-5675-456e-a9ec-b37a43aaeeb5/842225ef-15aa-41fa-9ee4-0eafd421e3c3/128?size=16&s=16",
        "32x32":
          "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:c1f2ea6e-5675-456e-a9ec-b37a43aaeeb5/842225ef-15aa-41fa-9ee4-0eafd421e3c3/128?size=32&s=32",
      },
      displayName: "Adam Z",
      active: true,
      timeZone: "America/New_York",
      accountType: "atlassian",
    },
    subtasks: [],
    reporter: {
      self:
        "https://test.atlassian.net/rest/api/3/user?accountId=557058%3Ac1f2ea6e-5675-456e-a9ec-b37a43aaeeb5",
      accountId: "557058:c1f2ea6e-5675-456e-a9ec-b37a43aaeeb5",
      emailAddress: "adamz@company.com",
      avatarUrls: {
        "48x48":
          "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:c1f2ea6e-5675-456e-a9ec-b37a43aaeeb5/842225ef-15aa-41fa-9ee4-0eafd421e3c3/128?size=48&s=48",
        "24x24":
          "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:c1f2ea6e-5675-456e-a9ec-b37a43aaeeb5/842225ef-15aa-41fa-9ee4-0eafd421e3c3/128?size=24&s=24",
        "16x16":
          "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:c1f2ea6e-5675-456e-a9ec-b37a43aaeeb5/842225ef-15aa-41fa-9ee4-0eafd421e3c3/128?size=16&s=16",
        "32x32":
          "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:c1f2ea6e-5675-456e-a9ec-b37a43aaeeb5/842225ef-15aa-41fa-9ee4-0eafd421e3c3/128?size=32&s=32",
      },
      displayName: "Adam Z",
      active: true,
      timeZone: "America/New_York",
      accountType: "atlassian",
    },
    aggregateprogress: {
      progress: 0,
      total: 0,
    },
    customfield_10000: "{}",
    customfield_10001: null,
    customfield_10320: null,
    customfield_10321: null,
    customfield_10200: null,
    customfield_10322: null,
    customfield_10323: null,
    customfield_10115: null,
    customfield_10313: null,
    customfield_10116: "1|i03p27:",
    customfield_10314: null,
    customfield_10436: null,
    environment: null,
    customfield_10315: null,
    customfield_10437: null,
    customfield_10316: null,
    customfield_10317: null,
    customfield_10318: null,
    customfield_10319: null,
    duedate: null,
    progress: {
      progress: 0,
      total: 0,
    },
    votes: {
      self: "https://test.atlassian.net/rest/api/3/issue/J1TEMP-112/votes",
      votes: 0,
      hasVoted: false,
    },
  },
};

test("createIssueEntity", () => {
  const fieldsById = {
    customfield_10428: {
      name: "Risk Level",
    },
    customfield_10433: {
      name: "Residual Risk",
    },
  };
  const customFieldsToInclude = ["customfield_10428", "residualRisk"];
  const customFields = {
    riskLevel: 9,
    residualRisk: "there is none",
  };
  const jiraIssueEntity = {
    _key: generateEntityKey("jira_issue", jiraIssue.id),
    _type: "jira_issue",
    _scope: "jira_issue",
    _class: ["Risk", "Record"],
    _rawData: [{ name: "default", rawData: jiraIssue }],
    ...customFields,
    id: jiraIssue.id,
    key: "J1TEMP-112",
    name: "J1TEMP-112",
    displayName: "J1TEMP-112",
    summary: "Test Custom Field",
    description: "edit\n\nedit 2",
    category: "issue",
    webLink: `https://test.atlassian.net/browse/J1TEMP-112`,
    status: "Open",
    active: true,
    issueType: "Risk",
    reporter: jiraIssue.fields.reporter && jiraIssue.fields.reporter.name,
    assignee: jiraIssue.fields.assignee && jiraIssue.fields.assignee.name,
    creator: jiraIssue.fields.creator && jiraIssue.fields.creator.name,
    createdOn: getTime(jiraIssue.fields.created),
    updatedOn: getTime(jiraIssue.fields.updated),
    resolvedOn: getTime(jiraIssue.fields.resolutiondate),
    dueOn: getTime(jiraIssue.fields.duedate),
    resolution: jiraIssue.fields.resolution
      ? jiraIssue.fields.resolution.name
      : undefined,
    labels: jiraIssue.fields.labels,
    components: [],
    priority: jiraIssue.fields.priority && jiraIssue.fields.priority.name,
  };
  expect(
    createIssueEntity(
      jiraIssue as any,
      fieldsById as any,
      customFieldsToInclude,
    ),
  ).toEqual(jiraIssueEntity);
});
