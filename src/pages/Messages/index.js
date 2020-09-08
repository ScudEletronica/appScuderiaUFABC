import React from 'react';

import { 
  Title, 
} from './styles';

import { 
  Container, Scroll, Content, End
} from '~/styles/global'

import Head from '~/components/Head';
import MessageList from '~/components/MessageList'
import Back from '~/components/Back';

const text = `
  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
  
  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
`

const Messages = () => {
  return (
    <Container>
      <Head />
      <Scroll>
        <Content>
          <Title>RECADOS</Title>
          <MessageList
            title="Hello World"
            date="8/16/2020"
            content={text}
          />
          <MessageList
            title="Goodbye World"
            date="14/05/2021"
            content={text}
          />
          <MessageList
            title="Lorem Ipsum"
            date="8/16/13"
            content={text}
          />
          <MessageList
            title="Lorem Ipsum"
            date="8/16/13"
            content={text}
          />
          <MessageList
            title="Lorem Ipsum"
            date="8/16/13"
            content={text}
          />
        </Content>
        <End>
          <Back />
        </End>
      </Scroll>
    </Container>
  );
}

export default Messages;