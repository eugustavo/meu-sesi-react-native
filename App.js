import React, { Fragment } from 'react';
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Image, StyleSheet } from 'react-native';

const messages = [
  { id: 1, name: 'Gustavo', avatar_url: 'https://avatars2.githubusercontent.com/u/25755550?s=40&v=4', last_message: 'Olá, isso é um teste', time: '18:20 PM' },
];

const blogList = [
  { id: 1, title: 'SESI será parceiro na ação Cooperar em homenagem ao Dia do Caminhoneiro em Gurupi', author: 'Gustavo Souza', author_avatar: 'https://avatars2.githubusercontent.com/u/25755550?s=40&v=4', cover_image_url: 'http://sesi-to.com.br/thumbnails.aspx?c=1f883de2-e7fb-485d-ba58-0ba12126af70&w=225&h=225', likes: 1290, comments: 129, time: '27 de Junho' },
  { id: 2,title: 'SESI abre processos seletivos para duas vagas em Palmas', author: 'Gustavo Souza', author_avatar: 'https://avatars2.githubusercontent.com/u/25755550?s=40&v=4', cover_image_url: 'http://sesi-to.com.br/thumbnails.aspx?c=62f7b97b-f4f0-44a3-a1e2-dd82f4682331&w=225&h=225', likes: 1290, comments: 129, time: '25 de Junho' },
  { id: 3,title: 'SESI realiza simpósio sobre eSocial em Gurupi', author: 'Gustavo Souza', author_avatar: 'https://avatars2.githubusercontent.com/u/25755550?s=40&v=4', cover_image_url: 'http://sesi-to.com.br/thumbnails.aspx?c=0e33546c-57c1-4eef-b2ef-061c79791efa&w=225&h=225', likes: 1290, comments: 129, time: '25 de Junho' },
  { id: 4,title: 'Escola SESI de Araguaína comemora aprovações no vestibular; aluna vai cursar Medicina na UFT', author: 'Gustavo Souza', author_avatar: 'https://avatars2.githubusercontent.com/u/25755550?s=40&v=4', cover_image_url: 'http://sesi-to.com.br/thumbnails.aspx?c=15d474e2-2976-493a-a62a-411b0bee1aa1&w=225&h=225', likes: 1290, comments: 129, time: '21 de Junho' },
];

const Home = ({ blogList }) => (
  <Content>
    {blogList.map(blog => (
    <Card key={blog.id}>
      <CardItem>
        <Left>
          <Thumbnail source={{ uri: blog.author_avatar}} />
          <Body>
            <Text>{blog.title}</Text>
            <Text note>{blog.author}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={{ uri: blog.cover_image_url}} style={{height: 200, width: null, flex: 1}}/>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon active name="thumbs-up" />
            <Text>{blog.likes}</Text>
          </Button>
        </Left>
        <Body>
          <Button transparent>
            <Icon active name="chatbubbles" />
            <Text>{blog.comments}</Text>
          </Button>
        </Body>
        <Right>
          <Text note>{blog.time}</Text>
        </Right>
      </CardItem>
    </Card>))}
  </Content>
);
const Messages = ({ messages }) => (
  <Fragment>
    <List>
      {messages.map( message => (
        <ListItem avatar key={message.id}>
          <Left>
            <Thumbnail source={{ uri: message.avatar_url}} />
          </Left>
          <Body>
            <Text>{message.name}</Text>
            <Text note>{message.last_message}</Text>
          </Body>
          <Right>
            <Text note>{message.time}</Text>
          </Right>
        </ListItem>
      ))}
    </List>
    <Fab
      direction="up"
      position="bottomRight"
      style={{ backgroundColor: "#0000cd"}}
    >
      <Icon type="FontAwesome" name="plus" />
    </Fab>
  </Fragment>
);
const Notification = () => null;

const logo_url = 'https://logodownload.org/wp-content/uploads/2016/10/sesi-logo-9.png';

const App = () => (
  <Container>
    <Header androidStatusBarColor="#00008b" style={styles.header} hasTabs>
      <Left>
        <Thumbnail style={{width: 120, height: 60, alignItems:'center', justifyContent:'center', marginLeft: 7 }} source={{ uri: logo_url }} />
      </Left>
    </Header>
    <View style={styles.container}>
    <Tabs>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="home" /></TabHeading>}>
        <Home blogList={blogList}/>
      </Tab>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="bell-o" /></TabHeading>}>
        <Notification />
      </Tab>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="envelope-o" /></TabHeading>}>
        <Messages messages={messages}/>
      </Tab>
    </Tabs>
    </View>
  </Container>
);

export default App;

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: "#1a1af0",
  },
  header: { 
    backgroundColor: "#1a1af0",
  },
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    marginLeft: 25,   
  }
});