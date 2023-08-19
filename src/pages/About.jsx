import styled from 'styled-components'
const CenterText = styled.div`text-align: center; & > h2 { font-size: 2.75rem; }`

function About() {
  return (
    <CenterText>
      <h2>About the app</h2>
      <p>A react tutorial application w/ router, axios and custom hooks</p>
      <p>Created on <time dateTime="19.8.2023.">Aug 19th, 2023</time>.</p>
    </CenterText>
  );
}

export default About;