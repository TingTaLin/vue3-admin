import { Res } from '../helper';
import API from '@/utils/api';
import { getLocalStorage } from '@/utils/localStorage';

const data = [
  {
    id: 1,
    title: 'Test1',
    description: 'Test1 Description',
    done: true
  },
  {
    id: 2,
    title: 'Test2',
    description: '1232',
    done: false
  },
  {
    id: 3,
    title: 'Test3',
    description: 'Test3 Desc',
    done: false
  }
];

const getTodoList = () => {
  return getLocalStorage('accessToken') ? new Res('success', data) : new Res('error');
};

const getTodoItem = (id: number) => {
  const item = data.filter((item: { [key: string]: any }) => item.id === id);
  return new Res('success', item);
};

export default function(server: any) {
  server.get(API.TODO, () => {
    return getTodoList();
  });

  server.post(API.TODO, (schema: any, request: any) => {
    const data = JSON.parse(request.requestBody);
    return new Res('success');
  });

  server.get(`${API.TODO}/:id`, (schema: any, request: any) => {
    const id = parseInt(request.params.id, 10);
    return getTodoItem(id);
  });

  server.put(`${API.TODO}/:id`, (schema: any, request: any) => {
    const data = JSON.parse(request.requestBody);
    return new Res('success', data);
  });

  server.delete(`${API.TODO}/:id`, () => {
    return new Res('success');
  });
}
