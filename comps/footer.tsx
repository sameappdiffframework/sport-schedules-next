import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

export default function Footer({}) {
  return (
    <>
      <Divider sx={{mt: '8px'}}/>
      <Container disableGutters component="footer">
        <Link variant="overline" href="https://github.com/sameappdiffframework/sport-schedules-next">
        colbywhite/sport-schedules-next
        </Link>
      </Container>
    </>
  );
}
