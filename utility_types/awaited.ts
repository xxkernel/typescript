type PromiseUser = Promise<User>;
type Result = Awaited<PromiseUser>;

const getMyName = async () => {
  return {
    name: 'Kevin',
  };
};
type MyNameResult = Awaited<ReturnType<typeof getMyName>>;
