import styled from 'styled-components';
import { Avatar, Button } from '@material-ui/core';

export const Paper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AppAvatar = styled(Avatar)`
  margin: 8px;
  background: #dc004e;
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 8px;
`;

export const Submit = styled(Button)`
  margin: 24px 0 16px;
`;
