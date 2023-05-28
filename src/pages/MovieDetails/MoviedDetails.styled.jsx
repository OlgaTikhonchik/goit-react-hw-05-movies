import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ButtonBack = styled(Link)`
  padding: 5px;
  border: 2px solid #71360b;
  border-radius: 6px;
  font-size: 18px;
  text-decoration: none;
  color: #2c1708;
  background-color: #9c704f;
  font-weight: 600;

  :hover {
    color: #ffffff;
  }
`;

export const ContainerDetails = styled.div`
  margin-top: 30px;
  display: flex;
`;

export const Img = styled.img`
  margin-right: 20px;
  max-width: 300px;
`;

export const ContainerInfo = styled.div``;

export const TitleInfo = styled.h1`
  text-transform: uppercase;
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.15;
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const Span = styled.span`
  font-size: 18px;
`;
export const SpanGenres = styled.span`
  margin-right: 10px;
  font-weight: 500;
`;

export const ItemInfo = styled.li`
  list-style: none;
`;

export const LinkInfo = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-size: 20px;
  font-weight: 600;

  :hover {
    color: #785724;
  }
`;
