import { Button } from 'components/common/Button';
import { Container } from 'components/common/Container';
import { SVG } from 'img';

export const Main = () => {
  return (
    <div>
      <Container>
        <Button variant="primary" icon={<SVG.PlusIcon />}>
          Add new event
        </Button>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima qui
          nam harum nisi, quam optio laboriosam quisquam debitis distinctio
          iusto quasi consequuntur nostrum, aliquam ratione sint tempora.
          Maxime, perferendis nam.
        </div>
      </Container>
    </div>
  );
};
