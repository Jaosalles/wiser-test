import { toast } from 'react-toastify';

interface Error {
  response: {
    status: number;
    data: {
      error: {
        message: string;
      };
    };
  };
}

export function error(err: Error, message: string) {
  switch (err.response.status) {
    case 400:
      toast.error(err.response.data.error.message);
      break;

    case 500:
      toast.error('Serviço temporariamente indisponível');

      break;

    default:
      toast.error(message);
  }
}
