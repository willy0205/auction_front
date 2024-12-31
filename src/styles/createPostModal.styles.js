import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 12px;
  width: 90%;
  max-width: 700px;
  max-height: 90vh;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dbdbdb;
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

export const ImageUploadArea = styled.div`
  border: 2px dashed #dbdbdb;
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    border-color: #0095f6;
  }
`;

export const ImagePreviewArea = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const ImagePreview = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  
  button {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 12px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  resize: vertical;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #0095f6;
  }
`;

export const SubmitButton = styled.button`
  background-color: #0095f6;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  color: #ed4956;
  font-size: 12px;
  margin-top: 4px;
`;

export const ImageCount = styled.div`
  color: #8e8e8e;
  font-size: 12px;
  margin-top: 4px;
`;

export const ModeSelector = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ModeButton = styled.button`
  flex: 1;
  padding: 10px;
  border: 1px solid ${props => props.active ? '#0095f6' : '#dbdbdb'};
  background-color: ${props => props.active ? '#0095f6' : 'white'};
  color: ${props => props.active ? 'white' : '#262626'};
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.active ? '#0081d6' : '#f8f8f8'};
  }
`;

export const TabPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  color: #262626;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #0095f6;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;

  &:focus {
    outline: none;
    border-color: #0095f6;
  }
`;

export const DateTimeInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #0095f6;
  }
`;

export const CurrencyInputGroup = styled.div`
  display: flex;
  gap: 10px;

  ${Input} {
    flex: 1;
  }

  ${Select} {
    width: 100px;
  }
`; 