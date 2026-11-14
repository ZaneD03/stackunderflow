import { Card, Accordion } from 'react-bootstrap';
import SimplePage from '../components/SimplePage';

export default function ContactUs() {
  return <SimplePage title="Contact Us" description="Need a hand? Start here.">
    <Card className="simple-card mb-4"><Card.Body>
      <h2 className="h5">Get in touch</h2>
      <p className="mb-1">For help or feedback, contact your project team.</p>
      <p className="text-body-secondary mb-0">A support email address hasn’t been added yet.</p>
    </Card.Body></Card>
    <h2 className="h5 mb-3">Common questions</h2>
    <Accordion>
      <Accordion.Item eventKey="0"><Accordion.Header>How do I change the appearance?</Accordion.Header><Accordion.Body>Open Account → Settings, then choose Light or Dark. Your choice is saved on this browser.</Accordion.Body></Accordion.Item>
      <Accordion.Item eventKey="1"><Accordion.Header>Where can I review my transactions?</Accordion.Header><Accordion.Body>Open Financial Summary from the navigation. Select a month to review its activity.</Accordion.Body></Accordion.Item>
      <Accordion.Item eventKey="2"><Accordion.Header>Can I reset my password?</Accordion.Header><Accordion.Body>The login page includes a Forgot password link. Email delivery is not connected in this frontend demo.</Accordion.Body></Accordion.Item>
    </Accordion>
  </SimplePage>;
}
