import { LineContainer, Line, Paragraph, AboutHeading, AboutWrapper, About } from 'styles/CandidateProfileTwo'

const AboutCandidate = () => {
  return (
    <About>
      <AboutWrapper>
        <LineContainer>
          About ME
          <Line />
        </LineContainer>
        <AboutHeading>Tell About You</AboutHeading>
        <Paragraph className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum que laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta su. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum que laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta su
        </Paragraph>
      </AboutWrapper>
    </About>
  )
}

export default AboutCandidate
