import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import BizQR from '../images/bizqr.png';
import NoiseCtrl from '../images/noisectrl.png';
import Groovn from '../images/groovn.png';
import Pillage from '../images/pillage.png';
import Placeholder from '../images/placeholder.png';
import { HireMe, LinkButton } from '../components/Button.js';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { darken } from 'polished';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const SkillsSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  ${media.phone`
    display: flex;
    flex-direction: column;
  `}
`;

const SkillsList = styled.ul`
  list-style-type: none;
  margin-top: -25px;
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 200px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

class Homepage extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Name Surname" className="avatar" />
            <t.H1 primary align="center">
              Douglas Campbell
            </t.H1>
            <t.LargeP align="center" max45>
              Full Stack Developer
            </t.LargeP>
            <HireMe large onClick={this.openContactPopup} book>
              Hire me
            </HireMe>
            <a href="#projects">
              <HireMe large book style={{ marginLeft: '10px' }}>
                Projects
              </HireMe>
            </a>
          </AboveFold>
          <Content>
            <t.H2 primary align="center" bold>
              Skills
            </t.H2>
            <SkillsSection>
              <div className="skill-cat">
                <t.H4 primary align="center" bold>
                  Languages
                </t.H4>
                <SkillsList>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                </SkillsList>
              </div>
              <div className="skill-cat">
                <t.H4 primary align="center" bold>
                  Frameworks/Libraries/etc
                </t.H4>
                <SkillsList>
                  <li>React/Redux/MobX</li>
                  <li>NodeJS</li>
                  <li>ExpressJS</li>
                  <li>Django</li>
                  <li>Bootstrap</li>
                  <li>MaterialUI</li>
                </SkillsList>
              </div>
              <div className="skill-cat">
                <t.H4 primary align="center" bold>
                  Database
                </t.H4>
                <SkillsList>
                  <li>SQL(PostgresQL)</li>
                  <li>NoSQL(MongoDB)</li>
                  <li>GraphQL(Apollo)</li>
                </SkillsList>
              </div>
              <div className="skill-cat">
                <t.H4 primary align="center" bold>
                  Tools
                </t.H4>
                <SkillsList>
                  <li>Visual Studio Code</li>
                  <li>Git/Github</li>
                  <li>NPM</li>
                  <li>Yarn</li>
                  <li>Webpack</li>
                </SkillsList>
              </div>
            </SkillsSection>

            <t.P align="center" max70 className="who-desc"></t.P>
            <t.H2 primary align="center" id="projects" bold className="portfolio">
              Projects
            </t.H2>
          </Content>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={BizQR} alt="BizQR Page" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>BizQR</t.H2>
                <t.P>User Interface</t.P>
                <t.P>
                  A multi-page marketing website for a business card organizer application using HTML5, CSS3, LESS,
                  Responsive Web Design and JavaScript(ES2015).
                </t.P>
                <LinkButton primary bold className="link" as="a" target="_blank" href="https://tinyurl.com/y8trcr6j">
                  View Site
                </LinkButton>
                <br />
                <br />
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/businesscardorganizer-pt-042219/labs1-businesscardorganizer-UI-Douglas-"
                >
                  GitHub
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Noise Controller</t.H2>
                <t.P>Front End</t.P>
                <t.P>
                  Front End for an app to gamify quieting a loud classroom. Built using React, Redux for state
                  management, Recharts for data visualization, Reactstrap, and the Web Audio API to pick up sound input.
                </t.P>
                <LinkButton primary bold className="link" as="a" target="_blank" href="https://tinyurl.com/ycs7gnxa">
                  View App
                </LinkButton>
                <br />
                <br />
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/noise-controller-bw/Front-End"
                >
                  GitHub
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={NoiseCtrl} alt="Noise Controller App" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Placeholder} alt="Placeholder title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Artist Portfolio</t.H2>
                <t.P>Back End</t.P>
                <t.P>
                  An API using NodeJS, Express, SQL for data storage, Knex as an ORM, Supertest and Jest for testing.
                </t.P>
                <LinkButton primary bold className="link" as="a" target="_blank" href="https://tinyurl.com/yapwc8y8">
                  GitHub
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>GroovnMusic</t.H2>
                <t.P>Full Stack</t.P>
                <t.P>
                  A music recommendation application built using the Spotify API, MongoDB for data storage, Mongoose,
                  Apollo Server, GraphQL, NodeJS, and Express on the back end. The front end used React (w/ Context API
                  and Hooks), Apollo Boost, PassportJS and OAuth. Recommendation engine built using Python and Flask.
                </t.P>
                <LinkButton primary bold className="link" as="a" target="_blank" href="https://tinyurl.com/ycsbcbk2">
                  GitHub
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Groovn} alt="GroovnMusic App" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Pillage and Plunder</t.H2>
                <t.P>Back End</t.P>
                <t.P>
                  A Multi-User Dungeon game with Python, Django and SQL on the back end and React on the front end.
                </t.P>
                <LinkButton primary bold className="link" as="a" target="_blank" href="https://tinyurl.com/yad59g38">
                  View App
                </LinkButton>
                <br />
                <br />
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/MudTeamI/CS-Build-Week-1"
                >
                  GitHub
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Pillage} alt="Pillage and Plunder Game" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <WorkWithMe>
            <t.H1 green>Get in touch with me</t.H1>
            <t.LargeP>Interested in working with me? Contact me for more info! </t.LargeP>
            <HireMe onClick={this.openContactPopup} book>
              Contact me
            </HireMe>
          </WorkWithMe>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;