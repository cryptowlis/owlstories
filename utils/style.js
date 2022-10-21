import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#ffffff',
    boxShadow: '1px 1px 5px grey',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  main: {
    minHeight: '83vh',
  },
  footer: {
    textAlign: 'center',
  },
});

export default useStyles;
