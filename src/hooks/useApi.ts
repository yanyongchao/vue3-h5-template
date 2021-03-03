import { ref, Ref } from 'vue'

export interface RequestOptions<R = any, P extends any[] = any[]>{
  manual: boolean;
  params: P;
  initialData: R;
}

export function useApi<R = any, P extends any[] = any[]> (
  service: (...args: P) => Promise<R>,
  options: Partial<RequestOptions> = {}
) {
  const loading = ref<boolean>(false)
  const data = ref(options.initialData) as Ref<R>
  const error = ref<Error | null>(null)

  const run = async (...args: P) => {
    loading.value = true
    error.value = null
    try {
      const response = await service(...args)
      data.value = response
      return response
    } catch (err) {
      console.error(err)
      error.value = err
    } finally {
      loading.value = false
    }
  }

  if (!options.manual) {
    run(...options.params as P)
  }

  return {
    loading,
    data,
    error,
    run
  }
}
