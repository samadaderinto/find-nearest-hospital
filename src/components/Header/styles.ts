import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    textTransform: "uppercase",
    fontWeight: "bolder",
    textShadow: "5px 10px 20px rgba(0,0,0, .2)",
    letterSpacing: "2px",
    marginRight: "0"
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
  },
  searchIcon: {
     height: '60%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', left: "13px", top: '8px',
  },
    searchIconImage: {
     height: '100%', fill: "#ffffff",
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1.3, 1, 1, 1), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
  },
  toolbar: {
    display: 'flex', justifyContent: 'space-between',
  },

  button: {
    color: alpha(theme.palette.common.white,1),
  }
}));
