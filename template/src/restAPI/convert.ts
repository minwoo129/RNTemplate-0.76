import {uploadFileType} from './types';

/**
 * 파일 업로드 시 form 객체 데이터 변환
 */
export const convertFormDataWhenFileUpload = (
  files: uploadFileType[],
  formName?: string,
) => {
  const formData = new FormData();

  let name = formName ?? '';
  if (!formName) {
    if (files.length > 1) {
      name = 'files';
    } else {
      name = 'file';
    }
  }

  for (let file of files) {
    const {fileName, type, uri} = file;
    formData.append(name, {
      name: encodeURIComponent(fileName),
      type,
      uri,
    });
  }

  return formData;
};
