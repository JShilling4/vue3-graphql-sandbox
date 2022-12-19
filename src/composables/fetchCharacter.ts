import { charactersRepository } from "@/api/repositories/characters";
import { computed, readonly, type Ref } from "vue";

export function useFetchCharacter(id: Ref<string>) {
  const {
    result: characterResult,
    loading: characterLoading,
    error: characterError,
    refetch: refetchCharacter,
  } = charactersRepository.get(id.value);

  const character = computed(() => characterResult.value?.character);

  return {
    character: readonly(character),
    characterLoading: readonly(characterLoading),
    characterError: readonly(characterError),
    refetchCharacter,
  };
}
