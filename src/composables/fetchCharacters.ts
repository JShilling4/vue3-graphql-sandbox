import { charactersRepository } from "@/api/repositories/characters";
import { computed, readonly } from "vue";

export function useFetchCharacters() {
  const {
    result: charactersResult,
    loading: charactersLoading,
    error: charactersError,
    refetch: refetchAllCharacters,
  } = charactersRepository.getAll();

  const characters = computed(
    () => charactersResult.value?.characters?.results ?? []
  );

  return {
    characters: readonly(characters),
    charactersLoading: readonly(charactersLoading),
    charactersError: readonly(charactersError),
    refetchAllCharacters,
  };
}
