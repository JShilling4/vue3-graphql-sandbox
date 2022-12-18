// @ts-nocheck
import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from "@apollo/client/cache";
import gql from "graphql-tag";
import * as VueApolloComposable from "@vue/apollo-composable";
import * as VueCompositionApi from "vue";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type CacheControlScope = "PRIVATE" | "PUBLIC";

export type Character = {
  __typename?: "Character";
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars["String"]>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars["String"]>;
  /** The id of the character. */
  id?: Maybe<Scalars["ID"]>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars["String"]>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /** The name of the character. */
  name?: Maybe<Scalars["String"]>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The species of the character. */
  species?: Maybe<Scalars["String"]>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars["String"]>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars["String"]>;
};

export type Characters = {
  __typename?: "Characters";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: "Episode";
  /** The air date of the episode. */
  air_date?: Maybe<Scalars["String"]>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars["String"]>;
  /** The code of the episode. */
  episode?: Maybe<Scalars["String"]>;
  /** The id of the episode. */
  id?: Maybe<Scalars["ID"]>;
  /** The name of the episode. */
  name?: Maybe<Scalars["String"]>;
};

export type Episodes = {
  __typename?: "Episodes";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  species?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type FilterEpisode = {
  episode?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type FilterLocation = {
  dimension?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type Info = {
  __typename?: "Info";
  /** The length of the response. */
  count?: Maybe<Scalars["Int"]>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars["Int"]>;
  /** The amount of pages. */
  pages?: Maybe<Scalars["Int"]>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars["Int"]>;
};

export type Location = {
  __typename?: "Location";
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars["String"]>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars["String"]>;
  /** The id of the location. */
  id?: Maybe<Scalars["ID"]>;
  /** The name of the location. */
  name?: Maybe<Scalars["String"]>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>;
  /** The type of the location. */
  type?: Maybe<Scalars["String"]>;
};

export type Locations = {
  __typename?: "Locations";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: "Query";
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
};

export type QueryCharacterArgs = {
  id: Scalars["ID"];
};

export type QueryCharactersArgs = {
  filter?: InputMaybe<FilterCharacter>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type QueryEpisodeArgs = {
  id: Scalars["ID"];
};

export type QueryEpisodesArgs = {
  filter?: InputMaybe<FilterEpisode>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type QueryLocationArgs = {
  id: Scalars["ID"];
};

export type QueryLocationsArgs = {
  filter?: InputMaybe<FilterLocation>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type CharactersQueryVariables = Exact<{ [key: string]: never }>;

export type CharactersQuery = {
  __typename?: "Query";
  characters?: {
    __typename?: "Characters";
    results?: Array<{
      __typename?: "Character";
      id?: string | null;
      name?: string | null;
      status?: string | null;
      gender?: string | null;
    } | null> | null;
  } | null;
};

export type CharacterQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type CharacterQuery = {
  __typename?: "Query";
  character?: {
    __typename?: "Character";
    id?: string | null;
    name?: string | null;
    status?: string | null;
    gender?: string | null;
  } | null;
};

export type CharacterKeySpecifier = (
  | "created"
  | "episode"
  | "gender"
  | "id"
  | "image"
  | "location"
  | "name"
  | "origin"
  | "species"
  | "status"
  | "type"
  | CharacterKeySpecifier
)[];
export type CharacterFieldPolicy = {
  created?: FieldPolicy<any> | FieldReadFunction<any>;
  episode?: FieldPolicy<any> | FieldReadFunction<any>;
  gender?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  location?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  origin?: FieldPolicy<any> | FieldReadFunction<any>;
  species?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CharactersKeySpecifier = (
  | "info"
  | "results"
  | CharactersKeySpecifier
)[];
export type CharactersFieldPolicy = {
  info?: FieldPolicy<any> | FieldReadFunction<any>;
  results?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EpisodeKeySpecifier = (
  | "air_date"
  | "characters"
  | "created"
  | "episode"
  | "id"
  | "name"
  | EpisodeKeySpecifier
)[];
export type EpisodeFieldPolicy = {
  air_date?: FieldPolicy<any> | FieldReadFunction<any>;
  characters?: FieldPolicy<any> | FieldReadFunction<any>;
  created?: FieldPolicy<any> | FieldReadFunction<any>;
  episode?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EpisodesKeySpecifier = (
  | "info"
  | "results"
  | EpisodesKeySpecifier
)[];
export type EpisodesFieldPolicy = {
  info?: FieldPolicy<any> | FieldReadFunction<any>;
  results?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type InfoKeySpecifier = (
  | "count"
  | "next"
  | "pages"
  | "prev"
  | InfoKeySpecifier
)[];
export type InfoFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  next?: FieldPolicy<any> | FieldReadFunction<any>;
  pages?: FieldPolicy<any> | FieldReadFunction<any>;
  prev?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LocationKeySpecifier = (
  | "created"
  | "dimension"
  | "id"
  | "name"
  | "residents"
  | "type"
  | LocationKeySpecifier
)[];
export type LocationFieldPolicy = {
  created?: FieldPolicy<any> | FieldReadFunction<any>;
  dimension?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  residents?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LocationsKeySpecifier = (
  | "info"
  | "results"
  | LocationsKeySpecifier
)[];
export type LocationsFieldPolicy = {
  info?: FieldPolicy<any> | FieldReadFunction<any>;
  results?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | "character"
  | "characters"
  | "charactersByIds"
  | "episode"
  | "episodes"
  | "episodesByIds"
  | "location"
  | "locations"
  | "locationsByIds"
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  character?: FieldPolicy<any> | FieldReadFunction<any>;
  characters?: FieldPolicy<any> | FieldReadFunction<any>;
  charactersByIds?: FieldPolicy<any> | FieldReadFunction<any>;
  episode?: FieldPolicy<any> | FieldReadFunction<any>;
  episodes?: FieldPolicy<any> | FieldReadFunction<any>;
  episodesByIds?: FieldPolicy<any> | FieldReadFunction<any>;
  location?: FieldPolicy<any> | FieldReadFunction<any>;
  locations?: FieldPolicy<any> | FieldReadFunction<any>;
  locationsByIds?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  Character?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CharacterKeySpecifier
      | (() => undefined | CharacterKeySpecifier);
    fields?: CharacterFieldPolicy;
  };
  Characters?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CharactersKeySpecifier
      | (() => undefined | CharactersKeySpecifier);
    fields?: CharactersFieldPolicy;
  };
  Episode?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | EpisodeKeySpecifier
      | (() => undefined | EpisodeKeySpecifier);
    fields?: EpisodeFieldPolicy;
  };
  Episodes?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | EpisodesKeySpecifier
      | (() => undefined | EpisodesKeySpecifier);
    fields?: EpisodesFieldPolicy;
  };
  Info?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | InfoKeySpecifier | (() => undefined | InfoKeySpecifier);
    fields?: InfoFieldPolicy;
  };
  Location?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | LocationKeySpecifier
      | (() => undefined | LocationKeySpecifier);
    fields?: LocationFieldPolicy;
  };
  Locations?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | LocationsKeySpecifier
      | (() => undefined | LocationsKeySpecifier);
    fields?: LocationsFieldPolicy;
  };
  Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;

export const CharactersDocument = gql`
  query Characters {
    characters {
      results {
        id
        name
        status
        gender
      }
    }
  }
`;

/**
 * __useCharactersQuery__
 *
 * To run a query within a Vue component, call `useCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharactersQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCharactersQuery();
 */
export function useCharactersQuery(
  options:
    | VueApolloComposable.UseQueryOptions<
        CharactersQuery,
        CharactersQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          CharactersQuery,
          CharactersQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          CharactersQuery,
          CharactersQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    CharactersQuery,
    CharactersQueryVariables
  >(CharactersDocument, {}, options);
}
export function useCharactersLazyQuery(
  options:
    | VueApolloComposable.UseQueryOptions<
        CharactersQuery,
        CharactersQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          CharactersQuery,
          CharactersQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          CharactersQuery,
          CharactersQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    CharactersQuery,
    CharactersQueryVariables
  >(CharactersDocument, {}, options);
}
export type CharactersQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<CharactersQuery, CharactersQueryVariables>;
export const CharacterDocument = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      gender
    }
  }
`;

/**
 * __useCharacterQuery__
 *
 * To run a query within a Vue component, call `useCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharacterQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCharacterQuery({
 *   id: // value for 'id'
 * });
 */
export function useCharacterQuery(
  variables:
    | CharacterQueryVariables
    | VueCompositionApi.Ref<CharacterQueryVariables>
    | ReactiveFunction<CharacterQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        CharacterQuery,
        CharacterQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          CharacterQuery,
          CharacterQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          CharacterQuery,
          CharacterQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<CharacterQuery, CharacterQueryVariables>(
    CharacterDocument,
    variables,
    options
  );
}
export function useCharacterLazyQuery(
  variables:
    | CharacterQueryVariables
    | VueCompositionApi.Ref<CharacterQueryVariables>
    | ReactiveFunction<CharacterQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        CharacterQuery,
        CharacterQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          CharacterQuery,
          CharacterQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          CharacterQuery,
          CharacterQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    CharacterQuery,
    CharacterQueryVariables
  >(CharacterDocument, variables, options);
}
export type CharacterQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<CharacterQuery, CharacterQueryVariables>;
export const namedOperations = {
  Query: {
    Characters: "Characters",
    Character: "Character",
  },
};
