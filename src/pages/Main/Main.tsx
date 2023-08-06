import { Button } from 'components/common/Button';
import { Container } from 'components/common/Container';
import { Input } from 'components/common/Input';
import { MultilinedField } from 'components/common/MultilinedField';
import { TextField } from 'components/common/TextField';
import { SVG } from 'img';

export const Main = () => {
  return (
    <div>
      <Container>
        <Button variant="primary" icon={<SVG.PlusIcon />}>
          Add new event
        </Button>
        <br />
        <TextField
          error={false}
          label="City"
          name="city"
          id="city"
          type="text"
        />
        <br />
        <MultilinedField error={false} label="Description" name="description" />
        <br />
        <Input />
        <br />
        <input type="date" />
        <br />
        <input type="time" />
      </Container>
    </div>
  );
};
