export interface HandleResponseOptions<Data> {
  service: () => Promise<Data>;
  mutationName: string;
  defaultData?: Data;
}

export const handleResponse = async <Data>(commit: any, options: HandleResponseOptions<Data>) => {
  const { service, mutationName: MUTATION_NAME, defaultData } = options;

  let payload: {
    data: Data | undefined;
    loading: boolean;
    error: any;
  } = {
    data: defaultData,
    loading: true,
    error: false,
  };
  commit(MUTATION_NAME, payload);

  try {
    const data = await service();
    payload = {
      data,
      loading: false,
      error: false,
    };
    commit(MUTATION_NAME, payload);

    return {
      success: true,
      data,
    };
  } catch (err) {
    payload = {
      data: defaultData,
      loading: false,
      error: err,
    };
    console.error(err);
    commit(MUTATION_NAME, payload);

    return {
      success: false,
      data: undefined,
      error: err,
    };
  }
};
