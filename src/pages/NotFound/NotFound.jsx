import { TextNotFound, TitleNotFound } from './NotFound.styled';

const NotFound = () => {
  return (
    <div>
      <TitleNotFound> Page not found </TitleNotFound>
      <TextNotFound>
        Please, return to the home page. And try to enter a new movie!
      </TextNotFound>
    </div>
  );
};

export default NotFound;
