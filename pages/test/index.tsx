import Prismjs from 'prismjs'
import { languages } from 'prismjs/components'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-regex'
import 'prismjs/components/prism-jsx'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Editor from 'react-simple-code-editor'
const jsSample = `function add(a, b) {
  const a = "yeysy";
  return a + b;
}
`
const TestPage = () => {
  const [state, setState] = useState<any>(jsSample)
  return (
    <Container>
      <Row>
        <Col className="bg-success">
          <div>asdasasdasjdhas das asd</div>
          <div>asdasasdasjdhas das asd</div>
          <div>asdasasdasjdhas das asd</div>
          <div>asdasasdasjdhas das asd</div>
          <div>asdasasdasjdhas das asd</div>
          <div>asdasasdasjdhas das asd</div>
          <div>asdasasdasjdhas das asd</div>
          <div>asdasasdasjdhas das asd</div>
        </Col>
        <Col className="bg-primary d-flex ">aklsndasd</Col>
        <Col className="">
          aklsndasd
          <div>asdasasdasjdhas das asd</div>
          <div>asdasasdasjdhas das asd</div>
          <div>asdasasdasjdhas das asd</div>
        </Col>
      </Row>
      <h3>JavaScript</h3>
      <Editor
        className="border"
        value={state}
        onValueChange={jsSample => setState({ jsSample })}
        highlight={jsSample => Prismjs.highlight(jsSample, {}, languages.js)}
        padding={10}
      />
    </Container>
  )
}

export default TestPage
