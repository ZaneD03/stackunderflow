import { Card, Form } from 'react-bootstrap';
import SimplePage from '../components/SimplePage';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
  const { theme, setTheme } = useTheme();
  return <SimplePage title="Settings" description="Make the app feel right for you.">
    <Card className="simple-card"><Card.Body>
      <fieldset><legend className="h5">Appearance</legend>
        <p className="text-body-secondary">Choose a light or dark theme. Your preference is saved on this browser.</p>
        <div className="theme-options">
          {['light', 'dark'].map(value => <div key={value} className={`theme-option ${theme === value ? 'selected' : ''}`}>
            <span className={`theme-swatch theme-swatch-${value}`} aria-hidden="true"><span /><span /><span /></span>
            <Form.Check type="radio" name="appearance" id={`theme-${value}`} value={value}
              checked={theme === value} onChange={() => setTheme(value)} label={value === 'light' ? 'Light' : 'Dark'} />
          </div>)}
        </div>
      </fieldset>
    </Card.Body></Card>
  </SimplePage>;
}
