import { gql, useMutation } from '@apollo/client';
import type { ChangeEvent } from 'react';
import type {
  IMutation,
  IMutationUploadFileArgs,
} from '../../../src/commons/types/generated/types';

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [uploadFile] = useMutation<Pick<IMutation, 'uploadFile'>, IMutationUploadFileArgs>(
    UPLOAD_FILE
  );

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유 : <input type="file" multiple /> 일떄 여러개 드래그 가능
    console.log(file);
    const result = await uploadFile({
      variables: {
        file,
      },
    });
    console.log(result.data?.uploadFile.url);
  };

  return <input type="file" onChange={onChangeFile} />;
}
