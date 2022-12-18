<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, ref } from "vue";
import { graphql } from "./gql";
import type { CharactersQuery, CharacterQuery } from "./gql/graphql";

const characterId = ref<string>("1");

const { data } = useQuery<CharactersQuery>({
  query: graphql(/* GraphQL */ `
    query Characters {
      characters {
        results {
          id
          name
        }
      }
    }
  `),
});
const characters = computed(() => data.value?.characters?.results ?? []);

const { data: data2 } = useQuery<CharacterQuery>({
  query: graphql(/* GraphQL */ `
    query Character($id: ID!) {
      character(id: $id) {
        id
        name
        gender
      }
    }
  `),
  variables: { id: characterId },
});
const character = computed(() => data2.value?.character);
</script>

<template>
  <main>
    <div class="query-block">
      <h1>Get All Characters</h1>
      <!-- <p v-if="charactersError">
        Something went wrong...{{ charactersError.message }}
      </p> -->
      <!-- <p v-if="charactersLoading">Loading...</p> -->
      <div v-if="characters && characters.length">
        <p v-for="(char, i) in characters" :key="i">
          {{ char?.name }}
        </p>
      </div>
    </div>

    <div class="query-block">
      <h1>Get Character By Id</h1>
      <!-- <p v-if="characterLoading">Loading...</p> -->
      <p v-if="character" class="">
        {{ character.name }}
      </p>
    </div>

    <!-- <button @click="fetchAllCharacters()">Refetch Characters</button>
    <button @click="fetchCharacter({ id: '2' })">Refetch Character</button> -->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
