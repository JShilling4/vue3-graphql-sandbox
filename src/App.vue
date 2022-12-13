<script setup lang="ts">
import { ref } from "vue";
import { getAllCharacters, getCharacter } from "./api/graphql/queries";

const characterId = ref<string>("1");

const {
  result: charactersResult,
  loading: charactersLoading,
  error: charactersError,
} = getAllCharacters();

const { result: characterResult } = getCharacter(characterId);

function selectCharacter(id: string) {
  characterId.value = id;
}
</script>

<template>
  <main>
    <div class="query-block">
      <h1>Get All Characters</h1>
      <p v-if="charactersError">
        Something went wrong...{{ charactersError.message }}
      </p>
      <p v-if="charactersLoading">Loading...</p>
      <p
        v-else
        v-for="character in charactersResult.characters.results"
        :key="character.id"
        @click="selectCharacter(character.id)"
      >
        {{ character.name }}
      </p>
    </div>
    <div class="query-block">
      <h1>Get Character By Id</h1>
      <p v-if="characterResult" class="">
        {{ characterResult.character.name }}
      </p>
    </div>
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
