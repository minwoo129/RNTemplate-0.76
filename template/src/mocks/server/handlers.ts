import {http, HttpResponse, PathParams} from 'msw';

type GetRequestResolverType<T extends PathParams<keyof T>> = Parameters<
  typeof http.get<T>
>[1];
type PostRequestResolverType<T extends PathParams<keyof T>> = Parameters<
  typeof http.post<T>
>[1];

// =======================================================================================
const getUserInfo = () => {
  const user = {
    name: 'test',
    age: 20,
    gender: 'male',
  };

  return HttpResponse.json(user);
};
// =======================================================================================
export const handlers = [http.get('/api/test/get/user', getUserInfo)];
