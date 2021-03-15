import 'semantic-ui-css/semantic.min.css'
import {
  Grid,
  Segment,
  Icon,
  Search,
  Header,
  Divider,
  Button,
  Dimmer,
  Loader,
  Image,
  Placeholder,
  List
} from 'semantic-ui-react'

function App() {
  return (
   <Grid>
    <Grid.Row>
      <Grid.Column>
        <Segment>
          <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>Or</Divider>
            <Grid.Row verticalAlign='middle'>
              <Grid.Column width='50%'>
                <Header icon>
                  <Icon name='search'/>
                  Cari Document
                </Header>
                <Search placeholder='Search document...'/>
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name='pdf file outline'/>
                  Tambah Document Baru
                </Header>
                <br/>
                <Button color='primary' content='Create Document'/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>
          <Dimmer active>
            <Loader/>
          </Dimmer>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Segment>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line/>
              <Placeholder.Line/>
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line/>
              <Placeholder.Line/>
            </Placeholder.Paragraph>
          </Placeholder>
        </Segment>
      </Grid.Column>
      <Grid.Column width={7}>
        <Segment>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line/>
              <Placeholder.Line/>
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line/>
              <Placeholder.Line/>
            </Placeholder.Paragraph>
          </Placeholder>
        </Segment>
      </Grid.Column>
      <Grid.Column width={3}>
        <Header as='h3'>
          Website Terkait
        </Header>
        <List>
          <List.Item icon='linkify' content={<a href='https://www.google.com' target='blank'>Google</a>}/>
          <List.Item icon='linkify' content={<a href='https://www.facebook.com' target='blank'>Facebook</a>}/>
          <List.Item icon='linkify' content={<a href='https://react.semantic-ui.com' target='blank'>Semantic UI</a>}/>
          <List.Item icon='linkify' content={<a href='https://www.niomic.com' target='blank'>Niomic</a>}/>
          <List.Item icon='linkify' content={<a href='https://www.reactjs.org' target='blank'>react</a>}/>
        </List>
      </Grid.Column>
    </Grid.Row>
   </Grid>
  );
}

export default App;
