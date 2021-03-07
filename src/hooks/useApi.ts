import { ref, Ref } from 'vue'

export interface RequestOptions<R = any, P extends any[] = any[]>{
  manual: boolean;
  params: P;
  initialData: R;
}

const defaultOptions = {
  manual: false, // 是否需要手动调用 run 触发执行
  params: [] as any[],
  initialData: undefined // 初始化数据
}

export function useApi<R = any, P extends any[] = any[]> (
  service: (...args: P) => Promise<R>,
  options: Partial<RequestOptions> = {}
) {
  const finalOptions = { ...defaultOptions, ...options }
  const loading = ref<boolean>(false)
  const data = ref(finalOptions.initialData) as Ref<R | undefined>
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

  if (!finalOptions.manual) {
    run(...finalOptions.params as P)
  }

  return {
    loading,
    data,
    error,
    run
  }
}
