import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Activities = {
  __typename?: 'Activities';
  activities?: Maybe<Array<ActivitiesInfo>>;
};

export type ActivitiesInfo = {
  __typename?: 'ActivitiesInfo';
  date: Scalars['String'];
  desc: Scalars['String'];
  type: Scalars['String'];
};

export type Apps = {
  __typename?: 'Apps';
  apps?: Maybe<Array<AppsInfo>>;
};

export type AppsInfo = {
  __typename?: 'AppsInfo';
  id: Scalars['String'];
  name: Scalars['String'];
  deviceCount: Scalars['Float'];
  platforms: Array<AppsPlatformsInfo>;
};

export type AppsPlatformsInfo = {
  __typename?: 'AppsPlatformsInfo';
  id: Scalars['String'];
  platform: Scalars['String'];
  modelTarget?: Maybe<ModelTarget>;
};

export type ModelTarget = {
  __typename?: 'ModelTarget';
  model: Scalars['String'];
  runtime: Scalars['String'];
  version: Scalars['String'];
};

export type Models = {
  __typename?: 'Models';
  models?: Maybe<Array<ModelsInfo>>;
};

export type ModelsInfo = {
  __typename?: 'ModelsInfo';
  id: Scalars['String'];
  name: Scalars['String'];
  source: Scalars['String'];
  tags: Array<Scalars['String']>;
  versions: Array<VersionsInfo>;
};

export type Query = {
  __typename?: 'Query';
  apps: Apps;
  models: Models;
  activites: Activities;
  usage: Usage;
};

export type Usage = {
  __typename?: 'Usage';
  usage?: Maybe<UsageInfo>;
};

export type UsageInfo = {
  __typename?: 'UsageInfo';
  Models?: Maybe<UsageInfoProperties>;
  Apps?: Maybe<UsageInfoProperties>;
  Devices?: Maybe<UsageInfoProperties>;
};

export type UsageInfoProperties = {
  __typename?: 'UsageInfoProperties';
  limit: Scalars['Float'];
  usage: Scalars['Float'];
};

export type VersionsInfo = {
  __typename?: 'VersionsInfo';
  name: Scalars['String'];
};

export type ActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type ActivitiesQuery = (
  { __typename?: 'Query' }
  & { activites: (
    { __typename?: 'Activities' }
    & { activities?: Maybe<Array<(
      { __typename?: 'ActivitiesInfo' }
      & Pick<ActivitiesInfo, 'date' | 'desc' | 'type'>
    )>> }
  ) }
);

export type AppsQueryVariables = Exact<{ [key: string]: never; }>;


export type AppsQuery = (
  { __typename?: 'Query' }
  & { apps: (
    { __typename?: 'Apps' }
    & { apps?: Maybe<Array<(
      { __typename?: 'AppsInfo' }
      & Pick<AppsInfo, 'id' | 'name' | 'deviceCount'>
      & { platforms: Array<(
        { __typename?: 'AppsPlatformsInfo' }
        & Pick<AppsPlatformsInfo, 'id' | 'platform'>
        & { modelTarget?: Maybe<(
          { __typename?: 'ModelTarget' }
          & Pick<ModelTarget, 'model' | 'runtime' | 'version'>
        )> }
      )> }
    )>> }
  ) }
);

export type ModelsQueryVariables = Exact<{ [key: string]: never; }>;


export type ModelsQuery = (
  { __typename?: 'Query' }
  & { models: (
    { __typename?: 'Models' }
    & { models?: Maybe<Array<(
      { __typename?: 'ModelsInfo' }
      & Pick<ModelsInfo, 'id' | 'name' | 'source' | 'tags'>
      & { versions: Array<(
        { __typename?: 'VersionsInfo' }
        & Pick<VersionsInfo, 'name'>
      )> }
    )>> }
  ) }
);

export type UsageQueryVariables = Exact<{ [key: string]: never; }>;


export type UsageQuery = (
  { __typename?: 'Query' }
  & { usage: (
    { __typename?: 'Usage' }
    & { usage?: Maybe<(
      { __typename?: 'UsageInfo' }
      & { Models?: Maybe<(
        { __typename?: 'UsageInfoProperties' }
        & Pick<UsageInfoProperties, 'limit' | 'usage'>
      )>, Apps?: Maybe<(
        { __typename?: 'UsageInfoProperties' }
        & Pick<UsageInfoProperties, 'limit' | 'usage'>
      )>, Devices?: Maybe<(
        { __typename?: 'UsageInfoProperties' }
        & Pick<UsageInfoProperties, 'limit' | 'usage'>
      )> }
    )> }
  ) }
);


export const ActivitiesDocument = gql`
    query Activities {
  activites {
    activities {
      date
      desc
      type
    }
  }
}
    `;

export function useActivitiesQuery(options: Omit<Urql.UseQueryArgs<ActivitiesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ActivitiesQuery>({ query: ActivitiesDocument, ...options });
};
export const AppsDocument = gql`
    query Apps {
  apps {
    apps {
      id
      name
      deviceCount
      platforms {
        id
        platform
        modelTarget {
          model
          runtime
          version
        }
      }
    }
  }
}
    `;

export function useAppsQuery(options: Omit<Urql.UseQueryArgs<AppsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AppsQuery>({ query: AppsDocument, ...options });
};
export const ModelsDocument = gql`
    query Models {
  models {
    models {
      id
      name
      source
      tags
      versions {
        name
      }
    }
  }
}
    `;

export function useModelsQuery(options: Omit<Urql.UseQueryArgs<ModelsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ModelsQuery>({ query: ModelsDocument, ...options });
};
export const UsageDocument = gql`
    query Usage {
  usage {
    usage {
      Models {
        limit
        usage
      }
      Apps {
        limit
        usage
      }
      Devices {
        limit
        usage
      }
    }
  }
}
    `;

export function useUsageQuery(options: Omit<Urql.UseQueryArgs<UsageQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UsageQuery>({ query: UsageDocument, ...options });
};